/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Edr} from "../deps.ts";

export class ApgEdrHomeResource extends Edr.Drash.Resource {

    public override  paths = ["/"];

    public GET(_request: Edr.Drash.Request, response: Edr.Drash.Response) {

        this.redirect("assets/html/test.html", response);

    }


}
