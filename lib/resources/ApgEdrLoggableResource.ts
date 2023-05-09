/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/23]
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { Drash, Lgr, Rst, Uts } from "../deps.ts";
import { ApgEdrResource } from "./ApgEdrResource.ts";
import { ApgEdrLoggableService } from "../services/ApgEdrLoggableService.ts";


/**
 * A base Resource with logging capabilities
 */
export abstract class ApgEdrLoggableResource extends ApgEdrResource {

  protected loggable?: Lgr.ApgLgrLoggable;

  protected logInit(aimportMetaUrl: string, request: Drash.Request) {
    const className = new Uts.ApgUtsMetaUrl(aimportMetaUrl).FileName;
    const logger = this.#getLogger(request, className);
    this.loggable = new Lgr.ApgLgrLoggable(className, logger);
  }


  #getLogger(request: Drash.Request, aclassName: string) {

    const logger = (<any>request)[ApgEdrLoggableService.LOGGER] as Lgr.ApgLgr;
    // TODO replace with Rst assert
    if (logger == undefined) {
      throw new Error(aclassName + ", needs a logger coming from ApgEdrLoggableService, check list of Drash services;")
    }
    return logger;
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
