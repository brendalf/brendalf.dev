import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function DarkModeButton() {
  const [isShaking, setIsShaking] = useState(false);

  const shake = {
    x: [0, -10, 10, -10, 10, -5, 5, -5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  const handleClick = () => {
    setIsShaking(true);

    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={isShaking ? shake : {}}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <FontAwesomeIcon icon={faSun} />
    </motion.div>
  );
}
