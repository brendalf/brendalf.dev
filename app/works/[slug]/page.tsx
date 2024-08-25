import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import works from "@/app/data/works";
import remarkGfm from "remark-gfm";
import { Image, Spacer } from "@nextui-org/react";
import { Work } from "@/app/lib/interfaces";
import { Metadata } from "next";
import { siteConfig } from "@/app/config/site";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug as string;

  const work = load_work(slug);

  if (!work) {
    return <div className="mt-20 flex justify-center">post not found</div>;
  }

  const markdownDirectory = path.join(process.cwd(), "public", "works");
  const filePath = path.join(markdownDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl text-center font-thin">{work.title}</h2>
      <Spacer y={4} />
      <div className="mx-auto max-w-7xl">
        <Image
          className="object-cover h-[350px] w-screen"
          alt={work.title}
          loading="lazy"
          src={`/${work.thumbnail}`}
        />
      </div>
      <Spacer y={4} />
      <Markdown remarkPlugins={[remarkGfm]}>{fileContents}</Markdown>
    </div>
  );
}

const load_work = (slug: string): Work | null => {
  const work = works.find((work) => work.id == slug);
  return work || null;
};

export async function generateStaticParams() {
  return works
    .filter((work) => work.ghRepo == null)
    .map((work) => ({ slug: work.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const work = load_work(params.slug);

  if (!work) {
    return {};
  }

  const title = `${work.title} - ${siteConfig.title}'s Works`;

  return {
    title: title,
    description: work.description,
    openGraph: {
      title: title,
      description: work.description,
    },
  };
}
