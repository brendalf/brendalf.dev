import { ReactNode } from "react";
import { Image, Link } from "@nextui-org/react";

interface GridProps {
  children?: ReactNode;
  href: string;
  title: string;
  thumbnail: string;
}

export const Grid = (props: GridProps) => (
  <div className="text-center pb-4 w-full sm:w-64">
    <Link className="flex flex-col" href={props.href} color="foreground">
      <Image
        className="object-cover"
        isZoomed
        alt={props.title}
        loading="lazy"
        src={props.thumbnail}
      />
      <div className="mt-2">{props.title}</div>
      <div>{props.children}</div>
    </Link>
  </div>
);
