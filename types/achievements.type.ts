export interface Achievement {
    id: string;
    title: string;
    description: string;
    organization?: string;
    type: "Award" | "Open Source" | "Competition" | "Recognition" | "Product";
}
