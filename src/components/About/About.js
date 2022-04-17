import React from "react";

const About = () => {
  return (
    <div className="my-6 lg:my-14">
      <img
        className="w-52 rounded-full mx-auto"
        src="https://scontent.fdac13-1.fna.fbcdn.net/v/t1.6435-9/123073024_3203654116399913_8041669527268423252_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE1cGbJeYiBWbaSsvBrwwGlETMfS7XYs-sRMx9Ltdiz6_cZNjx6_8Cu31Y0J-Jn4bJp8Zzx4WTW_13ddLD6orCu&_nc_ohc=UDmXSor43AoAX8e-7dH&_nc_ht=scontent.fdac13-1.fna&oh=00_AT-Abd-pRqg2nutRr_0Xdt-NqzWcO0H5brC1M39kqfPl6g&oe=628047ED"
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
