import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import posts from "@/app/data/posts";
import remarkGfm from "remark-gfm";
import { Image, Spacer } from "@nextui-org/react";
import { Post } from "@/app/lib/interfaces";
import { Metadata } from "next";
import { siteConfig } from "@/app/config/site";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug as string;

  const post = load_post(slug);

  console.log(post);

  if (!post) {
    return <div className="mt-20 flex justify-center">art not found</div>;
  }

  const markdownDirectory = path.join(process.cwd(), "public", "posts");
  const filePath = path.join(markdownDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl text-center font-thin">{post.title}</h2>
      <Spacer y={4} />
      <div className="mx-auto max-w-7xl">
        <Image
          className="object-cover h-[350px] w-screen"
          alt={post.title}
          loading="lazy"
          src={post.thumbnail}
        />
      </div>
      <Spacer y={4} />
      <Markdown remarkPlugins={[remarkGfm]}>{fileContents}</Markdown>
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

  const title = `${post.title} - ${siteConfig.title}'s Blog`;

  return {
    title: title,
    description: post.description,
    openGraph: {
      title: title,
      description: post.description,
    },
  };
}
