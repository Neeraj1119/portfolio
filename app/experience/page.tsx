import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiAward, FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "Present",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Postgraduate Diploma in Advanced Computing
            </h3>
            <div className="flex items-center gap-2 text-neutral-400 text-xs sm:text-sm">
              <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">C-DAC Sm-Vita, Mumbai, IN</span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Completed a Postgraduate Diploma in Advanced Computing
              (PG-DAC) from C-DAC Sm-Vita, Mumbai (Aug 2025 - Feb 2026). Focused on full-stack
              development with Java, Spring Boot, ASP.NET Core, and hands-on project building.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2021-2025",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Bachelor of Engineering
            </h3>
            <div className="flex items-center gap-2 text-neutral-400 text-xs sm:text-sm">
              <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Fr. Conceicao Rodrigues Institute of Technology, Mumbai, IN</span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              BE in Electronics & Telecommunication Engineering (Jun 2021 - May 2025).
              Developed strong problem-solving skills and technical expertise through
              comprehensive coursework and practical projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Leadership & Extracurriculars",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiAward className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-4 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Leadership Roles
            </h3>

            {/* Chairperson IETE-ETSA */}
            <div className="space-y-2">
              <div className="flex items-start sm:items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2 sm:mt-0" />
                <h4 className="text-white font-medium text-sm sm:text-base leading-tight">
                  Chairperson – IETE-ETSA, FCRIT (Jul 2023 – Jun 2024)
                </h4>
              </div>
              <div className="pl-3 sm:pl-5">
                <ul className="space-y-1 text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                    <span>Organised a seminar on advanced antenna systems with 200+ attendees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                    <span>Led a robot-building workshop for 100+ students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                    <span>Directed a robotics competition for 150+ participants</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    Leadership
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    150+ Participants
                  </span>
                </div>
              </div>
            </div>

            {/* Deputy Technical Head IEEE */}
            <div className="space-y-2">
              <div className="flex items-start sm:items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2 sm:mt-0" />
                <h4 className="text-white font-medium text-sm sm:text-base leading-tight">
                  Deputy Technical Head – IEEE Committee, FCRIT (Jul 2023 – Jun 2024)
                </h4>
              </div>
              <div className="pl-3 sm:pl-5">
                <ul className="space-y-1 text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                    <span>Delivered STEM education sessions in primary schools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                    <span>Facilitated 5 interactive career workshops for 100+ students</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    IEEE
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    STEM Education
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Timeline data={data} />
    </div>
  );
}
