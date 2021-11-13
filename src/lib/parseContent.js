// @ts-check
import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

// Add markdown files in `src/content/blog`
const contentDirectory = join(process.cwd(), "src", "content");

export function parseContent() {
  const fullPath = join(contentDirectory, `index.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { frontmatter: { ...data }, content };
}
