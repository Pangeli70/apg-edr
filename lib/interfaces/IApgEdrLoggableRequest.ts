
/** ----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/04/14] Porting to Deno
 * @version 0.9.2 [APG 2022/10/07] Github beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Lgr } from '../deps.ts';


/**
 * Data structure injected in the Drash request for storing data for the ApgEdrLoggableService
 */
export interface IApgEdrLoggableRequest {

  /** The reference to the injected request logger */
  logger: Lgr.ApgLgr;

}
