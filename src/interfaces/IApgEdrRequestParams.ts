/** ----------------------------------------------------------------------
 * @module [EDR]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.9.2 [APG 2022/10/07] Github beta
 * -----------------------------------------------------------------------
 */

/** This data is filled by the Edr Prams Drash Service for each request when
 * the before resurce event is handled
 */
export interface IApgEdrRequestParams
{
    /** All the parses query string params */
    queryStringParams: { [key: string]: string };
    /** All the parsed body params */
    bodyPostParams: { [key: string]: string };
    /** All the parsed header params */
    headerParams: { [key: string]: string };
    /** All the parsed cookie params */
    cookieParams: { [key: string]: string };
    /** Date time of the server when the request has arrived */
    submission: Date;

}