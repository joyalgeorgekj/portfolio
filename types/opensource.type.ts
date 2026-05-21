export interface OpenSource {
    id: string;
    project: string;
    description: string;
    type:
        | "Bug Fix"
        | "UI Improvement"
        | "Documentation"
        | "Feature"
        | "Refactor";
    stack?: string[];
    url: string;
}
