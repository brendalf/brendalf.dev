import recipes from "@/app/recipes/data";
import { Image, Spacer } from "@nextui-org/react";

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
    <div className="flex flex-col items-center justify-center">
      <Image
        className="object-cover h-[350px] w-screen"
        alt={recipe.title}
        loading="lazy"
        src={recipe.thumbnail}
      />
      <Spacer y={4} />
      <h2 className="px-4 mb-2 text-xl text-center font-light">
        {recipe.title}
      </h2>
      <div>
        <span>{recipe.content}</span>
      </div>
    </div>
  );
}

async function load_recipe(slug: string) {
  return recipes[slug];
}
