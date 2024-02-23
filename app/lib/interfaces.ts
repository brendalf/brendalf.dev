interface NavItem {
  title: string;
  link: string;
}

interface BioItem {
  year: string;
  description: string;
}

interface HomeConfig {
  love: string;
  bio: BioItem[];
}

interface SiteConfig {
  title: string;
  description: string;
  github: string;
  navItems: NavItem[];
  home: HomeConfig;
}

interface Recipe {
  title: string;
  thumbnail: string;
  ingredients: string[];
  process: string[];
}

interface Post {
  title: string;
  thumbnail: string;
  contents: string;
}
