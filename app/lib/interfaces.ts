interface NavItem {
  title: string;
  link: string;
}

interface SiteConfig {
  title: string;
  description: string;
  github: string;
  navItems: NavItem[];
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

interface Art {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
}
