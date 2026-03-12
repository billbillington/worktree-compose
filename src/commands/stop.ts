import path from "node:path";
import { buildContext, getCurrentWorktree } from "../context.js";
import { composeProjectName } from "../utils/sanitize.js";
import { execLive } from "../utils/exec.js";
import * as log from "../utils/log.js";

export function stopCommand(): void {
  const ctx = buildContext();
  const wt = getCurrentWorktree(ctx);
  const project = composeProjectName(ctx.repoName, path.basename(wt.path));

  log.info(`Stopping ${project}...`);

  try {
    execLive(`docker compose -p "${project}" down`, { cwd: wt.path });
    log.success(`Stopped ${wt.branch}`);
  } catch {
    log.warn(`Could not stop ${project} (may already be stopped)`);
  }
}
