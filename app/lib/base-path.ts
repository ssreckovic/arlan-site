const repoName = "arlan-site";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

export const basePath = isGithubActions ? `/${repoName}` : "";
