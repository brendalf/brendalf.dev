import { PostLabel } from "@/app/lib/enums";

interface NavItem {
  title: string;
  link: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  github: string;
  navItems: NavItem[];
}

export interface Recipe {
  id: string;
  title: string;
  thumbnail: string;
  ingredients: string[];
  process: string[];
}

export interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  labels: PostLabel[];
  isExternal: boolean;
  link?: string;
}

interface ArtImage {
  title: string;
  src: string;
}

export interface Art {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: ArtImage[];
}
