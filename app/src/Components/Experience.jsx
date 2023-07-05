import React from 'react';
import '../Styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className='m'>
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="company-name">Kylo Apps</h3>
          <h4 className="company-name">April 2022 - May 2022</h4>
        
        </div>
        <h4 className="position">Software Developer</h4>
        <ul className="responsibilities">
          <li>Contributed to the development of XYZ project</li>
          <li>Collaborated with cross-functional teams</li>
          <li>Implemented new features and enhancements</li>
        </ul>
      </div>
      <div className="experience-item">
        <div className="experience-header">
        <h3 className="company-name">Creed Essentials</h3>
        <h4 className="company-name">June 2021 - Aug 2021 </h4>
        </div>
        <h4 className="position">Software Developer</h4>
        <ul className="responsibilities">
          <li>Assisted in the development of ABC project</li>
          <li>Performed bug fixes and code optimizations</li>
          <li>Participated in code reviews and testing</li>
        </ul>
      </div>
      </div>
      
    </div>
  );
};

export default Experience;
