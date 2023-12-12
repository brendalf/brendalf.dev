import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@/app/ui/grid";
import { siteConfig } from "@/app/config/site";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import recipes from "./data";

export const metadata: Metadata = {
  title: `${siteConfig.title} - Recipes`,
  description: siteConfig.description,
};

export default function Recipes() {
  return (
    <div>
      <h2 className="px-4 mb-2 text-xl text-center font-light">
        <FontAwesomeIcon icon={faUtensils} className="mr-2" />
        Recipes
      </h2>
      <div className="flex flex-wrap justify-center">
        {Object.keys(recipes).map((recipe_id) => {
          const recipe = recipes[recipe_id];
          return (
            <Grid
              key={recipe_id}
              title={recipe.title}
              href={`/recipes/${recipe_id}`}
              thumbnail={recipe.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
