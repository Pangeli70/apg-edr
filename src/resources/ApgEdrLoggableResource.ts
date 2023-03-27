/** -----------------------------------------------------------------------
 * @module [EDR]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/23]
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * -----------------------------------------------------------------------
 */

import { Drash, Lgr, Rst, Uts } from "../../deps.ts";
import { ApgEdrResource } from "./ApgEdrResource.ts";
import { ApgEdrLoggableService } from "../services/ApgEdrLoggableService.ts";
import { IApgEdrLoggableRequest } from "../interfaces/IApgEdrLoggableRequest.ts";

/**
 * A base Resource with logging capabilities
 */
export abstract class ApgEdrLoggableResource extends ApgEdrResource {

  protected loggable?: Lgr.ApgLgrLoggable;

  protected logInit(aimportMetaUrl: string, request: Drash.Request) {
    const className = new Uts.ApgUtsMetaUrl(aimportMetaUrl).FileName;
    const loggableReq = this.#getlogger(request);
    this.loggable = new Lgr.ApgLgrLoggable(className, loggableReq.logger);
  }


  #getlogger(request: Drash.Request) {
    // deno-lint-ignore no-explicit-any
    return (<IApgEdrLoggableRequest>(<any>request)[ApgEdrLoggableService.INJECTED_FIELD_NAME]);
  }

  protected logBegin(amethodName: string, amessage?: string) {
    const r: Rst.IApgRst = { ok: true, message: amessage };
    this.loggable!.logBegin(amethodName, r);
  }

  protected logEnd() {
    this.loggable!.logEnd();
  }

  protected logTrace(amessage: string) {
    return this.loggable!.logTrace(amessage);
  }

}
