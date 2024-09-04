import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import { SectionTitle } from "@/app/ui/sectionTitle";
import { Chip } from "@nextui-org/react";
import works from "@/app/data/works";
import { Grid } from "@/app/ui/grid";

export const metadata: Metadata = {
  title: `${siteConfig.title}'s Works`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div>
      <SectionTitle
        title="Works"
        path={["Home"]}
        subtitle="Side projects that I worked on."
      />
      <div className="flex flex-col">
        {works.map((work) => {
          let link = work.ghRepo ? work.ghRepo : `works/${work.id}`;

          return (
            <Grid
              key={`work-${work.id}`}
              title={work.title}
              isZoomed
              href={link}
              thumbnail={work.thumbnail}
              isExternal={work.ghRepo != null}
            >
              <p className="text-sm text-gray-500">{work.description}</p>
              <div className="mt-2">
                {work.labels.map((item, idx) => (
                  <Chip
                    color="default"
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
