/** -----------------------------------------------------------------------
 * @module [Edr] Enhanced Drash resources
 * @author [APG] ANGELI Paolo Giusto
 * -----------------------------------------------------------------------
*/
export * from "./src/classes/ApgEdrPublicBinFileResource.ts";
export * from "./src/classes/ApgEdrPublicTextFileResource.ts";
export * from "./src/classes/ApgEdrStaticResource.ts";
export * from "./src/classes/ApgEdrLoggableResource.ts";
export * from "./src/classes/ApgEdrResource.ts";

export * from "./src/enums/eApgEdrRequestParamSimpleTypes.ts";

export type { IApgEdrLoggableRequest } from "./src/interfaces/IApgEdrLoggableRequest.ts"
export type { IApgEdrProtectedRequest } from "./src/interfaces/IApgEdrProtectedRequest.ts"
export type { IApgEdrRequestExt } from "./src/interfaces/IApgEdrRequestExt.ts"
export type { IApgEdrStaticResourceCacheableItem } from "./src/interfaces/IApgEdrStaticResourceCacheableItem.ts"
