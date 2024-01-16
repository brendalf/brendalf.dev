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
  Tooltip,
} from "@nextui-org/react";
import { useState } from "react";
import { siteConfig } from "@/app/config/site";
import Logo from "@/app/ui/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      {/* Default menu */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteConfig.navItems.map((item, idx) => (
          <NavbarItem key={`nav1-${idx}`}>
            <Link
              href={item.link}
              color="foreground"
              underline={`${pathname === item.link ? "always" : "hover"}`}
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
          <Link href={siteConfig.github} target="_blank" color="foreground">
            <Tooltip content="View Source">
              <FontAwesomeIcon icon={faGithub} />
            </Tooltip>
          </Link>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        ></NavbarMenuToggle>
      </NavbarContent>

      {/* Toggle menu options */}
      <NavbarMenu>
        {siteConfig.navItems.map((item, idx) => (
          <NavbarMenuItem key={`nav2-${idx}`}>
            <Link
              className="w-full"
              href={item.link}
              color={`${pathname === item.link ? "secondary" : "foreground"}`}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
