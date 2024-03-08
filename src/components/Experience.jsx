// TheExperienceComponent.js
import React from 'react';

const experiences = [
  {
    title: 'SDE Intern',
    company: 'Emendo AI Inc.',
    designation: 'California, USA (Remote)',
    duration: 'Nov 2023 - Present',
    details: [
      'Developing and managing AMA (Ask Me Anything) service, specializing in chatbot functionalities.',
      'Leveraging AWS Lambda for the efficient execution of serverless functions.',
      'Utilizing AWS Bedrock and RAG (Retrieval Augmented Generation) for accurate and automated answer generation from the user’s documents content.',
    ],
  },
  {
    title: 'SDE Intern',
    company: 'MentorControl',
    designation: 'Pune, India (Remote)',
    duration: 'Jan 2024 - Present',
    details: [
      'Developing robust UI in ReactJS & integrated backend seamlessly with frontend for a cohesive user experience.',
      'Optimized component loading times and reduced API calls, enhancing overall application efficiency.',
      'Contributed to backend (Spring Boot) with strategic modifications for enhanced functionality.',
    ],
  },
  {
    title: 'Web Dev Intern',
    company: 'Rajat Agarwal Creators',
    duration: 'June 2023 - August 2023',
    details: [
      'Developed the E-commerce Web Application backend for the organization.',
      'Assisted in the development and maintenance of backend systems and APIs using the Django framework.',
      'Participated in code reviews and debugging sessions to identify and resolve issues in the Django applications.',
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white w-full rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl">
      <div className="p-6">
        <div className="pb-3 mb-4 border-b border-stone-200 text-xs font-medium flex justify-between text-blue-900">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {experience.duration}
          </span>
        </div>
        <h3 className="mb-2 font-semibold text-2xl">
          <a
            href=""
            className="transition-all text-blue-900 hover:text-blue-600"
          >
            {experience.title} <br /> {experience.company}
          </a>
        </h3>
        {experience.cgpa && (
          <p className="text-sky-800 text-sm mb-2">CGPA: {experience.cgpa}</p>
        )}
        <p className="text-sky-800 text-sm mb-0">{experience.designation}</p>
        <ul className="list-disc pl-6 mt-2">
          {experience.details.map((detail, index) => (
            <li key={index} className="text-sky-800 text-sm">{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TheExperienceComponent = () => {
  return (
    <div className="relative flex  flex-col justify-center overflow-hidden bg-navcolor py-6 sm:py-12">
      <div className="m-5 flex flex-col items-center mx-auto max-w-screen-lg">
        <div className="header flex w-full justify-center">
          <h2 className="font-black pb-5 mb-20 text-4xl text-dark-purple ">
            Experience
          </h2>
        </div>
        <div className="grid w-full gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheExperienceComponent;
