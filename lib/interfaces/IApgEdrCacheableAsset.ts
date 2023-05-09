/** ----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.9.2 [APG 2022/10/07] Github beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

/**
 * Stores the data for the asset cacheable item
 */
export interface IApgEdrCacheableAsset {

  /** Number of times it was tried to retieve from the cache */
  retrieved: number;

  /** Number of times it was updated in the cache */
  updated: number;

  /** The file content in memory */
  content: string | Uint8Array;

  /** The content is text */
  isText: boolean;

  /** Milliseconds from Deno start of the last request */
  lastRequest: number;
}
