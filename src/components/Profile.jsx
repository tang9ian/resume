import React from 'react';

const Summary = ({ summary }) => (
  <section className="space-y-2 p-4">
    <h2 className="text-2xl font-bold">Summary</h2>
    <p>{summary}</p>
  </section>
);

export default Summary;
