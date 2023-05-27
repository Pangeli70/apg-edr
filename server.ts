/** -----------------------------------------------------------------------
 * @module [apg-edr] 
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.1 [APG 2022/09/18] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Edr, Dir, Lgr } from "./srv/deps.ts";
import { ApgEdrResources, ApgEdrServices } from "./srv/mod.ts";

Edr.ApgEdrService.Init({
  assetsFolder:"./srv"
});

Lgr.ApgLgr.AddConsoleTransport();

const serverInfo = Dir.ApgDirServer.GetInfo(Dir.eApgDirEntriesIds.edr);

const server = new Edr.Drash.Server({
  hostname: '0.0.0.0',
  port: serverInfo.localPort,
  resources: ApgEdrResources,
  services: ApgEdrServices,
  protocol: "http"
});

server.run();

Dir.ApgDirServer.StartupResume(serverInfo);


