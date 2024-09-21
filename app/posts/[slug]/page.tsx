import fs from "fs";
import path from "path";
import posts from "@/app/data/posts";
import { Spacer } from "@nextui-org/react";
import { Post } from "@/app/lib/interfaces";
import { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import { BlockType, Heading, Paragraph, parseMarkdown } from "purrdown";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug as string;

  const post = load_post(slug);

  if (!post) {
    return <div className="mt-20 flex justify-center">post not found</div>;
  }

  const markdownDirectory = path.join(process.cwd(), "public", "posts");
  const filePath = path.join(markdownDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const blocks = parseMarkdown(fileContents);

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl text-center font-thin">{post.title}</h2>
      <Spacer y={4} />
      <div>
        {blocks.map((block, idx) => {
          if (block.type == BlockType.Empty) {
            return <Spacer key={idx} y={4} />;
          }

          if (block.type == BlockType.Heading) {
            let heading = block as Heading;

            let size = "text-base";

            switch (heading.size) {
              case 1:
                size = "text-xl";
                break;
              case 2:
                size = "text-lg";
                break;
            }

            return (
              <div key={idx} className={`${size} font-bold`}>
                {heading.title}
              </div>
            );
          }

          if (block.type == BlockType.Note) {
            let paragraph = block as Paragraph;
            return (
              <div
                key={idx}
                className="leading-7 text-base font-light pl-2 border-l-white border-l-5"
              >
                {paragraph.content}
              </div>
            );
          }

          let paragraph = block as Paragraph;
          return (
            <div key={idx} className="leading-7 text-base font-light">
              {paragraph.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const load_post = (slug: string): Post | null => {
  const post = posts.find((post) => post.id == slug);
  return post || null;
};

export async function generateStaticParams() {
  return posts
    .filter((post) => !post.isExternal)
    .map((post) => ({
      slug: post.id,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = load_post(params.slug);

  if (!post) {
    return {};
  }

  const title = `${post.title} - ${siteConfig.title}'s Posts`;

  return {
    title: title,
    description: post.description,
    openGraph: {
      title: title,
      description: post.description,
    },
  };
}
