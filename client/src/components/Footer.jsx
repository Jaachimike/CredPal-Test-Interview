import React from "react";
import logo from "../assets/svg/Layer x0020 1.svg";
import googlePlay from "../assets/svg/Subtract.svg";
import appStore from "../assets/svg/Subtract1.svg";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import linkedin from "../assets/svg/linkedin.svg";
import youtube from "../assets/svg/youtube.svg";
import uparrow from "../assets/svg/uparrow.svg";
import divider from "../assets/svg/LineDivider.svg";

const Footer = () => {
  return (
    <div className="bg-[#101010] text-[#FFFFFF] px-32">
      {/* main footer  */}
      <div className="flex justify-between py-24">
        {/* footer logo and write up */}
        <div>
          <div className="mb-6">
            <img src={logo} alt="CredPal Logo" />
          </div>
          <p className="text-[#878787] mb-5">
            CredPal is a revolutionary credit solution geared <br /> towards
            providing seamless credit access for <br /> businesses and
            individuals across developing <br /> economies.
          </p>
          <div className="flex space-x-2 ">
            <img src={googlePlay} alt="" />
            <img src={appStore} alt="" />
          </div>
        </div>
        {/* footer links  */}
        <div className="flex space-x-16 justify-between">
          {/* products */}
          <div>
            <h3 className="font-semibold mb-8">Products</h3>
            <ul className="text-[#878787]">
              <li className="mb-5">Personal Credit Cards</li>
              <li className="mb-5">Business Credit Cards</li>
              <li>Expense Magagement</li>
            </ul>
          </div>
          {/* legal */}
          <div>
            <h3 className="font-semibold mb-8">Legal</h3>
            <ul className="text-[#878787]">
              <li className="mb-5">Merchant’s Terms of Service</li>
              <li className="mb-5">Customer’s Terms of Use</li>
              <li>Privacy policies</li>
            </ul>
          </div>
          {/* support */}
          <div>
            <h3 className="font-semibold mb-8">Support</h3>
            <ul className="text-[#878787]">
              <li className="mb-5">FAQs</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        {/* social icons */}
        <div>
          <div className="mb-8">
            <h3 className="font-semibold mb-8">Connect with us</h3>
            <div className="flex space-x-2">
              <img src={facebook} alt="facebook logo" />
              <img src={twitter} alt="twitter logo" />
              <img src={instagram} alt="instagram logo" />
              <img src={linkedin} alt="linkedin logo" />
              <img src={youtube} alt="youtube logo" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-8">Contact</h3>
            <p className="text-[#878787]">hello@credpal.com</p>
          </div>
        </div>
      </div>

      {/* divider */}
      {/* <div className="mb-6">
        <img src={divider} alt="" srcset="" />
      </div> */}
      {/* sub footer */}
      <div className="flex justify-between pb-20 pt-10 border-t border-[#878787]">
        <p className="text-[#878787]">Copyright © 2020 • All Rights Reserved</p>
        <p className="text-[#878787]">
          <span>
            <img src={uparrow} className="inline mr-2" />
          </span>
          Back To Top
        </p>
      </div>
    </div>
  );
};

export default Footer;
