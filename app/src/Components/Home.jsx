import React from 'react';
import "../Styles/Home.css"



import { useNavigate } from 'react-router-dom';

import profilePicture from "../Assets/profile-picture.jpg" // Import your personal picture

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="container">
      <div className="content">
        <div className="text-container">
          <h1 className="fade-in">Welcome to my Portfolio</h1>
          <p className="fade-in">
            I'm a passionate software developer with a love for creating innovative applications and solving complex problems.
            With a strong problem-solving ability, I have contributed to various projects and always strive to learn new things.
          </p>
          <button className="button fade-in" onClick={handleContactClick}>
            Get in touch
          </button>
        </div>
        <div className="image-container">
          <img className="profile-picture" src={profilePicture} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;



