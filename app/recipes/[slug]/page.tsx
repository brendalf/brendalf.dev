import recipes from "@/app/recipes/data";
import { faBlender, faPlateWheat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Image, Spacer } from "@nextui-org/react";

export default async function ViewRecipe({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = await load_recipe(params.slug);

  if (!recipe) {
    return <div>Recipe not found</div>;
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
      <div className="w-full sm:w-3/6 container mx-auto">
        <div className="text-lg text-secondary">
          <FontAwesomeIcon icon={faPlateWheat} />
          <span className="ml-4">Ingredients</span>
        </div>
        <Divider className="my-2" />
        <div className="font-light sm:font-thin">
          {recipe.ingredients.map((value, idx) => (
            <div key={idx}>{value}</div>
          ))}
        </div>
        <Spacer y={8} />
        <div className="text-lg text-secondary">
          <FontAwesomeIcon icon={faBlender} />
          <span className="ml-4">How to make it</span>
        </div>
        <Divider className="my-2" />
        {recipe.process.map((value, idx) => (
          <>
            <div key={idx} className="font-light sm:font-thin text-justify">
              {value}
            </div>
            <Spacer y={4} />
          </>
        ))}
      </div>
    </div>
  );
}

async function load_recipe(slug: string) {
  return recipes[slug];
}
