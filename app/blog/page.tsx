import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import { SectionTitle } from "@/app/ui/section_title";
import { Chip, Link } from "@nextui-org/react";
import posts from "@/app/data/posts";

export const metadata: Metadata = {
  title: `${siteConfig.title}'s Blog`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionTitle title="Blog" />
      <div className="flex flex-col">
        {posts.map((post) => {
          return (
            <Link
              isBlock
              key={`post-${post.id}`}
              href={post.externalUrl || `/blog/${post.id}`}
              color="foreground"
              className="py-4 px-8 justify-between"
              isExternal={post.isExternal}
              showAnchorIcon={post.isExternal}
            >
              <div>
                <p className="mb-2 text-sm text-gray-500">{post.date}</p>
                {post.title}
                <p className="mt-2 text-sm text-gray-500">{post.description}</p>
                <div className="mt-2">
                  {post.labels.map((item, idx) => (
                    <Chip
                      color="primary"
                      className="text-xs mr-1"
                      variant="flat"
                      key={`${post.id}-${idx}`}
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
