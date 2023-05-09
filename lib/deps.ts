/** -----------------------------------------------------------------------
 * @module [apg-edr]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * -----------------------------------------------------------------------
*/
// https://deno.land/std
export * as StdFs from "https://deno.land/std@0.180.0/fs/mod.ts";
export * as StdPath from "https://deno.land/std@0.180.0/path/mod.ts";

// https://deno.land/x/drash
export * as  Drash from "https://deno.land/x/drash@v2.7.1/mod.ts";

// https://deno.land/x/drash_middleware
export { CORSService as DrashCorsService } from "https://deno.land/x/drash@v2.7.1/src/services/cors/cors.ts";

// Apg github repos
export * as Uts from "https://raw.githubusercontent.com/Pangeli70/apg-uts/master/mod.ts";
export * as Lgr from "https://raw.githubusercontent.com/Pangeli70/apg-lgr/master/mod.ts";
export * as Rst from "https://raw.githubusercontent.com/Pangeli70/apg-rst/master/mod.ts";

// Apg Local Monorepo
// export * as Uts from "../apg-uts/mod.ts";
// export * as Lgr from "../apg-lgr/mod.ts";
// export * as Rst from "../apg-rst/mod.ts";