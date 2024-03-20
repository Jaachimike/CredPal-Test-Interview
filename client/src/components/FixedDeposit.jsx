import React from "react";
import highinterest from "../assets/svg/highinterest.svg";
import cbn from "../assets/svg/cbn.svg";
import ndic from "../assets/svg/ndic.svg";
import withdrawal from "../assets/svg/withdrawal.svg";

const FixedDeposit = () => {
  return (
    <div className=" max-w-7xl mx-auto mt-40 mb">
      <div className="flex flex-col items-center">
        {/* text  */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold mb-10">
            Why Our Fixed Deposit Investment?
          </h2>
          <p className="text-[#444444] text-center">
            Let your money work for you. Fix your money for specific periods and
            get high interest <br /> rates with our secure fixed deposits.
          </p>
        </div>
        {/* images */}
        <div className="flex justify-around w-full mb-28">
          {/* high interest  */}
          <div className="flex flex-col space-y-10">
            <img src={highinterest} alt="" className="h-24" />
            <p>18% Hight Interest Rate</p>
          </div>
          {/*cbn  */}
          <div className="flex flex-col space-y-10">
            <img src={cbn} alt="" className="h-24" />
            <p>Regulated by CBN</p>
          </div>
          {/*ndic  */}
          <div className="flex flex-col space-y-10">
            <img src={ndic} alt="" className="h-24" />
            <p>Insured by the NDIC</p>
          </div>
          {/* withdrawal  */}
          <div className="flex flex-col space-y-10">
            <img src={withdrawal} alt="" className="h-24" />
            <p>Instant Withdrawal</p>
          </div>
        </div>
        {/* button  */}
        <div className="bg-[#274FED] font-semibold mb-16 px-8 py-5 w-fit text-white rounded-md">
          <button>Enjoy 18% investment returns</button>
        </div>
      </div>
    </div>
  );
};

export default FixedDeposit;
