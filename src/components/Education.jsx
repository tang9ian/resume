import React from 'react';

const Education = ({ education }) => (
  education.length === 0 ? null : (
    <section className="space-y-2 p-4">
      <h2 className="text-2xl font-bold">Education</h2>
      {education.map((school, index) => (
        <div key={index} className="mb-4.5 break-inside-avoid">
          <h4 className="text-lg font-semibold text-gray-700 leading-snugish">
            {school.school}
          </h4>
          <p className="leading-normal text-md text-gray-650">
            {school.degree} {school.years && `| ${school.years}`}
          </p>
        </div>
      ))}
    </section>
  )
);

export default Education;
