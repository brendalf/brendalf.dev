import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import { SectionTitle } from "@/app/ui/sectionTitle";
import { Chip, Link } from "@nextui-org/react";
import posts from "@/app/data/posts";

export const metadata: Metadata = {
  title: `${siteConfig.title}'s Posts`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionTitle
        title="Posts"
        path={["Home"]}
        subtitle="All the posts that I wrote."
      />
      <div className="flex flex-col">
        {posts.map((post) => {
          return (
            <div key={`post-${post.id}`}>
              <Link
                href={post.externalUrl || `/blog/${post.id}`}
                color="warning"
                isExternal={post.isExternal}
                showAnchorIcon={post.isExternal}
              >
                {post.title}
              </Link>
              <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-sm text-gray-500">{post.description}</p>
              <div className="mt-2">
                {post.labels.map((item, idx) => (
                  <Chip
                    color="default"
                    className="text-xs mr-1"
                    variant="flat"
                    key={`${post.id}-${idx}`}
                  >
                    {item}
                  </Chip>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
