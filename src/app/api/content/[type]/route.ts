import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export const runtime = "nodejs"; // ensure Node.js runtime (fs is not available on Edge)
export const dynamic = "force-dynamic"; // or: export const revalidate = 0;

const contentDirectory = path.join(process.cwd(), "src/content");
const VALID_TYPES = new Set(["services", "industries", "careers"]);

export async function GET(
  _request: Request,
  context: { params: Promise<{ type: string }> }
) {
  const params = await context.params; // await here
  const type = (params?.type ?? "").toLowerCase();

  if (!VALID_TYPES.has(type)) {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const typeDirectory = path.join(contentDirectory, type);

  try {
    const fileNames = await fs.readdir(typeDirectory);

    const allContent = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.md$/, "");
          const fullPath = path.join(typeDirectory, fileName);
          const fileContents = await fs.readFile(fullPath, "utf8");
          const { data, content } = matter(fileContents);

          return {
            slug,
            content,
            ...data, // frontmatter (e.g., title, description, icon, order, features)
          };
        })
    );

    const sorted = allContent.sort(
      (a: any, b: any) => (a.order ?? 999) - (b.order ?? 999)
    );

    return NextResponse.json(sorted, { status: 200 });
  } catch (err: any) {
    // Directory not found: return empty array (same behavior as your existsSync branch)
    if (err?.code === "ENOENT") {
      return NextResponse.json([], { status: 200 });
    }
    console.error("GET /api/content/[type] error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
