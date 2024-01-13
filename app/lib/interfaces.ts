interface NavItem {
  title: string;
  link: string;
}

interface BioItem {
  id: number;
  year: string;
  description: string;
}

interface HomeConfig {
  work: string;
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
