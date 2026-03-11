export function sanitize(input) {
    return input
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-/, "")
        .replace(/-$/, "");
}
export function composeProjectName(repoName, index, wtDir) {
    return sanitize(`${repoName}-wt-${index}-${wtDir}`);
}
