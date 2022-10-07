/** -----------------------------------------------------------------------
 * @module [Services]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/23]
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * -----------------------------------------------------------------------
 */
import { Drash,  } from "../../deps.ts";
import { IApgEdrRequestParams } from "../interfaces/IApgEdrRequestParams.ts";


/**
 * A service that collects params data from the Drash.Request
 */
export class ApgEdrParamsService extends Drash.Service {

  public static INJECTED_FIELD_NAME = "ApgEdrParams";
  
  public runBeforeResource(
    request: Drash.Request,
    _response: Drash.Response)
  {

    const decodedUri = decodeURIComponent(request.url);

    const queryString: string[] = decodedUri.split("?");
    const queryStringParams: { [key: string]: string } = {};
    if (queryString.length == 2) {
      const pairs: string[] = queryString[1].split("&");
      pairs.forEach(element => {
        const fragments: string[] = element.split("=");
        if (fragments.length == 2) {
          queryStringParams[fragments[0]] = fragments[1];
        }
      });
    }

    let bodyParams = <{ [key: string]: string }>request.bodyAll();
    if (!bodyParams) bodyParams = {};

    const headerParams: { [key: string]: string } = {};
    const keys: string[] = [];
    for (const key of request.headers.keys()) {
      keys.push(key);
    }
    let i = 0;
    for (const value of request.headers.values()) {
      headerParams[keys[i]] = value;
      i++;
    }

    const cookieParams: { [key: string]: string } = {};
    const cookies = headerParams["Cookie"];
    if (cookies) {
      const cookiePairs: string[] = cookies.split(";");
      for (const pair of cookiePairs) {
        const keyValue = pair.split("=");
        if (keyValue.length == 2) {
          cookieParams[keyValue[0].trim()] = keyValue[1].trim();
        }
      }
    }

    const r: IApgEdrRequestParams = {
      submission: new Date(),
      queryStringParams: queryStringParams,
      bodyPostParams: bodyParams,
      headerParams: headerParams,
      cookieParams: cookieParams
    };

    // Inject the Params data Request into the Drash Request
    (<any>request)[ApgEdrParamsService.INJECTED_FIELD_NAME] = r;
    
  }

}
