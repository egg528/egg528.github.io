import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "kws",
  EMAIL: "rnjsdntjr26@daum.net",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "kws Home",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "kws - Backend Developer",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const TIL: Metadata = {
  TITLE: "TIL",
  DESCRIPTION: "Today I Learned - Learning notes and insights",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};


export const SOCIALS: Socials = [
  {
    NAME: "Github",
    HREF: "https://github.com/egg528"
  }
];
