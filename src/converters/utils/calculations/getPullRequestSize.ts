import { calcPRsize } from "./calcPRsize";

export type PullRequestSize = "xs" | "s" | "m" | "l" | "xl";

export const getPullRequestSize = (
  additions: number | undefined,
  deletions: number | undefined
): PullRequestSize => {
  const size = calcPRsize(additions, deletions);
  if (size <= 300) {
    return "xs";
  }
  if (size <= 700) {
    return "s";
  }
  if (size <= 1300) {
    return "m";
  }
  if (size <= 2000) {
    return "l";
  }
  return "xl";
};
