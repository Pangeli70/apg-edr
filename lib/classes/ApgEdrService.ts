/** ----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

import { IApgEdrCacheableAsset } from "../interfaces/IApgEdrCacheableAsset.ts";


/** Contains configuration parameters of the Edr */
export class ApgEdrService {

    /** The cache of the assets or static resources like files for images etc. */
    private static readonly _assetsCache: Map<string, IApgEdrCacheableAsset> = new Map();

    /** The assets folder */
    private static _assetsFolder = "./srv";

    /** The assets cache max age in milliseconds */
    private static _assetsMaxAge = 5 * 60 * 1000; // 5 min;

    /** Response header max age for binary files like images */
    private static _clientBinMaxAge = 1 * 60; // 30 min;
    /**  Response header max age for text files like style sheets and javascript */
    private static _clientTxtMaxAge = 1 * 60; // 30 min;

    static get AssetsCache() {
        return this._assetsCache;
    }

    static get AssetsFolder() {
        return this._assetsFolder;
    }

    static get AssetsMaxAgeMilliseconds() {
        return this._assetsMaxAge;
    }

    static get ClientBinMaxAgeSeconds() {
        return this._clientBinMaxAge;
    }

    static get ClientTxtMaxAgeSeconds() {
        return this._clientTxtMaxAge;
    }


    static Init(aoptions: {
        assetsFolder?: string
        assetsMaxAgeSeconds?: number
        clientBinMaxAgeSeconds?: number
        clientTxtMaxAgeSeconds?: number
    }) {
        if (aoptions.assetsFolder && typeof (aoptions.assetsFolder) == "string") {
            this._assetsFolder = aoptions.assetsFolder
        }
        if (aoptions.assetsMaxAgeSeconds && typeof (aoptions.assetsMaxAgeSeconds) == "number") {
            this._assetsMaxAge = aoptions.assetsMaxAgeSeconds
        }
        if (aoptions.clientBinMaxAgeSeconds && typeof (aoptions.clientBinMaxAgeSeconds) == "number") {
            this._clientBinMaxAge = aoptions.clientBinMaxAgeSeconds
        }
        if (aoptions.clientTxtMaxAgeSeconds && typeof (aoptions.clientTxtMaxAgeSeconds) == "number") {
            this._clientTxtMaxAge = aoptions.clientTxtMaxAgeSeconds
        }

    }
}