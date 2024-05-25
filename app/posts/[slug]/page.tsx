import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import Head from "next/head";
import posts from "@/app/data/posts";
import remarkGfm from "remark-gfm";
import { Image, Spacer } from "@nextui-org/react";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug as string;

  const post = load_post(slug);

  if (!post) {
    return <div>Not found</div>;
  }

  const markdownDirectory = path.join(process.cwd(), "public", "posts");
  const filePath = path.join(markdownDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
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
    </>
  );
}

const load_post = (slug: string): Post | null => {
  const post = posts.find((post) => post.id == slug);
  return post || null;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id,
  }));
}
