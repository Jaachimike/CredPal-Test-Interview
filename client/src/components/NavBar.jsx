import React from "react";
import Logo from "../assets/svg/Vector.svg";

const NavBar = () => {
  return (
    <div className="bg-[#FBFBFF] pt-14">
      <div className=" max-w-7xl mx-auto">
        <div className="flex justify-between">
          {/* logo and menu  */}
          <div className="flex space-x-10 items-center">
            <img src={Logo} alt="Cred Pal Logo" />
            <nav>
              <ul className="flex space-x-10 ">
                <li>Personal</li>
                <li>Retail</li>
                <li>Business</li>
              </ul>
            </nav>
          </div>

          {/* faq , signin and get app  */}
          <div className="flex space-x-10 items-center">
            {/* faq and signin link  */}
            <ul className="flex space-x-10">
              <li>FAQs</li>
              <li>Sign In</li>
            </ul>
            {/* get app button  */}
            <div className="bg-[#274FED] font-semibold px-8 py-3 text-white rounded-md">
              <button>Get App</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
