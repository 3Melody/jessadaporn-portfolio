import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div>
      <div data-aos="fade-up" className="footer xl:text-xl  ">
        <div className="container mx-auto">
          <div>
            <div className="xl:flex xl:gap-3">
              <div className="xl:w-1/2">
                <div className="font-bold ">About Me</div>
                <div>
                  I'm a third-year Software Engineering student at University of
                  Phayao, looking for an internship opportunity from April to
                  May. Eager to learn, contribute, and gain real-world insights
                  in software development. Excited to join your team. Thank you.
                </div>
                <div className="h-1 w-full bg-black mt-3 xl:hidden"></div>
              </div>
              <div className="bg-black  w-1 hidden xl:block"></div>
              <div className="mt-5 xl:mt-0">
                <div className="font-bold">Contact</div>
                <div>Email : plug.jessadaporn@gmail.com</div>
                <div>LinkedIn : www.linkedin.com/in/jessadaporn-tatin</div>
              </div>
            </div>
            <div className="h-1 w-full bg-black mt-3 xl:hidden"></div>
            <div className="flex gap-4 icon justify-center xl:justify-start text-3xl opacity-50 mt-10">
                        <a href="https://github.com/3Melody" target="_blank"><FontAwesomeIcon data-aos="fade-right" data-aos-delay="100"icon="fa-brands fa-github " style={{color: "black",}} /></a>
                       <a href="https://www.facebook.com/mni.plug/" target="_blank"> <FontAwesomeIcon data-aos="fade-right" data-aos-delay="200" icon="fa-brands fa-facebook" style={{color: "black",}} /></a>
                        <a href="mailto:plug.jessadaporn@gmail.com"><FontAwesomeIcon data-aos="fade-right" data-aos-delay="300" icon="fa-solid fa-envelope" style={{color: "black",}} /></a>
                       <a href="https://www.linkedin.com/in/jessadaporn-tatin/" target="_blank"> <FontAwesomeIcon data-aos="fade-right" data-aos-delay="400" icon="fa-brands fa-linkedin" style={{color: "black",}} /></a>
                       <a href="https://www.instagram.com/mni.plug/" target="_blank"> <FontAwesomeIcon data-aos="fade-right" data-aos-delay="500" icon="fa-brands fa-instagram" style={{color: "black",}} /></a>
                        </div>
           <a href="#home">
                <div className="flex justify-center items-center flex-col mt-10 ">
                  <FontAwesomeIcon 
                    icon="fa-solid fa-arrow-up"
                    className="text-xl move-top arrow"
                  />
                  <div className="mt-1 ">Click Move Top</div>
                </div>
           </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
