import { execSync } from "child_process";

export function getLatestCommitHash(): string {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch (error) {
    console.error("Error getting latest commit hash:", error);
    return "unknown";
  }
}
