import type { Metadata } from "next";
import { Grid } from "@/app/ui/grid";
import { siteConfig } from "@/app/config/site";
import arts from "@/app/data/arts";
import { SectionTitle } from "@/app/ui/section_title";
import { Spacer } from "@nextui-org/react";

export const metadata: Metadata = {
  title: `${siteConfig.title}'s Arts`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionTitle title="Arts" />
      <Spacer y={4} />
      <div className="flex justify-between flex-wrap">
        {arts.map((art) => {
          return (
            <Grid
              key={`rec-${art.id}`}
              title={art.title}
              href={`/arts/${art.id}`}
              thumbnail={art.thumbnail}
              isZoomed={false}
            >
              <p className="text-sm text-gray-500">{art.description}</p>
            </Grid>
          );
        })}
      </div>
    </div>
  );
}
