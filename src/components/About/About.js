import React from "react";
// import "../../../public/hasin_DP.jpg";
const About = () => {
  return (
    <div className="my-6 lg:my-14">
      <img
        className="w-52 rounded-full mx-auto"
        src="hasin_DP.jpg"
        alt="My profile Pic"
      />
      <br />
      <h1 className="text-2xl font-bold"> Hasin Sadique </h1>
      <br />
      <p className="text-justify w-3/4 lg:w-1/2  mx-auto">
        <span className="font-bold"> Goal: </span>
        As a developer, the aim is to build practical applications that will be
        100% successful and usefull to the mankind. To achieve this, specific
        goals need to be set, which include: Enhancing your networking skills,
        knowledge of latest technologies, etc.
      </p>
    </div>
  );
};

export default About;
