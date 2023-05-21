/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.2.0 [APG 2018/06/02]
 * @version 0.5.0 [APG 2018/11/25]
 * @version 0.8.0 [APG 2022/04/17] Porting to Deno
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */

/**
 * Incoming parameters types from querystring, paths, bodies and cookies
 */
export enum eApgEdrParamTypes {
    STRING = "string",
    FLOAT = "float",
    INTEGER = "integer",
    BOOLEAN = "boolean"
  }