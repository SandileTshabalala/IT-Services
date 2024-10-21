import React from 'react';
import Header from './header';
import Home from './home';
import Services from './service';
import Contact from './contact';
import About from './about';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Content = () => {
  return (
    <>
      <Header setSelectedCategory={scrollToSection} />
      <main className="content">
        <section id="Home" className="main-contents">
          <Home />
        </section>
        <section id="Services" className="main-contents">
          <Services />
        </section>
        <section id="About" className="main-contents">
          <About />
        </section>
        <section id="Contact" className="main-contents">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Content;
