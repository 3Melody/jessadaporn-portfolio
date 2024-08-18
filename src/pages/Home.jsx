
import Profile1 from "../assets/home/profile1.png"
import blurBG from "../assets/home/blur-bg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';






function intro() {
    useEffect(() => {
      AOS.init();
    }, []);
    
    return (
        <div className="home section ">
           <div className="container mx-auto ">
               
               
               <div className="xl:flex xl:mt-20 xl:justify-between">
                    <div data-aos="zoom-in"  className="mt-10 relative order-2 ">
                        <img  src={Profile1} className="profile" alt=""  />
                        <div className="bg-2"></div>
                        <div className="bg-1"></div>
                        </div>
    
                   <div className="xl:w-1/2">
                        <div className="title ">
                            <div className="white stroke-title  text-5xl  hidden xl:flex justify-center  font-bold mt-1 xl:justify-start portfolio port-1">My Portfolio</div>
                            <div className="white text-5xl flex justify-center  font-bold mt-6 xl:mt-1 xl:justify-start portfolio h-port animate__bounce">My Portfolio</div>
                            <div className="white text-5xl stroke-title  hidden xl:flex justify-center  font-bold mt-1 xl:justify-start portfolio port-2">My Portfolio</div>
                        </div>
                        <div data-aos="fade-right" className="detail mt-10 text-center xl:text-start">
                        Portfolio website for internship applications, showcasing UX/UI design and frontend development expertise, providing exceptional user experiences. 
                        Welcome to explore my work!
                        </div>
        
                       <div data-aos="fade-right" className="flex justify-center  xl:justify-start"> <button className="btn-home mt-6">Start Now!</button></div>
        
                        <div className="flex gap-4 icon justify-center xl:justify-start opacity-50 mt-10">
                        <FontAwesomeIcon data-aos="fade-right" data-aos-delay="100"icon="fa-brands fa-github " style={{color: "#ffffff",}} />
                        <FontAwesomeIcon data-aos="fade-right" data-aos-delay="200" icon="fa-brands fa-facebook" style={{color: "#ffffff",}} />
                        <FontAwesomeIcon data-aos="fade-right" data-aos-delay="300" icon="fa-solid fa-envelope" style={{color: "#ffffff",}} />
                        <FontAwesomeIcon data-aos="fade-right" data-aos-delay="400" icon="fa-brands fa-linkedin" style={{color: "#ffffff",}} />
                        <FontAwesomeIcon data-aos="fade-right" data-aos-delay="500" icon="fa-brands fa-instagram" style={{color: "#ffffff",}} />
                        </div>
                   </div>
               </div>
           </div>
        </div>

    )
}

export default intro
