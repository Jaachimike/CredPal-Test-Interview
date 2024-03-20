import React from "react";
import heroImage from "../assets/png/image 67.png";

const HeroSection = () => {
  return (
    <div className="bg-[#FBFBFF] pt-14">
      <div className=" max-w-7xl mx-auto">
        <div className="flex justify-between">
          {/* hero write-up  */}
          <div className="flex flex-col mt-12">
            <h2 className="text-7xl font-bold mb-16">
              <span className=" text-[#2D56FD]">Enjoy</span> High Yield <br />
              Fixed Deposit <br /> Investment
            </h2>

            <div className="bg-[#274FED] font-semibold px-8 py-5 w-fit text-white rounded-md">
              <button>Enjoy 18% investment returns</button>
            </div>
          </div>

          {/* hero image */}
          <div>
            <img src={heroImage} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
