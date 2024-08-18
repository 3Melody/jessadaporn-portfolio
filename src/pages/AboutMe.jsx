import React, { Component } from "react";
import Profile1 from "../assets/home/profile1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import iconShow1 from "../assets/about/icon-show1.png";
import iconShow2 from "../assets/about/icon-show2.png";
import iconShow3 from "../assets/about/icon-show3.png";
export class AboutMe extends Component {
 

  render() {
    return (
      <div className="section about relative">
        <div  className="iconShow1 hidden xl:block"><img src={iconShow1} alt="" /></div>
        
   
        <div className="container  mx-auto">
         <div className="xl:flex xl:justify-around ">
            <div className=" relative xl:hidden">
              <img src={Profile1} className="profile " alt="" />
              <div className="bg-2 "></div>
              <div className="bg-1"></div>
            </div>
            <div data-aos="flip-up" className="mt-10 hidden xl:block ">
              <img src={Profile1} className="profile-dec"  alt="" />
            </div>
           <div data-aos="zoom-in-left" className="xl:w-1/2">
              <div className="color-primary mt-10 text-xl">About</div>
              <div className="text-2xl text-white mt-4">Profile</div>
              <div className="detail mt-2">
                I'm a third-year Software Engineering student at University of
                Phayao, looking for an internship opportunity from April to May.
                Eager to learn, contribute, and gain real-world insights in software
                development. Excited to join your team. Thank you.
              </div>
              <div className="white mt-5">Contact</div>
              <div className="detail mt-2">
                <a href="mailto:plug.jessadaporn@gmail.com"><div>Email : plug.jessadaporn@gmail.com</div></a>
                <a href="https://www.linkedin.com/in/jessadaporn-tatin/" target="_blank" rel="noopener noreferrer"><div>LinkedIn : www.linkedin.com/in/jessadaporn-tatin</div></a>
              </div>
              <div className="flex mt-10 gap-3">
               <a className="w-full" href="mailto:plug.jessadaporn@gmail.com">
                  <button className="w-full p-3 rounded-lg bg-primary">
                    <FontAwesomeIcon icon="fa-regular fa-envelope" className="me-2" />
                    Email
                  </button>
               </a>
         
                  <button className="w-full rounded-lg border-primary color-primary">
                   <a href="https://drive.google.com/file/d/1yjT0G9Hp4yGoKnxISQF7tMW0dzbEHD0F/view?usp=drive_link" target="_blank"> Download CV</a>
                  </button>
            
              </div>
           </div>
         </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
