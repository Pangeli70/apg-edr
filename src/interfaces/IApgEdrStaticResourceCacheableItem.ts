/** ----------------------------------------------------------------------
 * @module [EDR]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.9.2 [APG 2022/10/07] Github beta
 * -----------------------------------------------------------------------
 */
export interface IApgEdrStaticResourceCacheableItem {
  count: number;
  content: string | Uint8Array;
  isText: boolean;
  lastRequest: number;
}
