/** -----------------------------------------------------------------------
 * @module [Edr/lib]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.0.1 [APG 2021/02/21]
 * @version 0.8.0 [APG 2022/04/03] Porting to Deno
 * @version 0.9.1 [APG 2022/09/10] Github Beta
 * @version 0.9.2 [APG 2022/10/07] Loggable resource
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash } from "../deps.ts";
import { ApgEdrService } from "../classes/ApgEdrService.ts";
import { IApgEdrCacheableAsset } from "../interfaces/IApgEdrCacheableAsset.ts";

/**
 * Provides static files asyncronously using an in memory cache to speed up the process
 */
export abstract class ApgEdrStaticResource extends Drash.Resource {

  async #processAsset(aresourceFile: string, aistext: boolean) {

    let r: string | Uint8Array;
    try {
      const cached = ApgEdrService.AssetsCache.get(aresourceFile);
      if (cached == undefined) {

        r = aistext ?
          await Deno.readTextFile(aresourceFile) :
          await Deno.readFile(aresourceFile);

        const newCached: IApgEdrCacheableAsset = {
          retrieved: 1,
          updated: 1,
          content: r,
          isText: aistext,
          lastRequest: performance.now()
        }
        ApgEdrService.AssetsCache.set(aresourceFile, newCached);
      }
      else {

        const currentTime = performance.now();
        const deltaTime = currentTime - cached.lastRequest;

        if (deltaTime > ApgEdrService.AssetsMaxAgeMilliseconds) {
          r = aistext ?
            await Deno.readTextFile(aresourceFile) :
            await Deno.readFile(aresourceFile);
          cached.content = r;
          cached.updated++;
        }

        cached.retrieved++;
        cached.lastRequest = currentTime;
        r = cached.content;

      }

      return r;

    } catch (error) {
      console.error(error);
      console.error(aresourceFile);
      throw new Drash.Errors.HttpError(
        400,
        `Error reading static resource (${aresourceFile}).`,
      );

    }

  }

  protected async processText(aresourceFile: string) {
    return await this.#processAsset(aresourceFile, true) as string;
  }

  protected async processBin(aresourceFile: string) {
    return await this.#processAsset(aresourceFile, false) as Uint8Array;
  }

}
