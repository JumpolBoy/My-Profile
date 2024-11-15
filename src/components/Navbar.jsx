import React from 'react';

function Navbar() {
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const yOffset = -50;
    const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div id='about'></div>
      <header>
        <nav>
          <ul>
            <a href="#" className='aaa' onClick={(e) => scrollToSection('about', e)}>
            <li className="navlist">About</li></a>
            <a href="#" className='aaa' onClick={(e) => scrollToSection('projects', e)}>
            <li className="navlist">Projects</li></a>
            <a href="#" className='aaa' onClick={(e) => scrollToSection('experience', e)}>
            <li className="navlist">Experience</li></a>
            <a href="#" className='aaa' onClick={(e) => scrollToSection('contact', e)}>
            <li className="navlist">Contact</li></a>
          </ul>
        </nav>

        <div className="input-container">
          <input
            className="input"
            name="text"
            type="text"
            placeholder="Search the interest..."
          />
        </div>
      </header>
    </>
  );
}

export default Navbar;
