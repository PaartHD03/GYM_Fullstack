import { JSXElementConstructor, ReactElement } from "react";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import readingTime from "reading-time";

import MDXComponents from "@/components/mdx/mdx-components";
import filterObj from "@/helpers/filter-obj";
const PATH_TO_CONTENT = "src/contents";

type Props = {
  category: string;
  fields?: Array<keyof ContentReturn>;
  slug?: string;
};

type ContentReturn = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  readingTime: number;
};

export const getContentList = async ({ category, fields, slug }: Props) => {
  const pathname = path.resolve(PATH_TO_CONTENT, category);

  if (!fs.existsSync(pathname)) return [];

  const files = fs
    .readdirSync(pathname)
    ?.map((file) => file.replace(".mdx", ""));

  if (!fields || fields.length === 0) {
    return files;
  }

  const res = (
    await Promise.all(
      files.map((f): Promise<ContentReturn> => {
        const content = fs.readFileSync(
          path.join(pathname, f + ".mdx"),
          "utf-8"
        );
        const stats = readingTime(content);
        return new Promise((resolve) => {
          compileMDX<ContentReturn>({
            source: content,
            options: {
              parseFrontmatter: true,
            },
            components: MDXComponents,
          }).then(({ frontmatter, content }) => {
            resolve({
              ...frontmatter,
              slug: f,
              readingTime: Number(stats.minutes?.toFixed(1)) ?? 0,
              content,
            });
          });
        });
      })
    )
  )
    .filter((r) => r)
    .filter((r) => !slug || r.slug === slug);

  if (!fields || fields.length === 0) return res;

  return res.map((r) => filterObj(r, (_, key) => fields.includes(key))) || [];
};
