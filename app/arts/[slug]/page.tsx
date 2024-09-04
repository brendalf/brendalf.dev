import { siteConfig } from "@/app/config/site";
import arts from "@/app/data/arts";
import { Art } from "@/app/lib/interfaces";
import { SectionTitle } from "@/app/ui/sectionTitle";
import { Image, Spacer } from "@nextui-org/react";
import { Metadata } from "next";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug as string;

  const art = load_art(slug);

  if (!art) {
    return <div className="mt-20 flex justify-center">art not found</div>;
  }

  return (
    <div className="mx-auto max-w-3xl">
      <SectionTitle
        title={art.title}
        path={["Home", "Arts"]}
        subtitle={art.description}
      />
      <div className="flex">
        {art.images.map((img, idx) => (
          <div key={`${params.slug}-${idx}`}>
            <Image
              className="object-cover h-[350px]"
              alt={img.title}
              loading="lazy"
              src={img.src}
            />
            <p className="text-center mt-2">{img.title}</p>
          </div>
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
