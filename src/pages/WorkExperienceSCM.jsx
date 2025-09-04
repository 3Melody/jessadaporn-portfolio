import React from 'react';
import scm from '../assets/Scms_Logo.jpg'
import wewebplus from '../assets/wewebplus.jpg'

const WorkExperienceSCM = () => {
  return (
   <div className="section portfolio experience">
      <div data-aos="fade-down">
        <div className="container mx-auto">
         <div className='flex flex-col md:flex-row items-center gap-3 mb-6'>
            <img src={scm} alt="" className='w-[100px]' />
            <div className="text-white text-4xl font-bold text-center md:text-start">Work Experience — SCM Technologies</div>
         </div>
          <div className="text-white opacity-80 mb-2">November 2024 - Present (10 Months)</div>
  
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="border-primary rounded-lg p-6 bg-black/40">
              <div className="text-xl text-white font-semibold mb-2">Energy Sector — Work Permit System</div>
              <div className="detail">
                Developed and maintained work permit management systems for major energy companies using Angular, Tailwind, Java Spring Boot, and SQL. Handled CRUD operations, report generation, and issue resolution.
              </div>
            </div>
  
            <div className="border-primary rounded-lg p-6 bg-black/40">
              <div className="text-xl text-white font-semibold mb-2">Insurance Data Platform</div>
              <div className="detail">
                Contributed to an insurance data platform using C# .NET and Angular, handling API integration and testing with Postman, fixing code smells, and collaborating with external teams via GraphQL.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="container mx-auto">
        <div className='flex flex-col md:flex-row items-center gap-3 mb-6'>
            <img src={wewebplus} alt="" className='w-[100px]' />
        <div className="text-white text-4xl font-bold text-center md:text-start">Work Experience — WEWEBPLUS</div>
        </div>
        <div className="text-white opacity-80 mb-2">April 2024 - May 2024 (2 Months)</div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="border-primary rounded-lg p-6 bg-black/40">
            <div className="text-xl text-white font-semibold mb-2">Accessibility Improvements</div>
            <div className="detail">
              Implemented accessibility improvements for government websites using JavaScript, ensuring compliance with W3C standards to enhance usability for users with disabilities.
            </div>
          </div>

          <div className="border-primary rounded-lg p-6 bg-black/40">
            <div className="text-xl text-white font-semibold mb-2">Government Landing Pages</div>
            <div className="detail">
              Developed government landing pages using Bootstrap, PHP, and SCSS, focusing on creating visually appealing and responsive designs across devices. Optimized page performance and ensured cross-browser compatibility to provide a smooth user experience.
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default WorkExperienceSCM;


