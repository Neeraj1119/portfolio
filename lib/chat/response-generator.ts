import { StructuredContent } from "./types";

// Update the generateStructuredResponse function to handle specific project types
export function generateStructuredResponse(queryType: string): StructuredContent | null {
    // Define individual project templates
    const projectTemplates: Record<string, { title: string; description: string; technologies: string[]; link: string }[]> = {
        emart_project: [
            {
                title: "EMart – Full Stack E-Commerce Platform",
                description:
                    "A dual-backend e-commerce system with JWT authentication and Google OAuth2 sign-on.",
                technologies: ["Java", "Spring Boot", "ASP.NET Core (.NET 8)", "MySQL", "JWT", "ReactJS"],
                link: "https://github.com/Neeraj1119",
            },
        ],
        fft_project: [
            {
                title: "128-Point FFT Processor for MIMO-OFDM",
                description:
                    "High-efficiency FFT processor using Radix-2 and Radix-8 algorithms for real-time signal processing.",
                technologies: ["MATLAB", "Radix-2", "Radix-8", "Signal Processing"],
                link: "https://github.com/Neeraj1119",
            },
        ],
    };

    // Define individual contact templates
    const contactTemplates: Record<string, { email?: string; phone?: string; location?: string; type: string }> = {
        email_contact: {
            email: "patilnr17@gmail.com",
            type: "Email",
        },
        phone_contact: {
            phone: "+918788718867",
            type: "Phone",
        },
        location_contact: {
            location: "Mumbai",
            type: "Location",
        },
    };

    // Define individual link templates
    const linkTemplates: Record<string, { title: string; url: string; description: string }[]> = {
        resume_link: [
            {
                title: "Resume",
                url: "/resume",
                description:
                    "View my detailed resume with skills, experience, and education",
            },
        ],
        github_link: [
            {
                title: "GitHub Profile",
                url: "https://github.com/Neeraj1119",
                description:
                    "Check out my code repositories and open-source contributions",
            },
        ],
        linkedin_link: [
            {
                title: "LinkedIn Profile",
                url: "https://www.linkedin.com/in/neeraj-patil-a692b226b/",
                description: "Connect with me professionally on LinkedIn",
            },
        ],
        portfolio_link: [
            {
                title: "Portfolio Website",
                url: "https://neerajpatil.com",
                description: "My personal portfolio showcasing projects and skills",
            },
        ],
        project_links: [
            {
                title: "EMart E-Commerce Platform",
                url: "https://github.com/Neeraj1119",
                description: "Full-stack e-commerce system with dual backends",
            },
        ],
    };

    // Define the structured data templates for general categories
    const structuredDataTemplates: Record<string, unknown> = {
        skills: [
            { name: "Java", category: "Programming Language" },
            { name: "C", category: "Programming Language" },
            { name: "JavaScript", category: "Programming Language" },
            { name: "Spring Boot", category: "Backend Framework" },
            { name: "ASP.NET Core (.NET 8)", category: "Backend Framework" },
            { name: "ReactJS", category: "Frontend Framework" },
            { name: "REST API", category: "Architecture" },
            { name: "Microservices", category: "Architecture" },
            { name: "JWT", category: "Authentication" },
            { name: "OAuth2 (Google)", category: "Authentication" },
            { name: "MySQL", category: "Database" },
            { name: "Git", category: "Version Control" },
            { name: "GitHub", category: "Platform" },
            { name: "Postman", category: "Tool" },
        ],
        projects: [
            {
                title: "EMart – Full Stack E-Commerce Platform",
                description:
                    "Dual-backend e-commerce system (Spring Boot + .NET 8) with JWT authentication, Google OAuth2, dynamic pricing, and automated PDF invoice generation.",
                technologies: ["Java", "Spring Boot", "ASP.NET Core (.NET 8)", "MySQL", "JWT", "ReactJS"],
                link: "https://github.com/Neeraj1119",
            },
            {
                title: "128-Point FFT Processor for MIMO-OFDM",
                description:
                    "High-efficiency FFT processor using Radix-2 and Radix-8 algorithms in MATLAB for real-time signal processing in MIMO-OFDM systems.",
                technologies: ["MATLAB", "Radix-2", "Radix-8", "Signal Processing"],
                link: "https://github.com/Neeraj1119",
            },
        ],
        experience: [],
        education: [
            {
                title: "PG Diploma in Advanced Computing (PG-DAC)",
                institution: "C-DAC Sm-Vita, Mumbai",
                period: "Aug 2025 - Feb 2026",
                description: "Postgraduate Diploma in Advanced Computing",
            },
            {
                title: "BE in Electronics & Telecommunication Engineering",
                institution: "Fr. Conceicao Rodrigues Institute of Technology, Mumbai",
                period: "Jun 2021 - May 2025",
                description: "Bachelor of Engineering degree",
            },
        ],
        contact: {
            email: "patilnr17@gmail.com",
            phone: "+918788718867",
            location: "Mumbai",
            linkedin: "https://www.linkedin.com/in/neeraj-patil-a692b226b/",
            github: "https://github.com/Neeraj1119",
        },
        awards: [],
        links: [
            {
                title: "Portfolio Website",
                url: "https://neerajpatil.com",
                description: "My personal portfolio showcasing projects and skills",
            },
            {
                title: "Resume",
                url: "/resume",
                description: "View my detailed resume",
            },
            {
                title: "GitHub Profile",
                url: "https://github.com/Neeraj1119",
                description: "Check out my code repositories and contributions",
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/neeraj-patil-a692b226b/",
                description: "Connect with me professionally",
            },
        ],
    };

    // Check if it's a specific project type
    if (queryType.includes("_project")) {
        return {
            type: "projects",
            data: projectTemplates[queryType],
        };
    }

    // Check if it's a specific contact type
    if (queryType.includes("_contact")) {
        return {
            type: "contact",
            data: contactTemplates[queryType],
        };
    }

    // Check if it's a specific link type
    if (queryType.includes("_link")) {
        return {
            type: "links",
            data: linkTemplates[queryType],
        };
    }

    // Otherwise return the general category data
    if (structuredDataTemplates[queryType]) {
        return {
            type: queryType,
            data: structuredDataTemplates[queryType],
        };
    }

    return null;
}
