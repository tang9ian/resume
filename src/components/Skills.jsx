import React from 'react';

const Skills = ({ skills }) => (
  <section className="space-y-2 p-4">
    <h2 className="text-2xl font-bold">Skills</h2>
    <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
      {skills.map((skill, index) => (
        <li className="px-2.5 mr-1.5 mb-1.5 rounded text-base text-gray-750 print:bg-white print:border-inset bg-gray-200" key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
