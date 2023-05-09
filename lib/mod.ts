/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
*/
export * from "./classes/ApgEdrService.ts"

export * from "./enums/eApgEdrParamTypes.ts";

export type { IApgEdrEveryRequest } from "./interfaces/IApgEdrEveryRequest.ts"
export type { IApgEdrLoggableRequest } from "./interfaces/IApgEdrLoggableRequest.ts"
export type { IApgEdrProtectedRequest } from "./interfaces/IApgEdrProtectedRequest.ts"
export type { IApgEdrRequestParams } from "./interfaces/IApgEdrRequestParams.ts"
export type { IApgEdrCacheableAsset } from "./interfaces/IApgEdrCacheableAsset.ts"

export * from "./resources/ApgEdrResource.ts";
export * from "./resources/ApgEdrStaticResource.ts";
export * from "./resources/ApgEdrAssetTextFileResource.ts";
export * from "./resources/ApgEdrAssetBinFileResource.ts";
export * from "./resources/ApgEdrLoggableResource.ts";

export * from "./services/ApgEdrEveryReqService.ts";
export * from "./services/ApgEdrParamsService.ts";
export * from "./services/ApgEdrLoggableService.ts";

export type { TApgEdrPrimitiveParam } from "./types/TApgEdrTypes.ts"
