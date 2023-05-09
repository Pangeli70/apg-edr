/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/03]
 * @version 0.9.1 [APG 2022/09/10] Github Beta
 * @version 0.9.2 [APG 2022/10/07] Loggable resource
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash } from "../deps.ts";
import { ApgEdrStaticResource } from "./ApgEdrStaticResource.ts";
import { ApgEdrService } from "../classes/ApgEdrService.ts";

/** Resource to deliver static files in binary format, stored in asset folder */
export class ApgEdrAssetBinFileResource extends ApgEdrStaticResource {

  public override paths = [
    "/assets/img/ico/.*\.(ico)",
    "/assets/img/jpg/.*\.(jpg|jpeg)",
    "/assets/img/png/.*\.(png)",
    "/assets/img/gif/.*\.(gif)",
    "/assets/pdf/.*\.(pdf)",
    "/assets/zip/.*\.(zip)"
  ];

  public async GET(request: Drash.Request, response: Drash.Response) {

    const extension = request.url.split(".").at(-1);
    let type: string;
    switch (extension) {
      case 'ico':
        type = 'image/x-icon'
        break;
      case 'jpg':
        type = 'image/jpeg'
        break;
      case 'png':
        type = 'image/png'
        break;
      case 'gif':
        type = 'image/gif'
        break;
      case 'pdf':
        type = 'application/pdf'
        break;
      case 'zip':
        type = 'application/zip'
        break;
      default:
        type = 'application/octet-stream'
    }

    const file = ApgEdrService.AssetsFolder + new URL(request.url).pathname;
    
    const content = await this.processBin(file) as Uint8Array;
    
    response.body = content;
    response.headers.set("Content-Type", type);

    const maxAge = ApgEdrService.ClientBinMaxAgeSeconds;
    response.headers.append("Cache-Control", `private, max-age=${maxAge}, immutable`)
  }

}