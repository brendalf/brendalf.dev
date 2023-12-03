"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { Button, SwitchProps, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${
      theme === "light" || isSSR ? "dark" : "light"
    } mode`,
    onChange,
  });

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Component
          {...getBaseProps({
            className: clsx(
              "px-px transition-opacity hover:opacity-80 cursor-pointer",
              className,
              classNames?.base,
            ),
          })}
        >
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: clsx(
                [
                  "w-auto h-auto",
                  "bg-transparent",
                  "rounded-lg",
                  "flex items-center justify-center",
                  "group-data-[selected=true]:bg-transparent",
                  "!text-default-500",
                  "pt-px",
                  "px-0",
                  "mx-0",
                ],
                classNames?.wrapper,
              ),
            })}
          >
            {!isSelected || isSSR ? (
              <Button
                color="warning"
                variant="flat"
                isIconOnly
                onPress={onChange}
              >
                <FontAwesomeIcon icon={faSun} />
              </Button>
            ) : (
              <Button
                className="bg-purple-500 text-purple-800"
                variant="solid"
                isIconOnly
                onPress={onChange}
              >
                <FontAwesomeIcon icon={faMoon} />
              </Button>
            )}
          </div>
        </Component>
      </motion.div>
    </AnimatePresence>
  );
};
