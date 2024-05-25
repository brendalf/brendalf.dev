import { ReactNode } from "react";
import { Image, Link } from "@nextui-org/react";

interface GridProps {
  children?: ReactNode;
  href: string;
  title: string;
  thumbnail: string;
}

export const Grid = (props: GridProps) => (
  <div className="text-center pb-4 w-full sm:w-1/2">
    <Link className="flex flex-col m-2" href={props.href} color="foreground">
      <Image
        className="object-cover h-[300px] sm:h-[200px] w-screen"
        isZoomed
        alt={props.title}
        loading="lazy"
        src={props.thumbnail}
      />
      <div className="mt-4 text-lg font-light">{props.title}</div>
      <div className="mt-2">{props.children}</div>
    </Link>
  </div>
);
