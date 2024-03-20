import React from "react";
import downarrow from "../assets/svg/downarrow.svg";

const FAQ = () => {
  return (
    <div className=" max-w-7xl mx-auto mt-20 mb-36">
      <div className="flex flex-col items-center">
        {/* text  */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold mb-10">
            Have questions? We're here to help!
          </h2>
          <p className="text-[#444444] text-center">
            Our customers frequently ask these questions about our fixed deposit
          </p>
        </div>

        {/* faq */}
        <div className="px-20 w-full  ">
          <div className="flex justify-between mb-8 pb-4 border-b border-black">
            <p className="font-semibold">
              How safe is my investment with CredPal?
            </p>
            <div>
              <img src={downarrow} alt="" srcset="" />
            </div>
          </div>
          <div className="flex justify-between mb-8  pb-4 border-b border-black">
            <p className="font-semibold">
              How safe is my investment with CredPal?
            </p>
            <div>
              <img src={downarrow} alt="" srcset="" />
            </div>
          </div>
          <div className="flex justify-between mb-8 n pb-4 border-b border-black">
            <p className="font-semibold">
              How safe is my investment with CredPal?
            </p>
            <div>
              <img src={downarrow} alt="" srcset="" />
            </div>
          </div>
          <div className="flex justify-between mb-8  pb-4 border-b border-black">
            <p className="font-semibold">
              How safe is my investment with CredPal?
            </p>
            <div>
              <img src={downarrow} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
