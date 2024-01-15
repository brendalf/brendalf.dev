import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SectionTitleProps {
  title: string;
  icon?: IconDefinition;
}

export const SectionTitle = (props: SectionTitleProps) => (
  <h2 className="px-4 mb-2 text-xl text-center font-light">
    {props.icon ? <FontAwesomeIcon icon={props.icon} className="mr-2" /> : null}
    {props.title}
  </h2>
);
