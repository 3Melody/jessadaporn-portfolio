import React, { Component, useEffect } from 'react';
import Home from "../pages/Home";
import About from "../pages/AboutMe";
import Skill from "../pages/Skill";
import Project from "../pages/MyProject";
import Contact from "../pages/MyContact";
import Comment from "../pages/Comment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






const Index = () => {


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

  return (
    <div className="all-page">
      <div className="relative">
        <div className="btn-all gap-5">
        <a href='#home'> <div data-id="home"><FontAwesomeIcon icon="fa-solid fa-house" /></div></a>
         <a href='#about'> <div data-id="about"><FontAwesomeIcon icon="fa-regular fa-address-card" /></div></a>
         <a href='#skill'> <div data-id="skill"><FontAwesomeIcon icon="fa-brands fa-react" /></div></a>
         <a href='#project'> <div data-id="project"><FontAwesomeIcon icon="fa-regular fa-file-code" /></div></a>
         <a href='#contact'> <div data-id="contact"><FontAwesomeIcon icon="fa-regular fa-envelope" /></div></a>
        </div>

        <div className="mx-auto"><Navbar /></div>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skill"><Skill /></section>
        <section id="project"><Project /></section>
        <section id="contact"><Contact /></section>
        <Comment />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
