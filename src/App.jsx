import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import resumeData from './resumeData.json';

function App() {
  const { name, title, contact, summary, skills, experience, education, author, year, license } = resumeData;

  return (
    <>
      <Header name={name} title={title} contact={contact} />
      <Profile summary={summary} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Education education={education} />
      <Footer author={author} year={year} license={license}/>
    </>
  );
}

export default App;
