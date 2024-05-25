import type { Metadata } from "next";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@/app/ui/grid";
import { siteConfig } from "@/app/config/site";
import { SectionTitle } from "@/app/ui/section_title";
import { Spacer } from "@nextui-org/react";
import posts from "@/app/data/posts";

export const metadata: Metadata = {
  title: `${siteConfig.title} - Posts`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div>
      <SectionTitle title="Posts" icon={faBook} />
      <Spacer y={4} />
      <div className="flex justify-between flex-wrap">
        {posts.map((post) => {
          return (
            <Grid
              key={`post-${post.id}`}
              title={post.title}
              href={`/posts/${post.id}`}
              thumbnail={post.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
