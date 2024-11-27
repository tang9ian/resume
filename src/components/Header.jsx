import React from 'react';

const Header = ({ name, title, contact }) => (
  <>
  <header className="mb-4 flex items-stretch justify-between border-b border-black p-4">
    <div className="flex flex-col gap-2">
      <div className="flex flex-1 flex-col justify-center gap-2">
        <h1 className="text-4xl font-bold">{name}</h1>
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="flex gap-4">
        <a href={contact.portfolio} className="flex items-center gap-1" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" className="h-5 w-5" astro-icon="mdi:link"><path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5 5 5 0 0 0-5-5Z"></path></svg> {contact.portfolio}
        </a>
        <a href={contact.github} className="flex items-center gap-1" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" className="h-5 w-5" astro-icon="mdi:github"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg> {contact.github}
        </a>
        <a href={`mailto: ${contact.email}`} className="flex items-center gap-1"><svg viewBox="0 0 24 24" className="h-5 w-5" astro-icon="mdi:email"><path fill="currentColor" d="m20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path></svg> {contact.email}
        </a>
      </div>
    </div>
  </header>
  </>
);

export default Header;
