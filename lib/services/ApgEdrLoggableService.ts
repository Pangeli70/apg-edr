/** -----------------------------------------------------------------------
 * @module [Edr/lib]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/23]
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash, Lgr, Rst, Uts } from "../deps.ts";
import { IApgEdrEveryRequest, IApgEdrEveryRequestSignature } from "../interfaces/IApgEdrEveryRequest.ts";
import { ApgEdrEveryReqService } from "./ApgEdrEveryReqService.ts";


/** 
 * A service that adds a logger to the Drash Request
 */
export class ApgEdrLoggableService extends Drash.Service {
  public static readonly CLASS_NAME = new Uts.ApgUtsMetaUrl(import.meta.url).FileName;
  public static readonly LOGGER = "ApgLgr";
  public static readonly LOGGABLE = "ApgLgrLoggable";

  public override runBeforeResource(request: Drash.Request, _response: Drash.Response) {

    const every = (<any>request)[ApgEdrEveryReqService.EVERY_REQUEST] as IApgEdrEveryRequest;

    // TODO replace with Rst assert
    if (every == undefined) {
      throw new Error(ApgEdrLoggableService.CLASS_NAME + ", needs ApgEdrEveryReqService already in place, check list of Drash services and its order")
    }
    
    const name = `${request.url}`;
    const logger = new Lgr.ApgLgr(name);
    logger.flush();
    const loggable = new Lgr.ApgLgrLoggable(ApgEdrLoggableService.CLASS_NAME, logger);
    const status: Rst.IApgRst = {
      ok: true,
      payload: {
        signature: IApgEdrEveryRequestSignature,
        data:  every
      }
    }
    loggable.logBegin(this.runBeforeResource.name, status);

    // inject middleware data into the request
    (<any>request)[ApgEdrLoggableService.LOGGER] = logger;
    (<any>request)[ApgEdrLoggableService.LOGGABLE] = loggable;

  }

  public override runAfterResource(request: Drash.Request, _response: Drash.Response) {

    const every = (<any>request)[ApgEdrEveryReqService.EVERY_REQUEST] as IApgEdrEveryRequest;
    every.endTime = performance.now();
    every.procTime = every.endTime - every.startTime;
    const status: Rst.IApgRst = {
      ok: true,
      payload: {
        signature: IApgEdrEveryRequestSignature,
        data: every
      }
    }

    const loggable = (<any>request)[ApgEdrLoggableService.LOGGABLE] as Lgr.ApgLgrLoggable;
    loggable!.logEnd(status);
    const logger = (<any>request)[ApgEdrLoggableService.LOGGER] as Lgr.ApgLgr;
    logger!.flush();
  }
}