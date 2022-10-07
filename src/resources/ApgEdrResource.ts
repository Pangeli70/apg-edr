/** -----------------------------------------------------------------------
 * @module [Edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.0.1 [APG 2021/02/21]
 * @version 0.8.0 [APG 2022/04/20]
 * @version 0.9.2 [APG 2022/10/07] Github Beta
 * -----------------------------------------------------------------------
 */
import { Drash} from "../../deps.ts";
import { eApgEdrRequestParamSimpleTypes } from "../enums/eApgEdrRequestParamSimpleTypes.ts";
import { IApgEdrRequestParams } from "../interfaces/IApgEdrRequestParams.ts";
import { ApgEdrParamsService } from "../services/ApgEdrParamsService.ts";
import { TApgEdrSimpleParam } from "../types/TApgEdrSimpleParam.ts";


export abstract class ApgEdrResource extends Drash.Resource {


  getParams(request: Drash.Request) {
    // deno-lint-ignore no-explicit-any
    return (<IApgEdrRequestParams>(<any>request)[ApgEdrParamsService.INJECTED_FIELD_NAME]);
  }

  protected getQueryStringParam(
    request: Drash.Request,
    aname: string,
    atype: eApgEdrRequestParamSimpleTypes
  ): TApgEdrSimpleParam {

    let r: TApgEdrSimpleParam = null;

    const param = request.queryParam(aname);
    if (param && typeof (param) == 'string') {
      r = this._checkSimpleParamType(param, atype);
    }
    return r;
  }

  protected getSimpleBodyParam(
    request: Drash.Request,
    aname: string,
    atype: eApgEdrRequestParamSimpleTypes
  ): TApgEdrSimpleParam {

    let r: TApgEdrSimpleParam = null;

    const param = request.bodyParam(aname);

    if (param && typeof (param) == 'string') {
      r = this._checkSimpleParamType(param, atype);
    }

    return r;
  }

  protected getSimpleCookieParam(

    request: Drash.Request,
    aname: string,
    atype: eApgEdrRequestParamSimpleTypes
  ): TApgEdrSimpleParam {

    let r: TApgEdrSimpleParam = null;

    const param = request.getCookie(aname);

    if (param && typeof (param) == 'string') {
      r = this._checkSimpleParamType(param, atype);
    }

    return r;
  }

  private _checkSimpleParamType(
    param: string | null,
    atype: eApgEdrRequestParamSimpleTypes
  ): TApgEdrSimpleParam {

    let r: TApgEdrSimpleParam = null;
    if (param !== null) {
      switch (atype) {
        case eApgEdrRequestParamSimpleTypes.STRING: {
          r = param;
          break;
        }
        case eApgEdrRequestParamSimpleTypes.FLOAT: {
          const n = parseFloat(param);
          r = (isNaN(n)) ? null : n;
          break;
        }
        case eApgEdrRequestParamSimpleTypes.INTEGER: {
          const n = parseInt(param);
          r = (isNaN(n)) ? null : n;
          break;
        }
        case eApgEdrRequestParamSimpleTypes.BOOLEAN: {
          const n = parseInt(param);
          r = (n === 1 || param === "true") ? true : false;
          break;
        }
      }

    }
    return r;
  }

}
