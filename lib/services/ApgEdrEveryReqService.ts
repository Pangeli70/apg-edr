/** ----------------------------------------------------------------------
 * @module [Edr/lib]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.7.1 [APG 2019/08/27]
 * @version 0.9.2 [APG 2022/10/07] Github beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash, Uts } from "../deps.ts";
import { IApgEdrEveryRequest } from "../interfaces/IApgEdrEveryRequest.ts";

export class ApgEdrEveryReqService extends Drash.Service {

    public static INJECTED_FIELD_NAME = "ApgEdrEveryRequest";

    private static _counter = 0;

    public override runBeforeResource(
        request: Drash.Request,
        _response: Drash.Response,
    ): void {

        ApgEdrEveryReqService._counter++;
        const dateTimeStamp = new Uts.ApgUtsDateTimeStamp(new Date()).Value;
        console.log(
            `${dateTimeStamp} Received request #${ApgEdrEveryReqService._counter} for resource:\n - ${request.url}`,
        );

        const every: IApgEdrEveryRequest = {
            number: ApgEdrEveryReqService._counter,
            startTime: performance.now(),
            submission: new Date()
        };

        // inject middleware data into the request
        (<any>request)[ApgEdrEveryReqService.INJECTED_FIELD_NAME] = every;
    }


    /**
     * Run this service after the resource's HTTP method.
     */
    public override runAfterResource(
        request: Drash.Request,
        _response: Drash.Response,
    ): void {
        const every: IApgEdrEveryRequest = (<any>request)[ApgEdrEveryReqService.INJECTED_FIELD_NAME];
        const t2: number = performance.now();
        const elapsed = t2 - every.startTime;
        const proctime = elapsed.toFixed(4);
        console.log(` Request [${every.number}] total processing time: ${proctime}ms.`);
    }
}
