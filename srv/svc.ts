/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * ------------------------------------------------------------------------
*/
import { ApgEdrEveryReqService } from "../lib/services/ApgEdrEveryReqService.ts";
import { ApgEdrLoggableService } from "../lib/services/ApgEdrLoggableService.ts";
import { ApgEdrParamsService } from "../lib/services/ApgEdrParamsService.ts";
import { DrashCorsService, Drash } from "./deps.ts";

export const services: Drash.Service[] = [
    new DrashCorsService(),
    new ApgEdrEveryReqService(),
    new ApgEdrLoggableService(),
    new ApgEdrParamsService()
];