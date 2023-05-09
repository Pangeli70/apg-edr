/** ----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.2 [APG 2022/10/07] Github beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
*/

import { Uts } from "../deps.ts";

export const IApgEdrEveryRequestSymbol = Symbol(new Uts.ApgUtsMetaUrl(import.meta.url).FileName);
export const IApgEdrEveryRequestSignature = new Uts.ApgUtsMetaUrl(import.meta.url).FileName;

export interface IApgEdrEveryRequest {
  number: number;
  startTime: number;
  submission: Date;
  url: string;
  endTime?: number;
  procTime?: number;
}
