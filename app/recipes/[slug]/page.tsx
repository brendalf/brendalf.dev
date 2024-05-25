import { siteConfig } from "@/app/config/site";
import recipes from "@/app/data/recipes";
import { Recipe } from "@/app/lib/interfaces";
import { faBlender, faPlateWheat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Image, Spacer } from "@nextui-org/react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const recipe = load_recipe(params.slug);

  if (!recipe) {
    return {
      title: `${siteConfig.title} - Recipes`,
    };
  }

  return {
    title: `${recipe.title} - ${siteConfig.title} Recipes`,
  };
}

export default async function ViewRecipe({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = load_recipe(params.slug);

  if (!recipe) {
    return <div className="mt-20 flex justify-center">Recipe not found</div>;
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl text-center font-thin">{recipe.title}</h2>
      <Spacer y={4} />
      <div className="mx-auto max-w-7xl">
        <Image
          className="object-cover h-[350px] w-screen"
          alt={recipe.title}
          loading="lazy"
          src={recipe.thumbnail}
        />
      </div>
      <Spacer y={4} />
      <div>
        <div className="text-lg text-secondary">
          <FontAwesomeIcon icon={faPlateWheat} />
          <span className="ml-4">Ingredients</span>
        </div>
        <Divider className="my-2" />
        <div className="font-light sm:font-thin">
          {recipe.ingredients.map((value, idx) => (
            <div key={`rec-ing-${idx}`}>{value}</div>
          ))}
        </div>
        <Spacer y={8} />
        <div className="text-lg text-secondary">
          <FontAwesomeIcon icon={faBlender} />
          <span className="ml-4">How to make it</span>
        </div>
        <Divider className="my-2" />
        {recipe.process.map((value, idx) => (
          <div key={`rec-mak-${idx}`}>
            <div
              key={`rec-mak-txt-${idx}`}
              className="font-light sm:font-thin text-justify"
            >
              {value}
            </div>
            <Spacer key={`rec-mak-spc-${idx}`} y={4} />
          </div>
        ))}
      </div>
    </div>
  );
}

function load_recipe(slug: string): Recipe {
  return recipes[slug];
}
