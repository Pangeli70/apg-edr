/** -----------------------------------------------------------------------
 * @module [Services]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/23]
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Lgr } from "../../deps.ts";
import { IApgEdrLoggableRequest } from "../interfaces/IApgEdrLoggableRequest.ts";


/** 
 * A service that adds a logger to the Drash Request
 */
export class ApgEdrLoggableService extends Drash.Service {

  public static INJECTED_FIELD_NAME = "ApgEdrLogger";

  public override runBeforeResource(request: Drash.Request, _response: Drash.Response) {

    const name = `Resource: [${request.url}]`;

    const logger = new Lgr.ApgLgr(name);

    const loggableReq: IApgEdrLoggableRequest = {
      logger
    };

    // inject middleware data into the request
    (<any>request)[ApgEdrLoggableService.INJECTED_FIELD_NAME] = loggableReq;

  }

  public override runAfterResource(request: Drash.Request, _response: Drash.Response) {
    const loggableReq = (<any>request)[ApgEdrLoggableService.INJECTED_FIELD_NAME] as IApgEdrLoggableRequest;
    loggableReq!.logger!.flush();
  }
}