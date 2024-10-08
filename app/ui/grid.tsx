import { ReactNode } from "react";
import { Image, Link } from "@nextui-org/react";

interface GridProps {
  children?: ReactNode;
  href: string;
  title: string;
  thumbnail: string;
  isZoomed: boolean;
  isExternal: boolean;
}

export const Grid = (params: GridProps) => (
  <div className="text-center pb-4 w-full sm:w-1/2">
    <Link
      className="flex flex-col m-2"
      href={params.href}
      color="foreground"
      target={params.isExternal ? "_blank" : "_self"}
    >
      <Image
        className="object-cover h-[300px] sm:h-[200px] w-screen"
        isZoomed={params.isZoomed}
        alt={params.title}
        loading="lazy"
        src={params.thumbnail}
      />
      <div className="mt-4 text-lg font-light">{params.title}</div>
      <div className="mt-2">{params.children}</div>
    </Link>
  </div>
);
