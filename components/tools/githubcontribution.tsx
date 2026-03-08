// components/GitHubCalendar.tsx
"use client";
import React from "react";

interface GitHubContributionsProps {
  username: string;
}

export const GitHubContributions: React.FC<GitHubContributionsProps> = ({
  username,
}) => {
  // Use GitHub's actual contribution graph via the ghchart service
  const contributionUrl = `https://ghchart.rshah.org/26a641/${username}`;
  const fallbackUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-full lg:max-w-6xl xl:max-w-7xl overflow-hidden">
        <img
          src={contributionUrl}
          alt={`${username}'s GitHub Contributions`}
          className="w-full"
          style={{
            maxHeight: '400px',
            objectFit: 'contain',
            filter: 'brightness(1.1)',
          }}
          onError={(e) => {
            // Fallback to GitHub profile contributions image
            e.currentTarget.src = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000`;
          }}
        />
      </div>
    </div>
  );
};
