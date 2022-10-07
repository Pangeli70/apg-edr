/** -----------------------------------------------------------------------
 * @module [EDR]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/23]
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * -----------------------------------------------------------------------
 */
import { Drash, Uts, Lgr, Rst } from "../../deps.ts"
import { IApgEdrLoggableRequest } from "../interfaces/IApgEdrLoggableRequest.ts";
import { ApgEdrResource } from "./ApgEdrResource.ts"



/**
 * A base Resource with logging capabilities
 */
export abstract class ApgEdsLoggableResource extends ApgEdrResource {

  protected loggable?: Lgr.ApgLgrLoggable;
  protected loggableReq?: IApgEdrLoggableRequest; 

  protected logInit(aimportMetaUrl: string, request: Drash.Request) {
    const className = new Uts.ApgUtsMetaUrl(aimportMetaUrl).FileName;
    super.initialize(request);
    if (<any>this.reqExt && (<any>this.reqExt!).logger) { 
      this.loggableReq = <IApgEdrLoggableRequest><any>this.reqExt;
      this.loggable = new Lgr.ApgLgrLoggable(className, this.loggableReq.logger);
    }
  }

  protected logBegin(amethodName: string, amessage?: string) {
    const r = new Rst.ApgRst({message: amessage})
    this.loggable!.logBegin(amethodName, r);
  }

  protected logEnd() {
    this.loggable!.logEnd();
  }

  protected logTrace(amessage: string) {
    return this.loggable!.logTrace(amessage);
  }

}
