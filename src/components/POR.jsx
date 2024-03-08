import React from "react";
import PropTypes from "prop-types";

const Achievements = () => {
  const achievements = [
    {
      title: "ACM ICPC Regionalist, Chennai",
      description: "Participated in the ACM ICPC regional contest and secured 69th position.",
      year: 2024,
    },
    {
      title: "Branch Silver and Bronze Medalist",
      description: "For the academic year 2021-22, secured silver and for 2021-22 the bronze medals in the branch.",
      year: "2021 - 2023",
    },
    {
      title: "Flipkart Grid 5.0 Semifinalist",
      description: "Participated in the Flipkart Grid 5.0 and got selected for the semifinals.",
      year: 2023,
    },
    // Add more achievements as needed
  ];

  const responsibilities = [
    {
      title: "CISCO Campus Ambassador",
      description: "Serving as the campus ambassador for CISCO for spreading awareness about the company and its products.",
      year: "2023-2024",
    },
    {
      title: "Social Media Head at E-Cell IIIT Una",
      description: "Managing the social media handles of the E-Cell IIIT Una and promoting the events and activities.",
      year: "2023-Present",
    },
    {
        title: "Placement Volunteer at Career Development Cell, IIIT Una",
        description: "Managing the placement activities and helping the students in the placement process.",
        year: "2023-Present",
      },
    // Add more responsibilities as needed
  ];

  return (
    <>
      <div className="flex items-center justify-center bg-white mt-20 px-6 mb-20  md:px-60">
        <div className="space-y-3.5">
          <h2 className="text-4xl font-bold text-dark-purple mb-6 pb-6 pt-0">Achievements</h2>
          {achievements.map((achievement, index) => (
            <div key={index} className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-dark-purple"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-dark-purple">{achievement.title}</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                  {achievement.description}
                </p>
                <span className="mt-1 block text-sm font-semibold text-dark-purple">
                  {achievement.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-12 ">
        <h2 className="text-4xl font-bold text-dark-purple mb-6 pb-6">Position of Responsibilities</h2>
          {responsibilities.map((pos, index) => (
            <div key={index} className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-dark-purple"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-dark-purple">{pos.title}</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                  {pos.description}
                </p>
                <span className="mt-1 block text-sm font-semibold text-dark-purple">
                  {pos.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;
