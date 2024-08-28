import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import project1 from "../assets/project/project1-1080.png";
import project2 from "../assets/project/project2-1080.png";
import project3 from "../assets/project/project3-1080.png";
import project4 from "../assets/project/project4-1080.png";

const projects = [
  { link:"https://github.com/3Melody",name: "B-CINEMA", image: project1 },
  { link:"https://github.com/3Melody/UPPOP_VUE",name: "UP-POP", image: project2 },
  { link:"https://my-jib-clone.onrender.com/",name: "JIB Clone", image: project3 },
  { link:"https://my-momo-clone.onrender.com/",name: "MOMO Clone", image: project4 },
];

const Project = () => {
  const [currentProjectName, setCurrentProjectName] = useState(projects[0].name);

  return (
    <div data-aos="fade-up" className="project section relative pt-20">
      <div className='bg-fled'></div>
      <div className='white name-project font-bold text-4xl xl:text-5xl text-center'>
        <div>NAME PROJECT</div>
        <div className="project-name">{currentProjectName}</div>
      </div>

      <div className="container white mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={(swiper) => {
            const activeIndex = swiper.realIndex; // Use realIndex for the current slide
            setCurrentProjectName(projects[activeIndex].name);
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
             <a href={project.link} target="_blank">
                <div className="box-project">{project.name}</div>
                <div className="mt-10 project-img">
                  <img src={project.image} className="w-full object-cover" alt=""/>
                </div>
             </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
