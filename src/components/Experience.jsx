import React from 'react';

const Experience = ({ experience }) => (
  <section className="space-y-2 p-4">
    <h2 className="text-2xl font-bold">Experience</h2>
    {experience.map((job, index) => (
      <div key={index}>
        <p className="my-px mt-4 flex justify-between font-bold">
          <span className="w-fit rounded-md bg-gray-300 px-2">{job.position} at {job.company}</span>
          <span>{job.years}</span>
        </p>
        <p className="flex gap-1">{job.description}</p>
      </div>
    ))}
  </section>
);

export default Experience;
