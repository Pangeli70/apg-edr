/** -----------------------------------------------------------------------
 * @module [Edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.0.1 [APG 2021/02/21]
 * @version 0.8.0 [APG 2022/04/03] Porting to Deno
 * @version 0.9.1 [APG 2022/09/10] Github Beta
 * @version 0.9.2 [APG 2022/10/07] Loggable resource
 * -----------------------------------------------------------------------
 */
import { Drash } from "../../deps.ts";
import {
  IApgEdrStaticResourceCacheableItem
} from "../interfaces/IApgEdrStaticResourceCacheableItem.ts";

const CACHE_EXPIRATION = 1000;

const staticResoucesCache: { [key: string]: IApgEdrStaticResourceCacheableItem } = {};

/**
 * Provides static files asyncronously using an in memory cache to speed up the process
 */
export abstract class ApgEdrStaticResource extends Drash.Resource {

  protected async processText(aresourceFile: string): Promise<string> {

    let r: string ;
    try {

      if (staticResoucesCache[aresourceFile] == undefined) {

          r = await Deno.readTextFile(aresourceFile);


        const staticCacheableItem: IApgEdrStaticResourceCacheableItem = {
          count: 1,
          content: r,
          isText: true,
          lastRequest: performance.now()
        }
        staticResoucesCache[aresourceFile] = staticCacheableItem;
      }
      else {

        const staticCacheableItem: IApgEdrStaticResourceCacheableItem = staticResoucesCache[aresourceFile];
        const currentTime = performance.now();
        const deltaTime = currentTime - staticCacheableItem.lastRequest;

        if (deltaTime > CACHE_EXPIRATION) {
            staticCacheableItem.content = await Deno.readTextFile(aresourceFile);
        }

        staticCacheableItem.count++;
        staticCacheableItem.lastRequest = currentTime;
        r = staticCacheableItem.content as string;

      }

      return r;

    } catch (error) {
      console.error(error);
      throw new Drash.Errors.HttpError(
        400,
        `Error reading static resource (${aresourceFile}).`,
      );

    }

  }

  protected async processBin(aresourceFile: string,): Promise<Uint8Array> {

    let staticContent: Uint8Array;
    try {

      if (staticResoucesCache[aresourceFile] == undefined) {

        staticContent = await Deno.readFile(aresourceFile);

        const staticCacheableItem: IApgEdrStaticResourceCacheableItem = {
          count: 1,
          content: staticContent,
          isText: false,
          lastRequest: performance.now()
        }

        staticResoucesCache[aresourceFile] = staticCacheableItem;
      }
      else {

        const staticCacheableItem: IApgEdrStaticResourceCacheableItem = staticResoucesCache[aresourceFile];
        const currentTime = performance.now();
        const deltaTime = currentTime - staticCacheableItem.lastRequest;

        if (deltaTime > CACHE_EXPIRATION) {
          staticCacheableItem.content = await Deno.readFile(aresourceFile);
        }

        staticCacheableItem.count++;
        staticCacheableItem.lastRequest = currentTime;
        staticContent = staticCacheableItem.content as Uint8Array;

      }

      return staticContent;

    } catch (error) {
      console.error(error);
      throw new Drash.Errors.HttpError(
        400,
        `Error reading static resource (${aresourceFile}).`,
      );

    }

  }

}
