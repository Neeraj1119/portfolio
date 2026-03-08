export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Neeraj Patil",
          url: "https://neerajpatil.com",
          sameAs: [
            "https://github.com/Neeraj1119",
            "https://www.linkedin.com/in/neeraj-patil-a692b226b/",
          ],
          jobTitle: "Full Stack Developer",
          knowsAbout: ["Web Development", "Java", "Spring Boot", "ASP.NET Core", "ReactJS"],
          image: "/profile.jpg",
          description: "Full Stack Developer specializing in Java, Spring Boot, ASP.NET Core, and ReactJS."
        })
      }}
    />
  );
}