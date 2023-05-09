
/** ----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.8.0 [APG 2022/04/14] Porting to Deno
 * @version 0.9.2 [APG 2022/10/07] Github beta only scaffolded
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { IApgEdrLoggableRequest } from "./IApgEdrLoggableRequest.ts";

interface IApgAthTokenPayload { 
  // TODO implement 
  dummy: string;
}

enum eApgAthRoles { 
  dummy = "dummy"
}


/** The additional data used by Edr and that is carried by the Drash.Request */
export interface IApgEdrProtectedRequest extends IApgEdrLoggableRequest {

  /** The current token payload */
  tokenPayload: IApgAthTokenPayload;
  /** The current role required for the current request */
  currentRole: eApgAthRoles;
  /** New token with extended updated lifespan */
  newToken: string;

}
