import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: `${siteConfig.title} - Recipes`,
  description: siteConfig.description,
};

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
