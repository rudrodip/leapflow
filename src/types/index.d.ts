export type SiteConfig = {
  title: string;
  name: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  ogImage: string;
  links: {
    twitter: string;
    linkedin: string;
    discord: string;
  };
}

export type NavItem = {
  title: string;
  href: string;
  disable?: boolean;
}

export type DefaultNavConfig = NavItem[]

export type PersonProfile = {
  name: string;
  designation: string;
  image: string;
  twitter: string;
  linkedin: string;
}

export type BlogCategory = {
  name: string;
  slug: string;
}
