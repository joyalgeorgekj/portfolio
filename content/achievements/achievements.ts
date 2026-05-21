import { Achievement } from "@/types/achievements.type";

export const ACHIEVEMENTS: Achievement[] = [
    {
        id: "hacktoberfest-2025",
        title: "Hacktoberfest Super Contributor",
        description:
            "Ranked among the top 10,000 contributors globally with 9 badges earned.",
        organization: "Hacktoberfest",
        type: "Open Source",
    },

    {
        id: "npm-users",
        title: "1000+ Weekly npm Users",
        organization: "Product Goal",
        description:
            "Published reusable frontend tooling actively used by developers.",
        type: "Product",
    },
    {
        id: "tecza-web-design",
        title: "Winner - Web Designing Competition",
        organization: "Tecza Inter-University Fest - The Cochin College",
        type: "Competition",
        description:
            "Won 1st prize in the design to code competition got 3K prize money and certificate.",
    },
];
