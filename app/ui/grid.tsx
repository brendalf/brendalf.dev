import { ReactNode } from "react";
import { Image, Link } from "@nextui-org/react";

interface GridProps {
  children?: ReactNode;
  href: string;
  title: string;
  thumbnail: string;
  isZoomed: boolean;
}

export const Grid = ({
  href,
  title,
  thumbnail,
  isZoomed = true,
  children,
}: GridProps) => (
  <div className="text-center pb-4 w-full sm:w-1/2">
    <Link className="flex flex-col m-2" href={href} color="foreground">
      <Image
        className="object-cover h-[300px] sm:h-[200px] w-screen"
        isZoomed={isZoomed}
        alt={title}
        loading="lazy"
        src={thumbnail}
      />
      <div className="mt-4 text-lg font-light">{title}</div>
      <div className="mt-2">{children}</div>
    </Link>
  </div>
);
