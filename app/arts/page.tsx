import type { Metadata } from "next";
import { Grid } from "@/app/ui/grid";
import { siteConfig } from "@/app/config/site";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import arts from "@/app/data/arts";
import { SectionTitle } from "@/app/ui/section_title";
import { Spacer } from "@nextui-org/react";

export const metadata: Metadata = {
  title: `${siteConfig.title} - Arts`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div>
      <SectionTitle title="Arts" icon={faPencilRuler} />
      <Spacer y={4} />
      <div className="flex justify-between flex-wrap">
        {Object.keys(arts).map((id, idx) => {
          const art = arts[id];
          return (
            <Grid
              key={`rec-${idx}`}
              title={art.title}
              href={`/arts/${id}`}
              thumbnail={art.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
