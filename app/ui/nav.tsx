"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { siteConfig } from "../config/site";
import { ThemeSwitch } from "./theme_switch";
import Logo from "./logo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      {/* Default menu */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.title}>
            <Link
              href={item.link}
              color="foreground"
              underline="hover"
              className="font-light"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Toggle menu and theme switcher */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        ></NavbarMenuToggle>
      </NavbarContent>

      {/* Toggle menu options */}
      <NavbarMenu>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link className="w-full" href={item.link}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
