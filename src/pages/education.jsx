import React from "react";

const Education = () => {
  return (
    <div className="education section">
      <div className="container mx-auto">
        <div className="white flex justify-center my-10 font-bold text-2xl">Education</div>
        <div className="flex xl:hidden w-full">
          <div className="line-edu"></div>
          <div className="flex flex-col justify-around">
            <div className="flex items-center">
              <div className="line-left flex"></div>
              <div className="box-edu">
                Maesod Technical College
                <div className="detail">Business Computer</div>
                <div className="detail">GPA : 3.56</div>
                <div className="detail">2019 - 2022</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="line-left flex"></div>
              <div className="box-edu">
                University of Phayao
                <div className="detail">Software Engineering</div>
                <div className="detail">GPA : 3.46</div>
                <div className="detail">2022 - Now</div>
              </div>
            </div>
          </div>
        </div>
       <div className="w-full">
            <div className="hidden  xl:flex ">
              <div className="flex mx-auto">
              <div className="flex items-center xl:mb-40  ">
                  <div className="box-edu edu-1  ">
                    Maesod Technical College
                    <div className="detail">Business Computer</div>
                    <div className="detail">GPA : 3.56</div>
                    <div className="detail">2019 - 2022</div>
                  </div>
                  <div className="line-left  flex"></div>
                </div>
                <div className="line-edu "></div>
                <div className="flex items-center xl:mt-40">
                  <div className="line-left flex"></div>
                  <div className="box-edu ">
                  University of Phayao
                <div className="detail">Software Engineering</div>
                <div className="detail">GPA : 3.46</div>
                <div className="detail">2022 - Now</div>
                  </div>
                </div>
              </div>
             
            </div>
       </div>
      </div>
    </div>
  );
};

export default Education;
