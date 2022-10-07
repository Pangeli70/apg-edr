/** -----------------------------------------------------------------------
 * @module [Edr] Enhanced Drash resources
 * @author [APG] ANGELI Paolo Giusto
 * -----------------------------------------------------------------------
*/
export * from "./src/resources/ApgEdrPublicBinFileResource.ts";
export * from "./src/resources/ApgEdrPublicTextFileResource.ts";
export * from "./src/resources/ApgEdrStaticResource.ts";
export * from "./src/resources/ApgEdrLoggableResource.ts";
export * from "./src/resources/ApgEdrResource.ts";

export * from "./src/services/ApgEdrEveryReqService.ts";
export * from "./src/services/ApgEdrParamsService.ts";
export * from "./src/services/ApgEdrLoggableService.ts";

export * from "./src/enums/eApgEdrRequestParamSimpleTypes.ts";

export type { IApgEdrEveryRequest } from "./src/interfaces/IApgEdrEveryRequest.ts"
export type { IApgEdrLoggableRequest } from "./src/interfaces/IApgEdrLoggableRequest.ts"
export type { IApgEdrProtectedRequest } from "./src/interfaces/IApgEdrProtectedRequest.ts"
export type { IApgEdrRequestParams } from "./src/interfaces/IApgEdrRequestParams.ts"
export type { IApgEdrStaticResourceCacheableItem } from "./src/interfaces/IApgEdrStaticResourceCacheableItem.ts"

export type { TApgEdrSimpleParam } from "./src/types/TApgEdrSimpleParam.ts"
