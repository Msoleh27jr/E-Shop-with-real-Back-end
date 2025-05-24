import React from "react";
import hero from "./img/Side Image.png";
import firstImg from "./img/Services (3).png";
import firstImg2 from "./img/Services (4).png";
import firstImg3 from "./img/Services (5).png";
import worker from "./img/Frame 874.png";
import worker2 from "./img/Frame 875.png";
import worker3 from "./img/Frame 876.png";
import social from "./img/Frame 881.png";
import deliver from '../home/img/Services (2).png'
import servers from '../home/img/Services.png'
import garantia from '../home/img/Services (1).png'

const About = () => {
  return (
    <div className="md:max-w-[1700px] w-[90%] m-auto my-10">
      <span className="text-[18px] text-gray-500">
        Home
        <span className="text-black font-bold"> / About</span>
      </span>
      <section className="flex md:flex-row flex-col justify-between my-10 md:gap-0 gap-5">
        <aside className="md:w-[40%]">
          <h1 className="md:text-[60px] text-4xl font-bold">Our Story</h1>
          <p className="text-xl">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. <br /> <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </aside>
        <img className="md:w-[40%]" src={hero} alt="" />
      </section>
      <section className="md:my-40 my-10 flex md:flex-row flex-col md:gap-0 gap-5 justify-between">
        <div className="md:w-[20%] h-[280px] border-2 rounded-[5px] hover:bg-[#DB4444] flex flex-col items-center justify-center gap-3">
          <img src={firstImg} alt="" />
          <h2 className="text-3xl font-bold">10.5k</h2>
          <p className="text-[16px]">Sallers active our site</p>
        </div>
        <div className="md:w-[20%] h-[280px] border-2 rounded-[5px] hover:bg-[#DB4444] flex flex-col items-center justify-center gap-3">
          <img src={firstImg3} alt="" />
          <h2 className="text-3xl font-bold">33k</h2>
          <p className="text-[16px]">Mopnthly Produduct Sale</p>
        </div>
        <div className="md:w-[20%] h-[280px] border-2 rounded-[5px] hover:bg-[#DB4444] flex flex-col items-center justify-center gap-3">
          <img src={firstImg2} alt="" />
          <h2 className="text-3xl font-bold">45.5k</h2>
          <p className="text-[16px]">Customer active in our site</p>
        </div>
        <div className="md:w-[20%] h-[280px] border-2 rounded-[5px] hover:bg-[#DB4444] flex flex-col items-center justify-center gap-3">
          <img src={firstImg3} alt="" />
          <h2 className="text-3xl font-bold">25k</h2>
          <p className="text-[16px]">Anual gross sale in our site</p>
        </div>
      </section>
      <section className="flex md:flex-row flex-col md:gap-0 gap-10 justify-between">
        <div className="md:w-[26%] flex flex-col items-start gap-5">
          <img className="w-[100%]" src={worker} alt="" />
          <h2 className="md:text-5xl text-3xl font-bold">Tom Cruise</h2>
          <p className="text-2xl">Founder & Chairman</p>
          <img src={social} alt="" />
        </div>
        <div className="md:w-[26%] flex flex-col items-start gap-5">
          <img className="w-[100%]" src={worker2} alt="" />
          <h2 className="md:text-5xl text-3xl font-bold">Emma Watson</h2>
          <p className="text-2xl">Managing Director</p>
          <img src={social} alt="" />
        </div>
        <div className="md:w-[26%] flex flex-col items-start gap-5">
          <img className="w-[100%]" src={worker3} alt="" />
          <h2 className="md:text-5xl text-3xl font-bold">Will Smith</h2>
          <p className="text-2xl">Product Designer</p>
          <img src={social} alt="" />
        </div>
      </section>
      <section className="max-w-[1600px] m-auto my-20 flex md:justify-evenly md:flex-row flex-col items-center">
        <div className="w-[300px] h-[300px] flex flex-col items-center justify-center gap-2">
          <img src={deliver} alt="" />
          <h2 className="text-[20px] font-bold">FREE AND FAST DELIVERY</h2>
          <p className="text-[15px]">Free delivery for all orders over $140</p>
        </div>
        <div className="w-[300px] h-[300px] flex flex-col items-center justify-center gap-2">
          <img src={servers} alt="" />
          <h2 className="text-[20px] font-bold">24/7 CUSTOMER SERVICE</h2>
          <p className="text-[15px]">Friendly 24/7 customer support</p>
        </div>
        <div className="w-[300px] h-[300px] flex flex-col items-center justify-center gap-2">
          <img src={garantia} alt="" />
          <h2 className="text-[20px] font-bold">MONEY BACK GUARANTEE</h2>
          <p className="text-[15px]">We reurn money within 30 days</p>
        </div>
      </section>
    </div>
  );
};

export default About;
