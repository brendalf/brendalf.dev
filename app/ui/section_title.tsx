import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Spacer } from "@nextui-org/react";

interface SectionTitleProps {
  title: string;
  icon?: IconDefinition;
}

export const SectionTitle = (props: SectionTitleProps) => (
  <>
    <p className="text-xl font-bold">
      {props.icon ? (
        <FontAwesomeIcon icon={props.icon} className="mr-2" />
      ) : null}
      {props.title}
    </p>
    <Spacer y={2} />
    <Divider />
    <Spacer y={6} />
  </>
);
