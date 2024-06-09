import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import { SectionTitle } from "@/app/ui/section_title";
import { Chip } from "@nextui-org/react";
import works from "@/app/data/works";
import { Grid } from "../ui/grid";

export const metadata: Metadata = {
  title: `${siteConfig.title}'s Works`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div>
      <SectionTitle title="Works" />
      <div className="flex flex-col">
        {works.map((work) => {
          return (
            <Grid
              key={`work-${work.id}`}
              title={work.title}
              href={`works/${work.id}`}
              thumbnail={work.thumbnail}
            >
              <p className="text-sm text-gray-500">{work.description}</p>
              <div className="mt-2">
                {work.labels.map((item, idx) => (
                  <Chip
                    color="primary"
                    className="text-xs mr-1"
                    variant="flat"
                    key={`${work.id}-${idx}`}
                  >
                    {item}
                  </Chip>
                ))}
              </div>
            </Grid>
          );
        })}
      </div>
    </div>
  );
}
