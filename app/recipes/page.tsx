import type { Metadata } from "next";
import { Grid } from "@/app/ui/grid";
import { siteConfig } from "@/app/config/site";
import recipes from "@/app/data/recipes";
import { SectionTitle } from "@/app/ui/section_title";

export const metadata: Metadata = {
  title: `${siteConfig.title}'s  Recipes`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionTitle title="Recipes" />
      <div className="flex justify-between flex-wrap">
        {recipes.map((recipe) => {
          return (
            <Grid
              key={`rec-${recipe.id}`}
              title={recipe.title}
              href={`/recipes/${recipe.id}`}
              isZoomed
              thumbnail={recipe.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
