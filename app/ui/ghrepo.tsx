"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Tooltip } from "@nextui-org/react";
import { siteConfig } from "@/app/config/site";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { getGHData } from "../actions";
import { useEffect, useState } from "react";

export default function GHRepo() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const updateStars = async () => {
      const updatedStars = await getGHData();
      console.log(updatedStars);
      setStars(updatedStars["stargazers_count"]);
    };

    updateStars();
  }, []);

  return (
    <Link href={siteConfig.github} target="_blank" color="foreground">
      <Tooltip content="View Source">
        <FontAwesomeIcon icon={faGithub} />
      </Tooltip>
      {stars > 0 && (
        <p className="flex justify-center items-center text-xs ml-2">
          {`${stars}`}
          <FontAwesomeIcon
            className="text-yellow-300 ml-1"
            icon={faStar}
          ></FontAwesomeIcon>
        </p>
      )}
    </Link>
  );
}
