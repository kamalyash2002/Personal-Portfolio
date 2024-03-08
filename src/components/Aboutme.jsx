import React from "react";
import aboutimage from "../assets/about.svg";
import pattern from '../assets/patternpad.svg'

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-navcolor "  >
        <div className="container mx-auto border-2 border-custom-purple rounded-md  " style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" ,  backgroundColor: "white" }} >
          <div className="flex flex-wrap items-center justify-between -mx-4 ">
            <div className="w-full px-8 pt-6">
              <div className="mt-10 lg:mt-0 ">
                <h2 className="mb-5 text-3xl font-bold text-dark-purple ">
                  About Me
                </h2>
                <p className="mb-2 text-base text-body-color dark:text-dark-6">
                Yash, an experienced Software Development Engineer with more than half a year of industry exposure, has honed his skills through internships at Rajat Agarwal Creators, Mentor Control, and Emendo AI Inc. His diverse experiences have equipped him with a solid foundation in software development, allowing him to contribute effectively to projects. Proficient in the MERN stack, microservices, and leveraging the latest AI technologies, Yash is eager to bring his enriched expertise to new challenges. Actively seeking opportunities, he is poised to make meaningful contributions to your team. Let's connect and explore how Yash's varied experiences can benefit your projects.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
