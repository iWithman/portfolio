import { educations, workExperiences } from "../data/aboutMeData";
import { HashLink } from 'react-router-hash-link';

const About = () => {

  return (
    <section id="about" className="w-full px-4 py-16">
      <h2 className="text-[32px] md:text-[48px] text-center md:text-left font-bold mb-6">
        About Me
      </h2>
      <div className="card text-black dark:text-gray-200 shadow-sm rounded-md p-6">
        <div className="mb-6">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Frontend Engineer with 5+ years of experience building scalable web apps using React, Next.js, TypeScript, and AWS.
            Collaborative and adaptable, skilled at translating business requirements into technical solutions, delivering responsive,
            accessible UIs, and driving Agile projects. Proven track record improving SEO, boosting user acquisition, and delivering
            business-impacting features.
          </p>
        </div>
        <div>
        <div className="my-4 text-center md:text-left animate-pulse">

          <HashLink smooth to="/#tech-stack" className="text-1xl p-4 badge badge-outline text-orange-400">
            Click Here For My Skills
          </HashLink>
        </div>
      </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

          <div className="space-y-4">
            {workExperiences.map((we) => (
              <div
                key={we.id}
                className="pb-2 border-b border-gray-200"
              >
                <div className="flex justify-between">
                  <div className="text-base font-medium">{we.employer}</div>
                  <div className="text-sm badge bg-orange-300 text-orange-600 rounded-2xl">{we.cityState}</div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="text-xs text-gray-400 font-semibold">
                    {we.jobTitle}
                  </div>
                  <div className="text-xs text-gray-500">{we.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="space-y-3">
            {educations.map((education, index) => (
              <div
                key={education.id}
                className={`pb-2 ${index < educations.length - 1 && "border-b border-gray-200"}`}
              >
                <div className="flex justify-between items-start flex-wrap gap-y-1">
                  <div className="text-base font-medium">{education.school}</div>
                  <div className="text-sm text-gray-500">{education.cityState}</div>
                </div>

                <div className="flex justify-between items-start mt-1 flex-wrap gap-y-1">
                  <div className="text-xs text-gray-400 font-semibold">
                    {education.degree}
                  </div>
                  <div className="text-xs text-gray-500">{education.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
