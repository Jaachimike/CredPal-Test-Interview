import React from "react";

const LearnMore = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="bg-[#F9FAFB] px-20 py-30">
          {/* text  */}
          <div className="mb-20 mt-20">
            <h2 className="text-5xl font-bold mb-10">
              Have questions? We're here to help!
            </h2>
            <p className="text-[#444444] text-center">
              Our customers frequently ask these questions about our fixed
              deposit
            </p>
          </div>
          {/* button  */}
          <div className="bg-[#274FED] font-semibold mb-16 px-8 py-5 w-fit text-white rounded-md">
            <button>Enjoy 18% investment returns</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
