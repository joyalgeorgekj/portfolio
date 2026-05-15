import { OpenSource } from "@/types/opensource";

export const OPENSOURCE: OpenSource[] = [
  {
    id: "appwrite-theme",
    project: "Appwrite",
    description:
      "Resolved UI rendering inconsistencies and theme behavior issues.",
    type: "UI Improvement",
    stack: [
      "Svelte",
      "Frontend",
      "UI",
    ],
    url:
      "https://github.com/appwrite/appwrite",
  },
  {
    id: "docker-docs",
    project: "Docker Docs",
    description:
      "Improved documentation clarity and developer experience.",
    type: "Documentation",
    stack: [
      "Documentation",
      "DX",
    ],
    url:
      "https://github.com/docker/docs",
  },
];