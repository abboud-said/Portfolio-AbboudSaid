export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface Skill {
    name: string;
    proficiency: string; // e.g., "beginner", "intermediate", "advanced"
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}