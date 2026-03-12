export function sanitize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-/, "")
    .replace(/-$/, "");
}

export function composeProjectName(repoName: string, wtDir: string): string {
  return sanitize(`${repoName}-wtc-${wtDir}`);
}
