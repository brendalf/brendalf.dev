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
  title: string;
  thumbnail: string;
  ingredients: string[];
  process: string[];
}

export interface Post {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  labels: PostLabel[];
}

interface ArtImage {
  title: string;
  src: string;
}

export interface Art {
  title: string;
  description: string;
  thumbnail: string;
  images: ArtImage[];
}
