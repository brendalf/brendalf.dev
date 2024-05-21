import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Tooltip } from "@nextui-org/react";
import { siteConfig } from "@/app/config/site";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function GHRepo() {
  const stars = 0;

  return (
    <Link href={siteConfig.github} target="_blank" color="foreground">
      <Tooltip content="View Source">
        <FontAwesomeIcon icon={faGithub} />
        <p>
          {`${stars}`}
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </p>
      </Tooltip>
    </Link>
  );
}
