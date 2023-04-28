/** -----------------------------------------------------------------------
 * @module [Edr] Enhanced Drash Resources
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.1 [APG 2022/09/18] Deno Deploy Beta
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
 */
import { Drash, Dir, Uts, Lgr } from "./srv/deps.ts";
import { resources } from "./srv/res.ts";
import { services } from "./srv/svc.ts";
import { ApgEdrService } from "./lib/mod.ts";

ApgEdrService.Init({
  assetsFolder:"./srv"
});


Lgr.ApgLgr.AddConsoleTransport();

const SERVER_INFO = Dir.ApgDirGetServerInfo(Dir.ApgDirEntries[Dir.eApgDirEntriesIds.edr]);


const server = new Drash.Server({
  hostname: '0.0.0.0',
  port: SERVER_INFO.localPort,
  resources: resources,
  services: services,
  protocol: "http"
});

server.run();

Uts.ApgUtsServer.StartupResume(SERVER_INFO);


