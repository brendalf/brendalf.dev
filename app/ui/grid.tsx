import { ReactNode } from "react";
import { Image, Link } from "@nextui-org/react";

interface GridProps {
  children?: ReactNode;
  href: string;
  title: string;
  thumbnail: string;
}

export const Grid = (props: GridProps) => (
  <div className="text-center m-2">
    <Link className="flex flex-col" href={props.href} color="foreground">
      <Image
        className="object-cover w-[275px] h-[155px]"
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
