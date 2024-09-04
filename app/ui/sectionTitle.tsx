import { Spacer } from "@nextui-org/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  path: string[];
}

export const SectionTitle = (props: SectionTitleProps) => (
  <div>
    <Spacer y={6} />

    <p className="font-light text-gray-500 text-sm">
      {props.path.join(" » ")} {" » "}
    </p>
    <p className="font-bold text-2xl mt-2">{props.title}</p>
    {props.subtitle && (
      <p className="font-light text-gray-400 mt-1">{props.subtitle}</p>
    )}

    <Spacer y={6} />
  </div>
);
