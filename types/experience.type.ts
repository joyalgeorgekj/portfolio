export interface Experience {
  id: string;
  company: string;
  role: string;
  employmentType:
    | "Freelance"
    | "Contract"
    | "Full-time"
    | "Part-time"
    | "Internship";
  startDate: string;
  endDate?: string;
  location?: string;
  description: string;
  achievements?: string[];
  stack?: string[];
  url?: string;
  featured?: boolean;
}