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
