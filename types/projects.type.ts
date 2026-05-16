export interface Project {
  title: string;
  desc: string;
  stack: string[];
  metric: string;
  url: string;
  featured?: boolean;
  pinned?: boolean;
}