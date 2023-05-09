/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * ------------------------------------------------------------------------
*/
import { Drash } from "./deps.ts";
import * as Edr from "../lib/mod.ts"
import { ApgEdrHomeResource } from "./resources/ApgEdrHomeResource.ts";


export const resources: typeof Drash.Resource[] = [

    // Static
    Edr.ApgEdrAssetBinFileResource,
    Edr.ApgEdrAssetsTextFileResource,

    // Edr
    ApgEdrHomeResource,

];
