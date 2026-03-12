export function sanitize(input) {
    return input
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-/, "")
        .replace(/-$/, "");
}
export function composeProjectName(repoName, wtDir) {
    return sanitize(`${repoName}-wtc-${wtDir}`);
}
