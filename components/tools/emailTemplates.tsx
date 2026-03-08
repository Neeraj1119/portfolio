export interface EmailTemplate {
  title: string;
  icon: string;
  description: string;
  prompt: string;
  tags: string[];
}

export const emailTemplates: EmailTemplate[] = [
  {
    title: "Professional Introduction",
    icon: "👔",
    description: "Introduce yourself to Neeraj for networking.",
    prompt:
      "Write a professional email to Neeraj Patil initiating a professional connection. I found his portfolio impressive and want to introduce myself as a fellow developer/professional. Express interest in keeping in touch for potential future opportunities or knowledge sharing.",
    tags: ["Business", "Networking"],
  },
  {
    title: "Project Proposal",
    icon: "📊",
    description: "Propose a project for Neeraj to work on.",
    prompt:
      "Write a project proposal email to Neeraj Patil. I have a new web application project regarding [Project Topic] and I am looking for a skilled Full Stack Developer. Ask for his availability, rates, and if he would be interested in discussing the project requirements further.",
    tags: ["Proposal", "Business"],
  },
  {
    title: "Follow-up Message",
    icon: "🤝",
    description: "Follow up with Neeraj after a meeting.",
    prompt:
      "Write a follow-up email to Neeraj Patil regarding our recent conversation/interview. Thank him for his time, reiterate my strong interest in having him join our team/project, and ask about the next steps in the process.",
    tags: ["Follow-up", "Networking"],
  },
  {
    title: "Collaboration",
    icon: "🤝",
    description: "Propose a collaboration to Neeraj.",
    prompt:
      "Write an email to Neeraj Patil proposing a collaboration opportunity. I am working on an innovative project/startup idea and believe his skills in Java, Spring Boot, and full-stack development would be invaluable. Ask if he is open to a quick call to hear more about it.",
    tags: ["Collaboration", "Business"],
  },
  {
    title: "Hire Me",
    icon: "💼",
    description: "Recruit Neeraj for a job opportunity.",
    prompt: `Write a professional email as a tech recruiter reaching out to hire Neeraj Patil. Include these details:
  
  My name is [Your Name]
  Position: Technical Recruiter
  Company: [Company Name]
  Email: [Your Email]
  Location: [City, Country] (Remote/Hybrid/On-site)
  
  Role Details:
  - Position: Full Stack Developer
  - Level: [Junior/Mid/Senior]
  - Tech Stack: Java, Spring Boot, ASP.NET Core, ReactJS, MySQL
  - Salary Range: [Amount] per year
  - Benefits: Health insurance, stock options, flexible hours, etc.
  
  I've reviewed your portfolio and your experience with Java, Spring Boot, ASP.NET Core, and ReactJS aligns perfectly with what we're looking for. Let's schedule a call to discuss this opportunity in detail.`,
    tags: ["Recruitment", "Business"],
  },
  {
    title: "General Inquiry",
    icon: "💡",
    description: "Ask Neeraj a general question.",
    prompt:
      "Write a friendly email to Neeraj Patil. I came across his work and have a specific question about his tech stack or one of his projects. Keep it concise and respectful of his time.",
    tags: ["Inquiry", "General"],
  },
];
