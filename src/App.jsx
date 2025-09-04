
import React, { Component, useEffect } from 'react';
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Skill from "./pages/Skill";
import Project from "./pages/MyProject";
// import Contact from "./pages/MyContact";
// import Comment from "./pages/Comment";
import Award from './pages/Award';
import Education from './pages/education';
import WorkExperienceSCM from './pages/WorkExperienceSCM';
// import WorkExperienceWEWEBPLUS from './pages/WorkExperienceWEWEBPLUS';
import ContactEmail from './pages/ContactEmail';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far);








const App = () => {


  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.6,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const btn = document.querySelector(`.btn-all div[data-id='${id}']`);
  
        if (entry.isIntersecting) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }, options);
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    const handleMove = (e) => {
      glow.style.transform = `translate(${e.clientX - 110}px, ${e.clientY - 110}px)`;
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div className="all-page">
      <div className="animated-gradient"></div>
      <div id="cursor-glow" className="cursor-glow"></div>
      <div className="relative">
        <div className="btn-all gap-5">
        <a href='#home'> <div data-id="home"><FontAwesomeIcon icon="fa-solid fa-house" /></div></a>
         <a href='#about'> <div data-id="about"><FontAwesomeIcon icon="fa-regular fa-address-card" /></div></a>
         <a href='#experience'> <div data-id="experience"><FontAwesomeIcon icon="fa-solid fa-briefcase" /></div></a>
         <a href='#skill'> <div data-id="skill"><FontAwesomeIcon icon="fa-brands fa-react" /></div></a>
         {/* <a href='#project'> <div data-id="project"><FontAwesomeIcon icon="fa-regular fa-file-code" /></div></a> */}
         <a href='#contact-email'> <div data-id="contact-email"><FontAwesomeIcon icon="fa-regular fa-envelope" /></div></a>
         {/* <a href='#contact'> <div data-id="contact"><FontAwesomeIcon icon="fa-regular fa-envelope" /></div></a> */}
        </div>

        <div className="mx-auto"><Navbar /></div>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><WorkExperienceSCM /></section>
        <section id="education"><Education /></section>
        <section id='award'><Award /></section>
        <section id="skill"><Skill /></section>
        <section id="project"><Project /></section>
        <section id="contact-email"><ContactEmail /></section>
        
        {/* <section id="contact"><Contact /></section>
        <Comment /> */}

        <Footer />
      </div>
    </div>
  );
};

export default App;
