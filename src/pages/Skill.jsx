import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Skill = () => {
  return (
    <div>
      <div className="section skill mt-20">
        <div className="w-full">
          <div className="container  mx-auto">
            <div className="xl:hidden">
              <div className="color-primary text-xl flex justify-center">
                skill
              </div>
              <div className="white text-2xl mt-2 flex justify-center">
                Top List Skill
              </div>
            </div>
            <div className="mt-10">
              <div className="xl:flex">
                <div className="xl:w-2/3">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                      500: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div  data-aos="zoom-in-down" data-aos-delay="100"  className="box-skill"><FontAwesomeIcon icon="fa-brands fa-html5" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-down" data-aos-delay="200" className="box-skill"><FontAwesomeIcon icon="fa-brands fa-css3-alt" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-down" data-aos-delay="300" className="box-skill"><FontAwesomeIcon icon="fa-brands fa-sass" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-down" data-aos-delay="400" className="box-skill"><FontAwesomeIcon icon="fa-brands fa-bootstrap" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-down" data-aos-delay="500" className="box-skill" style={{fontSize: "30px"}}>Tailwind</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-down" data-aos-delay="600" className="box-skill"><FontAwesomeIcon icon="fa-brands fa-vuejs" /></div>
                    </SwiperSlide>
                    ...
                  </Swiper>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                      500: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div data-aos="zoom-in-up" data-aos-delay="100" className="box-skill"><FontAwesomeIcon icon="fa-brands fa-figma" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-up" data-aos-delay="200" className="box-skill"><FontAwesomeIcon icon="fa-brands fa-js" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-up" data-aos-delay="300" className="box-skill"><FontAwesomeIcon icon="fa-brands fa-git" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div data-aos="zoom-in-up" data-aos-delay="400" className="box-skill"><FontAwesomeIcon icon="fa-brands fa-react" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-up" data-aos-delay="500" className="box-skill " style={{fontSize:"40px"}}>Nextjs</div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div data-aos="zoom-in-up" data-aos-delay="600" className="box-skill" style={{fontSize:"20px"}}>Photoshop</div>
                    </SwiperSlide>
                    ...
                  </Swiper>
                </div>

                <div  className="detail mt-10 xl:hidden ">
                  Portfolio website for internship applications, showcasing
                  UX/UI design and frontend development expertise, providing
                  exceptional user experiences. Welcome to explore my work!
                </div>

                <div data-aos="fade-up" className="hidden xl:block xl:w-1/2 xl:px-5 ">
                  <div className="color-primary text-xl flex justify-center xl:justify-start">
                    skill
                  </div>
                  <div className="white text-2xl mt-2 flex justify-center xl:justify-start">
                    Top List Skill
                  </div>
                  <div className="white text-2xl mt-2 flex justify-center xl:justify-start">
                    <div className="detail mt-10 xl:text-base">
                      Portfolio website for internship applications, showcasing
                      UX/UI design and frontend development expertise, providing
                      exceptional user experiences. Welcome to explore my work!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex white animation mt-20 py-3 skill">
          <div class="sliding-container">
        <div data-aos="fade-left" data-aos-duration="3000" class="sliding-text">
        HTML === CSS === SCSS === Bootstrap === Tailwind === Javascript === React === VueJS === NodeJs === Java === Firebase === Git === Github === VSCode === Figma  === Adobe Photoshop === &nbsp; HTML === CSS === SCSS === Bootstrap === Tailwind === Javascript === React === VueJS === NodeJs === Java === Firebase === Git === Github === VSCode === Figma  === Adobe Photoshop ===
        </div>
    </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Skill;
