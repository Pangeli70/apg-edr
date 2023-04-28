/** -----------------------------------------------------------------------
 * @module [Edr/lib]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.0.1 [APG 2021/02/21]
 * @version 0.8.0 [APG 2022/04/20]
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash} from "../deps.ts";
import { eApgEdrParamTypes } from "../enums/eApgEdrParamTypes.ts";
import { IApgEdrRequestParams } from "../interfaces/IApgEdrRequestParams.ts";
import { ApgEdrParamsService } from "../services/ApgEdrParamsService.ts";
import { TApgEdrPrimitiveParam } from "../types/TApgEdrTypes.ts";


export abstract class ApgEdrResource extends Drash.Resource {


  getEdrParams(request: Drash.Request) {
    // deno-lint-ignore no-explicit-any
    const params = (<IApgEdrRequestParams>(<any>request)[ApgEdrParamsService.REQUEST_PARAMS]);
    
    return params;
  }

  protected getQueryStringParam(
    request: Drash.Request,
    aname: string,
    atype: eApgEdrParamTypes
  ): TApgEdrPrimitiveParam {

    let r: TApgEdrPrimitiveParam = null;

    const param = request.queryParam(aname);
    if (param && typeof (param) == 'string') {
      r = this.#checkParamType(param, atype);
    }
    return r;
  }

  protected getBodyParam(
    request: Drash.Request,
    aname: string,
    atype: eApgEdrParamTypes
  ): TApgEdrPrimitiveParam {

    let r: TApgEdrPrimitiveParam = null;

    const param = request.bodyParam(aname);

    if (param && typeof (param) == 'string') {
      r = this.#checkParamType(param, atype);
    }

    return r;
  }

  protected getCookieParam(
    request: Drash.Request,
    aname: string,
    atype: eApgEdrParamTypes
  ): TApgEdrPrimitiveParam {

    let r: TApgEdrPrimitiveParam = null;

    const param = request.getCookie(aname);

    if (param && typeof (param) == 'string') {
      r = this.#checkParamType(param, atype);
    }

    return r;
  }


  protected getPathParam(
    request: Drash.Request,
    aname: string,
    atype: eApgEdrParamTypes
  ): TApgEdrPrimitiveParam {

    let r: TApgEdrPrimitiveParam = null;

    const param = request.pathParam(aname);

    if (param && typeof (param) == 'string') {
      r = this.#checkParamType(param, atype);
    }

    return r;
  }

   #checkParamType(
    param: string | null,
    atype: eApgEdrParamTypes
  ): TApgEdrPrimitiveParam {

    let r: TApgEdrPrimitiveParam = null;
    if (param !== null) {
      switch (atype) {
        case eApgEdrParamTypes.STRING: {
          r = param;
          break;
        }
        case eApgEdrParamTypes.FLOAT: {
          const n = parseFloat(param);
          r = (isNaN(n)) ? null : n;
          break;
        }
        case eApgEdrParamTypes.INTEGER: {
          const n = parseInt(param);
          r = (isNaN(n)) ? null : n;
          break;
        }
        case eApgEdrParamTypes.BOOLEAN: {
          const n = parseInt(param);
          r = (n === 1 || param === "true") ? true : false;
          break;
        }
      }

    }
    return r;
  }

}
