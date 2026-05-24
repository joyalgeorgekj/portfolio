export interface OpenSource {
    id: string;
    project: string;
    description: string;
    type:
        | "Bug Fix"
        | "UI Improvement"
        | "Documentation"
        | "Feature"
        | "Refactor"
        | "UX Improvement"
        | string;
    stack?: string[];
    url: string;
}
