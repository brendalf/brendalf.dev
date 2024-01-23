import type { Metadata } from "next";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/app/config/site";
import { SectionTitle } from "@/app/ui/section_title";
import { Spacer } from "@nextui-org/react";

export const metadata: Metadata = {
  title: `${siteConfig.title} - Posts`,
  description: siteConfig.description,
};

export default function Posts() {
  return (
    <div>
      <SectionTitle title="Posts" icon={faBook} />
      <Spacer y={10} />
      <div className="font-bold text-2xl text-center">No posts, yet :)</div>
    </div>
  );
}
