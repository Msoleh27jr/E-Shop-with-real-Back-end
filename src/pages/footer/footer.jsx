import React from "react";
import social from './img/Frame 741.png'

const Footer = () => {
  return (
    <div className="max-w-[1920px] m-auto bg-black py-10">
      <footer className="max-w-[1700px] m-auto">
        {/* /////// */}
        <div className="flex md:justify-between md:gap-0 gap-7 md:flex-row flex-col md:items-start items-center">
          <div className="md:w-[15%] w-[90%] flex flex-col gap-3">
            <h2 className="text-3xl text-white font-bold">Exclusive</h2>
            <h3 className="text-2xl text-white">Subscribe</h3>
            <p className="text-[18px] text-[#FAFAFA]">
              Get 10% off your first order
            </p>
            <div className="border-1 flex py-2 px-3 justify-between">
              <input
                className="outline-0 placeholder:text-gray-500 text-white"
                type="text"
                placeholder="Enter Your Email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-[15%] w-[90%] flex flex-col gap-3 items-start">
            <h2 className="text-3xl text-white">Support</h2>
            <p className="text-[18px] text-white">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className="text-[18px] text-white">exclusive@gmail.com</p>
            <p className="text-[18px] text-white">+88015-88888-9999</p>
          </div>
          <div className="md:w-[15%] w-[90%] flex justify-between">
            <div className="flex flex-col gap-3 items-start">
            <h2 className="text-3xl text-white">Account</h2>
            <p className="text-[18px] text-white">My Account</p>
            <p className="text-[18px] text-white">Cart</p>
            <p className="text-[18px] text-white">Wishlist</p>
            <p className="text-[18px] text-white">Shop</p>
            </div>
             <div className="flex flex-col gap-3 items-start md:hidden">
            <h2 className="text-3xl text-white">Quick Link</h2>
            <p className="text-[18px] text-white">Privacy Policy</p>
            <p className="text-[18px] text-white">Terms Of Use</p>
            <p className="text-[18px] text-white">FAQ</p>
            <p className="text-[18px] text-white">Contact</p>
          </div>
          </div>
          <div className="w-[15%] hidden md:flex flex-col gap-3 items-start">
            <h2 className="text-3xl text-white">Quick Link</h2>
            <p className="text-[18px] text-white">Privacy Policy</p>
            <p className="text-[18px] text-white">Terms Of Use</p>
            <p className="text-[18px] text-white">FAQ</p>
            <p className="text-[18px] text-white">Contact</p>
          </div>
          <div className="md:w-[15%] w-[90%] flex flex-col gap-3 items-start">
            <h2 className="text-3xl text-white">Social</h2>
            <img src={social} alt="" />
          </div>
        </div>
        {/* //////////// */}
      </footer>
        <hr className="my-7 border-gray-800"/>
        <p className="text-gray-500 text-[16px] text-center">© Copyright Rimel 2022. All right reserved</p>
    </div>
  );
};

export default Footer;
