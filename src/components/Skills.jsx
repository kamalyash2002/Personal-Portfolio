import React from 'react';

const SkillProgressBar = () => {
  const skillsData = [
    { name: 'Web Design', percent: 80, strokeColor: '#FF6464' },
    { name: 'Javascript', percent: 80, strokeColor: '#9272D4' },
    { name: 'ReactJS', percent: 80, strokeColor: '#5185D4' },
    { name: 'NodeJS', percent: 75, strokeColor: '#CA56F2' },
  ];

  const skillsData2 = [
    { name: 'Python', percent: 90, strokeColor: '#F7DF1E' },
    { name: 'Django', percent: 85, strokeColor: '#61DAFB' },
    { name: 'MySQL', percent: 80, strokeColor: '#8CC84B' },
    { name: 'MongoDB', percent: 75, strokeColor: '#000000' },
  ];

  return (
    <div className="max-w-xl mx-auto p-4 mt-16">
      <h4 className="text-4xl  text-dark-purple font-bold mb-6 text-center">
        Skills
      </h4>
      <div className="flex justify-between ">
        <div className="w-1/2 mr-12">
          {skillsData.map((skill, index) => (
            <div key={index} className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                  {skill.name}
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  {skill.percent}%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth={1}
                  fillOpacity={0}
                />
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke={skill.strokeColor}
                  strokeWidth={1}
                  fillOpacity={0}
                  style={{
                    strokeDasharray: `${(skill.percent * 0.8).toFixed(2)}px, 100px`,
                    strokeDashoffset: 0,
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          {skillsData2.map((skill, index) => (
            <div key={index} className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                  {skill.name}
                </span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                  {skill.percent}%
                </span>
              </div>
              <svg
                className="rc-progress-line"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth={1}
                  fillOpacity={0}
                />
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke={skill.strokeColor}
                  strokeWidth={1}
                  fillOpacity={0}
                  style={{
                    strokeDasharray: `${(skill.percent * 0.8).toFixed(2)}px, 100px`,
                    strokeDashoffset: 0,
                    transition:
                      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                  }}
                ></path>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
