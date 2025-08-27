export interface Enclosure {
  url?: string;
  length?: number;
  type?: string;
}

export interface MediumBlogPost {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: Enclosure;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

export interface MediumFeed {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
}

export interface MediumResponse {
  status: string;
  feed: MediumFeed;
  items: MediumBlogPost[];
}
