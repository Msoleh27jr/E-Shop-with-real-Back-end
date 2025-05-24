import React from "react";
import phone from "./img/icons-phone.png";
import email from "./img/icons-mail.png";

const Contact = () => {
  return (
    <div className="md:max-w-[1700px] w-[95%] m-auto md:h-[750px] flex flex-col justify-center gap-10 md:my-0 my-10">
      <span className="text-[18px] text-gray-500">
        Home / <span className="text-black font-bold">Cantact</span>
      </span>
      <section className="md:h-[500px] flex md:flex-row flex-col justify-between items-center md:gap-0 gap-10">
        <div className="md:w-[30%] w-[95%] shadow-2xl md:gap-0 gap-5 p-10 rounded-xl flex flex-col justify-evenly md:h-[500px]">
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <img src={phone} alt="" />
            Call To Us
          </h2>
          <p className="text-[18px]">We are available 24/7, 7 days a week.</p>
          <p className="text-[18px]">Phone: +8801611112222</p>
          <hr className="border-2" />
          <h2 className="flex items-center gap-3 text-2xl font-bold">
            <img src={email} alt="" />
            Write To US
          </h2>
          <p className="text-[18px]">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-[18px]">Emails: customer@exclusive.com</p>
          <p className="text-[18px]">Emails: support@exclusive.com</p>
        </div>
        <div className="md:w-[67%] shadow-2xl w-[95%] p-10 rounded-xl flex md:flex-row flex-col md:gap-0 gap-5 items-end justify-between md:flex-wrap md:h-[500px]">
          <input
            type="text"
            placeholder="Name"
            className="border-3 p-2 rounded-[5px] w-[100%] md:w-[32%]"
          />
          <input
            type="text"
            placeholder="Email"
            className="border-3 p-2 rounded-[5px] w-[100%] md:w-[32%]"
          />
          <input
            type="number"
            placeholder="Phone"
            className="border-3 p-2 rounded-[5px] w-[100%] md:w-[32%]"
          />
          <textarea
            placeholder="Your Massage"
            className="border-3 w-[100%] h-[70%] p-5 resize-none"
          ></textarea>
          <button className="bg-[#DB4444] text-white py-2 px-5 rounded-[5px] text-[18px]">Send Massage</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
