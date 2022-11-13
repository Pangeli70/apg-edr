/** -----------------------------------------------------------------------
 * @module [Edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.8.0 [APG 2022/04/09] Implemented mime types
 * @version 0.9.1 [APG 2022/09/10] Github Beta
 * @version 0.9.2 [APG 2022/10/07] Loggable resource
 * -----------------------------------------------------------------------
 */
import { Drash } from "../../deps.ts";
import { ApgEdrStaticResource } from "./ApgEdrStaticResource.ts";

/** Deliver static text files stored in public folder */
export class ApgEdrPublicTextFileResource extends ApgEdrStaticResource {

  public override paths = [
    "/public/html/.*\.(html)",
    "/public/css/.*\.(css)",
    "/public/js/.*\.(js)",
    "/public/txt/.*\.(txt)",
    "/public/csv/.*\.(csv)",
    "/public/img/svg/.*\.(svg)",
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

    const file = Deno.cwd() + new URL(request.url).pathname;

    const text = await this.processText(file) as string;

    // TODO setup a configurable Browser's cache expiration setting like in binFileResource
    // -- APG 20220910

    response.text(text, 200, { 'Content-Type': type });
  }

}