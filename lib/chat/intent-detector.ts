// Function to detect if a message likely needs web search - optimized with Set for faster lookups
export function needsWebSearch(message: string): boolean {
    const searchIndicators = new Set([
        "current",
        "latest",
        "recent",
        "news",
        "today",
        "update",
        "weather",
        "price",
        "stock",
        "event",
        "happened",
        "when did",
        "when will",
        "how much is",
        "what is the",
        "who is",
        "where is",
        "2023",
        "2024",
        "2025",
        "search",
    ]);

    const lowerMessage = message.toLowerCase();
    return Array.from(searchIndicators).some((indicator) =>
        lowerMessage.includes(indicator.toLowerCase())
    );
}

// Function to detect query type - optimized with regex patterns stored as constants
const SKILLS_PATTERN =
    /skills|technologies|tech stack|programming|languages|frameworks|tools|libraries|proficient|expertise|capable|abilities/i;
const PROJECTS_PATTERN =
    /projects|portfolio|work|applications|apps|websites|developed|built|created|made|showcase|emart|e-commerce|fft|mimo/i;
const EXPERIENCE_PATTERN =
    /experience|work history|job|career|background|employment|company|position|role/i;
const EDUCATION_PATTERN =
    /education|degree|university|college|school|academic|study|studied|cdac|c-dac|fcrit|engineering|be|electronics|telecommunication|mumbai/i;
const CONTACT_PATTERN =
    /contact|email|phone|reach|get in touch|connect|social media|linkedin|github|message|call/i;
const AWARDS_PATTERN =
    /awards|achievements|recognition|leadership|chairperson|iete|ieee|committee|organized|organised/i;
const LINKS_PATTERN =
    /links|urls|websites|resources|portfolio|resume|github|linkedin|social|profiles|connect|follow|check out|visit/i;

// Add more specific patterns for individual link types
const RESUME_PATTERN = /resume|cv|curriculum vitae/i;
const GITHUB_PATTERN = /github|code|repository|repositories|source code/i;
const LINKEDIN_PATTERN = /linkedin|professional profile|professional network/i;
const PORTFOLIO_PATTERN = /portfolio website|personal website|portfolio site/i;
const PROJECT_LINKS_PATTERN =
    /project links|project urls|project websites/i;

// Add more specific patterns for individual contact types
const EMAIL_PATTERN =
    /email|e-mail|mail|send.*email|send.*mail|electronic mail/i;
const PHONE_PATTERN = /phone|call|mobile|cell|telephone|contact number/i;
const LOCATION_PATTERN =
    /location|address|where.*live|where.*based|city|town|where.*from/i;

// Add specific patterns for individual projects
const EMART_PATTERN =
    /emart|e-mart|e-commerce|spring boot|asp\.net|dual.backend|jwt|oauth/i;
const FFT_PATTERN =
    /fft|mimo|ofdm|radix|signal processing|128.point|fourier/i;

// Update the detectQueryType function to handle specific project types
export function detectQueryType(message: string): string | null {
    const lowerMessage = message.toLowerCase();

    // Check for specific project types
    if (
        EMART_PATTERN.test(lowerMessage) &&
        !FFT_PATTERN.test(lowerMessage)
    )
        return "emart_project";
    if (
        FFT_PATTERN.test(lowerMessage) &&
        !EMART_PATTERN.test(lowerMessage)
    )
        return "fft_project";

    // Check for specific contact types
    if (
        EMAIL_PATTERN.test(lowerMessage) &&
        !PHONE_PATTERN.test(lowerMessage) &&
        !LOCATION_PATTERN.test(lowerMessage)
    )
        return "email_contact";
    if (PHONE_PATTERN.test(lowerMessage) && !EMAIL_PATTERN.test(lowerMessage))
        return "phone_contact";
    if (LOCATION_PATTERN.test(lowerMessage)) return "location_contact";

    // Check for specific link types
    if (
        RESUME_PATTERN.test(lowerMessage) &&
        !lowerMessage.includes("skills") &&
        !lowerMessage.includes("experience")
    )
        return "resume_link";
    if (GITHUB_PATTERN.test(lowerMessage) && !lowerMessage.includes("projects"))
        return "github_link";
    if (LINKEDIN_PATTERN.test(lowerMessage)) return "linkedin_link";
    if (PORTFOLIO_PATTERN.test(lowerMessage)) return "portfolio_link";
    if (PROJECT_LINKS_PATTERN.test(lowerMessage)) return "project_links";

    // Then check for general categories
    if (SKILLS_PATTERN.test(lowerMessage)) return "skills";
    if (PROJECTS_PATTERN.test(lowerMessage)) return "projects";
    if (EXPERIENCE_PATTERN.test(lowerMessage)) return "experience";
    if (EDUCATION_PATTERN.test(lowerMessage)) return "education";
    if (CONTACT_PATTERN.test(lowerMessage)) return "contact";
    if (AWARDS_PATTERN.test(lowerMessage)) return "awards";
    if (LINKS_PATTERN.test(lowerMessage)) return "links";

    return null;
}
