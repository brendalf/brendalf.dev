import { siteConfig } from "@/app/config/site";
import posts from "@/app/data/posts";
import { Image, Spacer } from "@nextui-org/react";
import { Metadata } from "next";
import { remark } from "remark";
import html from "remark-html";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await load_post(params.slug);

  if (!post) {
    return {
      title: `${siteConfig.title} - Posts`,
    };
  }

  return {
    title: `${post.title} - ${siteConfig.title} Posts`,
  };
}

export default async function ViewPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await load_post(params.slug);

  if (!post) {
    return <div className="mt-20 flex justify-center">Post not found</div>;
  }

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
      <div dangerouslySetInnerHTML={{ __html: post.contents }} />
    </div>
  );
}

async function load_post(slug: string) {
  const post = posts[slug];

  const processedContent = await remark().use(html).process(post.contents);
  const contentHtml = processedContent.toString();

  return {
    title: slug,
    thumbnail: post.thumbnail,
    contents: contentHtml,
  };
}
