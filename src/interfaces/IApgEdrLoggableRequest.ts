
/** ----------------------------------------------------------------------
 * @module [EDR]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/04/14] Porting to Deno
 * @version 0.9.2 [APG 2022/10/07] Github beta
 * -----------------------------------------------------------------------
 */
import {Lgr } from '../../deps.ts';
import { IApgEdrRequestExt } from "./IApgEdrRequestExt.ts";


/** The additional data used by Drash service and that is carried by the Drash.Request */
export interface IApgEdrLoggableRequest extends IApgEdrRequestExt {

  /** The reference to the injected request logger */
  logger: Lgr.ApgLgr;

}
