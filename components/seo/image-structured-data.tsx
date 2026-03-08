export function ProfileImagesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://neerajpatil.com",
          },
          about: {
            "@type": "Person",
            name: "Neeraj Patil",
            description:
              "Full Stack Developer specializing in Java, Spring Boot, ASP.NET Core, and ReactJS.",
          },
          associatedMedia: [
            {
              "@type": "ImageObject",
              contentUrl: "https://neerajpatil.com/profile.jpg",
              name: "Neeraj Patil - Full Stack Developer Profile",
              description:
                "Profile photo of Neeraj Patil, Full Stack Developer",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
          ],
        }),
      }}
    />
  );
}
