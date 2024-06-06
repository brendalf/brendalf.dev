import { siteConfig } from "@/app/config/site";
import arts from "@/app/data/arts";
import { Art } from "@/app/lib/interfaces";
import { Image, Spacer } from "@nextui-org/react";
import { Metadata } from "next";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug as string;

  const art = load_art(slug);

  if (!art) {
    return <div className="mt-20 flex justify-center">art not found</div>;
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl text-center font-light">{art.title}</h2>
      <Spacer y={2} />
      <p className="mx-auto font-light lg:font-thin text-gray-400">
        {art.description}
      </p>
      <Spacer y={4} />
      <div className="mx-auto max-w-7xl">
        {art.images.map((img, idx) => (
          <>
            <Image
              key={`${params.slug}-${idx}`}
              className="object-cover h-[350px]"
              alt={img.title}
              loading="lazy"
              src={img.src}
            />
            <p className="text-center mt-2">{img.title}</p>
          </>
        ))}
      </div>
      <Spacer y={4} />
    </div>
  );
}

const load_art = (slug: string): Art | null => {
  const art = arts.find((art) => art.id == slug);
  return art || null;
};

export async function generateStaticParams() {
  return arts.map((art) => ({
    slug: art.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const art = load_art(params.slug);

  if (!art) {
    return {};
  }

  const title = `${art.title} - ${siteConfig.title}'s Arts`;

  return {
    title: title,
    description: art.description,
    openGraph: {
      title: title,
      description: art.description,
    },
  };
}
