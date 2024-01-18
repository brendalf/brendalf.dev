import type { Metadata } from "next";
import { Grid } from "@/app/ui/grid";
import { siteConfig } from "@/app/config/site";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import recipes from "./data";
import { SectionTitle } from "../ui/section_title";
import { Spacer } from "@nextui-org/react";

export const metadata: Metadata = {
  title: `${siteConfig.title} - Recipes`,
  description: siteConfig.description,
};

export default function Recipes() {
  return (
    <div>
      <SectionTitle title="Recipes" icon={faUtensils} />
      <Spacer y={4} />
      <div className="flex justify-between flex-wrap">
        {Object.keys(recipes).map((id, idx) => {
          const recipe = recipes[id];
          return (
            <Grid
              key={`rec-${idx}`}
              title={recipe.title}
              href={`/recipes/${id}`}
              thumbnail={recipe.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
