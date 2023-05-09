/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/09] Implemented mime types
 * @version 0.9.1 [APG 2022/09/10] Github Beta
 * @version 0.9.2 [APG 2022/10/07] Loggable resource
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash } from "../deps.ts";
import { ApgEdrService } from "../classes/ApgEdrService.ts";
import { ApgEdrStaticResource } from "./ApgEdrStaticResource.ts";

/** Deliver static text files stored in public folder */
export class ApgEdrAssetsTextFileResource extends ApgEdrStaticResource {

  public override paths = [
    "/assets/html/.*\.(html)",
    "/assets/css/.*\.(css)",
    "/assets/js/.*\.(js)",
    "/assets/txt/.*\.(txt)",
    "/assets/csv/.*\.(csv)",
    "/assets/img/svg/.*\.(svg)",
  ];

  public async GET(request: Drash.Request, response: Drash.Response) {

    const extension = request.url.split(".").at(-1);
    let type: string;
    switch (extension) {
      case 'html':
        type = 'text/html'
        break;
      case 'css':
        type = 'text/css'
        break;
      case 'csv':
        type = 'text/csv'
        break;
      case 'svg':
        type = 'image/svg+xml'
        break;
      case 'js':
        type = 'text/javascript'
        break;
      default:
        type = 'text/plain'
    }

    const file = ApgEdrService.AssetsFolder + new URL(request.url).pathname;

    const text = await this.processText(file) as string;

    response.text(text, 200, { 'Content-Type': type });

    const maxAge = ApgEdrService.ClientTxtMaxAgeSeconds;
    response.headers.append("Cache-Control", `private, max-age=${maxAge}, immutable`);
    response.headers.append("Content-Type", `utf-8`);

  }

}