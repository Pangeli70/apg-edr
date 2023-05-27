/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * ------------------------------------------------------------------------
*/
import { Edr } from "./deps.ts";
import { ApgEdrHomeResource } from "./resources/ApgEdrHomeResource.ts";

export const ApgEdrServices: Edr.Drash.Service[] = [
    new Edr.Drash.CORSService(),
    new Edr.ApgEdrEveryReqService(),
    new Edr.ApgEdrLoggableService(),
    new Edr.ApgEdrParamsService()
];

export const ApgEdrResources: typeof Edr.Drash.Resource[] = [

    // Static
    Edr.ApgEdrAssetBinFileResource,
    Edr.ApgEdrAssetsTextFileResource,

    // Edr
    ApgEdrHomeResource,

];
