import React from "react";

function HeroSection() {
  return (
    <div className="h-[86vh] flex p-32  items-center space-x-8">
      <div className="flex-1 flex flex-col space-y-16 items-start ">
        <h1 className="text-6xl  ">
          <span className="font-light">Great</span> <span className="text-green-500 font-medium">products</span> <span className="font-light">are</span> built by
          great <span className="font-semibold text-[#406AFF]">teams</span>
        </h1>
        <h4 className="text-lg text-gray-500">
          We help build and manage a team of world class developers to bring
          your vision to life
        </h4>
        <button className="btn px-8 py-3 text-lg">let's get Started!</button>
      </div>
      <img
        src="/images/hero-wrapper.png"
        alt=""
        className="h-auto w-auto flex-1"
      />
    </div>
  );
}

export default HeroSection;
