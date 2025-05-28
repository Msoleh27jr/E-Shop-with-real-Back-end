import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Category,
  GetPraducData,
  postProduct,
} from "../../features/getProducts/GetProduct";
import hero from "./img/hero_endframe__cvklg0xk3w6e_large 2.png";
import appleIcon from "./img/1200px-Apple_gray_logo 1.png";
import arrowRight from "./img/icons arrow-right.png";
import searchBtn from "./img/Component 2.png";
import stars from "./img/Frame 566.png";
import Speaker from "./img/Frame 694.png";
import { Link } from "react-router";
import Play5 from "./img/playstation.png";
import woman from "./img/attractive-woman-wearing-hat-posing-black-background 1.png";
import porfium from "./img/Frame 707.png";
import dukhi from "./img/Frame 706.png";
import deliver from "./img/Services (2).png";
import servers from "./img/Services.png";
import garantia from "./img/Services (1).png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

import { API } from "../../features/getProducts/GetProduct";

// import required modules
import Box from "../../shared/boxsForFirstPage/Box";
import ProductBoxs from "../../shared/productBox/ProductBoxs";
const Home = () => {
  const data = useSelector((state) => state.todolist.data);
  const categories = useSelector((stars) => stars.todolist.categories);
  console.log(categories);

  const dispatch = useDispatch();
  console.log(data);
  const cartToken = localStorage.getItem("accaunt");

  useEffect(() => {
    dispatch(GetPraducData());
    dispatch(Category());
  }, [dispatch]);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = new Date("2025-05-30T23:59:59").getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days: days > 0 ? days : 0,
      hours: hours > 0 ? hours : 0,
      minutes: minutes > 0 ? minutes : 0,
      seconds: seconds > 0 ? seconds : 0,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* ///////////////////////////////// first section */}
      <section className="max-w-[1700px] m-auto my-7 md:flex-row flex-col flex items-center justify-between">
        <aside className="md:border-r-2 w-[90%] md:w-[15%]">
          <div className="w-[95%] border-1 px-5 border-black py-2 flex items-center justify-between md:hidden">
            <input type="text" placeholder="Search" className="outline-0" />
            <img src={searchBtn} alt="" />
          </div>
          <div className="flex md:flex-col flex-wrap items-start gap-5 text-[20px] md:my-0 my-5">
            {categories?.map((e, elem) => {
              return (
                <Link key={elem} to={"product"}>
                  <button className="bg-[#F5F5F5] py-2 px-3 rounded-[5px] md:py-0 md:bg-transparent">
                    {e.categoryName}
                  </button>
                </Link>
              );
            })}
          </div>
        </aside>
        <aside className="md:w-[80%] bg-black">
          <div className="md:h-[450px] flex md:flex-row flex-col md:items-center justify-evenly">
            <aside className="md:px-0 px-5 md:py-0 py-8">
              <h2 className="text-white flex items-center gap-5 text-[18px]">
                <img src={appleIcon} alt="" />
                iPhone 14 Series
              </h2>
              <h1 className="md:text-[70px] text-[50px] text-white md:my-0 my-3 md:font-bold">
                Up to 10% <br /> off Voucher
              </h1>
              <button className="text-white flex gap-3 items-center md:text-2xl border-b-1 py-2">
                Shop Now
                <img src={arrowRight} alt="" />
              </button>
            </aside>
            <img src={hero} alt="" />
          </div>
        </aside>
      </section>
      {/* /////////////////////////// end first */}
      {/* ////////////////////////// second section */}
      <section className="md:max-w-[1700px] m-auto my-20 w-[90%]">
        <h2 className="text-red-600 font-bold text-[20px] border-l-10 border-red-600 px-2">
          Today’s
        </h2>
        <div className="flex md:items-center md:gap-20 md:flex-row flex-col m-auto">
          <h2 className="text-4xl font-bold py-5">Flash Sales</h2>
          <div className="flex items-center gap-5">
            <div className="text-start">
              <h2 className="text-[15px] font-bold">Days</h2>
              <h2 className="text-4xl font-bold">
                {timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days}
              </h2>
            </div>
            <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
            <div className="text-start">
              <h2 className="text-[15px] font-bold">Hours</h2>
              <h2 className="text-4xl font-bold">
                {timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours}
              </h2>
            </div>
            <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
            <div className="text-start">
              <h2 className="text-[15px] font-bold">Minutes</h2>
              <h2 className="text-4xl font-bold">
                {timeLeft.minutes <= 9
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes}
              </h2>
            </div>
            <h2 className="text-3xl font-bold text-[#E07575]">:</h2>
            <div className="text-start">
              <h2 className="text-[15px] font-bold">Seconds</h2>
              <h2 className="text-4xl font-bold">
                {timeLeft.seconds <= 9
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds}
              </h2>
            </div>
          </div>
        </div>
        {/* /////////////// swiper */}
        <ProductBoxs />
        <div className="flex items-center md:justify-center">
          <button className="bg-[#DB4444] text-white py-3 px-8 font-bold rounded-[5px]">
            <Link to={"product"}>View All Products</Link>
          </button>
        </div>
      </section>
      {/* //////////////////  end section swiper and product*/}
      {/* ////////////////////// second section */}
      <section className="md:max-w-[1700px] m-auto border-t-2 border-b-2 py-10 w-[90%]">
        <h2 className="text-red-600 font-bold text-[20px] border-l-10 border-red-600 px-2">
          Categories
        </h2>
        <div className="flex md:items-center md:gap-20 md:flex-row flex-col m-auto">
          <h2 className="text-4xl font-bold py-5">Browse By Category</h2>
        </div>
        <div className="flex items-center justify-between my-10 h-[300px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {categories?.map((e) => {
              return (
                <SwiperSlide
                  key={e.id}
                  style={{
                    width: "230px",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                  }}
                >
                  <Box
                    img={`${API}/images/${e.categoryImage}`}
                    text={e.categoryName}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* //////////////////////// end second section*/}
      {/* //////////////////// third section */}
      <section className="md:max-w-[1700px] m-auto my-20 w-[90%]">
        <h2 className="text-red-600 font-bold text-[20px] border-l-10 border-red-600 px-2">
          This Month
        </h2>
        <div className="flex md:items-center md:gap-20 md:flex-row flex-col m-auto md:justify-between">
          <h2 className="text-4xl font-bold py-5">Best Selling Products</h2>
          <button className="bg-[#DB4444] text-white py-3 px-8 font-bold rounded-[5px]">
            <Link to={"product"}>View All</Link>
          </button>
        </div>
        {/* /////////////// swiper */}
        <ProductBoxs />
      </section>
      <div className="bg-black md:h-[500px] flex items-center md:flex-row flex-col max-w-[1700px] m-auto justify-evenly md:py-0 py-7 md:gap-[250px]">
        <aside className="flex flex-col items-start gap-5">
          <h3 className="text-[#00FF66] font-bold text-[20px]">Categories</h3>
          <h2 className="md:text-6xl text-4xl text-white">
            Enhance Your <br /> Music Experience
          </h2>
          <div className="flex gap-3">
            <div className="bg-white w-[70px] h-[70px] rounded-[50%] flex flex-col text-center justify-center font-bold text-[13px]">
              {timeLeft.days <= 9 ? `0${timeLeft.days}` : timeLeft.days}
              <h3>Days</h3>
            </div>
            <div className="bg-white w-[70px] h-[70px] rounded-[50%] flex flex-col text-center justify-center font-bold text-[13px]">
              {timeLeft.hours <= 9 ? `0${timeLeft.hours}` : timeLeft.hours}
              <h3>Hours</h3>
            </div>
            <div className="bg-white w-[70px] h-[70px] rounded-[50%] flex flex-col text-center justify-center font-bold text-[13px]">
              {timeLeft.minutes <= 9
                ? `0${timeLeft.minutes}`
                : timeLeft.minutes}
              <h3>Minutes</h3>
            </div>
            <div className="bg-white w-[70px] h-[70px] rounded-[50%] flex flex-col text-center justify-center font-bold text-[13px]">
              {timeLeft.seconds <= 9
                ? `0${timeLeft.seconds}`
                : timeLeft.seconds}
              <h3>Seconds</h3>
            </div>
          </div>
          <button className="bg-[#00FF66] text-[16px] py-2.5 font-bold px-7 rounded-[5px]">
            Buy Now!
          </button>
        </aside>
        <img className="" src={Speaker} alt="" />
      </div>
      {/* //////////////////////////////////// fourth section */}
      <section className="max-w-[1700px] m-auto my-20">
        <h2 className="text-red-600 font-bold text-[20px] border-l-10 border-red-600 px-2 md:w-[100%] w-[90%] m-auto">
          Our Products
        </h2>
        <div className="flex md:w-[100%] w-[90%] md:items-center md:gap-20 md:flex-row flex-col m-auto">
          <h2 className="text-4xl font-bold py-5">Explore Our Products</h2>
        </div>
        <div className="flex md:gap-[60px] overflow-x-auto whitespace-nowrap md:max-w-[1700px] m-auto md:w-[100%] w-[90%] px-2 md:flex-wrap">
          {data.map((e) => {
            return (
              <div
                key={e.id}
                className="md:w-[350px] w-[90%] h-[420px] flex flex-col md:gap-2 md:mx-0 mx-5 relative shrink-0"
              >
                <img
                  className="w-full h-[300px]"
                  src={`${API}/images/${e.image}`}
                  alt=""
                />
                <h1 className="text-2xl">{e.productName}</h1>
                <div className="flex items-center gap-5">
                  <h2 className="text-red-600 text-[16px]">
                    ${e.discountPrice}
                  </h2>
                  <h2 className="text-gray-500 text-[16px] line-through">
                    {" "}
                    ${e.price}
                  </h2>
                </div>
                <div>
                  <img className="" src={stars} alt="" />
                </div>
                <div className="w-[100%] absolute h-[300px] top-0 flex group items-end">
                  <div className="absolute top-0 right-0 bg-white py-1 px-1 flex flex-col gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 active:text-red-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 active:text-blue-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  {cartToken == "" || cartToken == null ? (
                    <button className="w-[100%] bg-black text-white hidden group-hover:block py-2">
                      <Link to={"signup"}>Add To Cart</Link>
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(postProduct(e.id))}
                      className="w-[100%] bg-black text-white hidden group-hover:block py-2"
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center md:justify-center md:w-[100%] w-[90%] m-auto">
          <button className="bg-[#DB4444] text-white py-3 px-8 font-bold rounded-[5px] my-7">
            <Link to={"product"}>View All Products</Link>
          </button>
        </div>
      </section>
      <section className="md:max-w-[1700px] m-auto">
        <h2 className="text-red-600 font-bold text-[20px] border-l-10 border-red-600 px-2">
          Featured
        </h2>
        <div className="flex md:items-center md:gap-20 md:flex-row flex-col m-auto">
          <h2 className="text-4xl font-bold py-5">New Arrival</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-[40%_30%_30%] grid-cols-1 md:grid-rows-2">
          <div
            className="w-[100%] md:h-[818px] h-[400px] md:row-start-1 md:row-end-3 flex flex-col items-start justify-end p-[30px] bg-center gap-0 bg-no-repeat md:gap-3 bg-black"
            style={{
              backgroundImage: `url(${Play5})`,
            }}
          >
            <h2 className="text-white  text-3xl">PlayStation 5</h2>
            <p className="text-[17px]  text-[#FAFAFA]">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <button className="text-[17px] my-2 border-b-1 text-white">
              Shop Now
            </button>
          </div>
          <div
            className="bg-black md:gap-3 gap-0 md:col-start-2 h-[400px] md:col-end-4 bg-no-repeat bg-right flex flex-col items-start justify-end p-[30px]"
            style={{
              backgroundImage: `url(${woman})`,
            }}
          >
            <h2 className="text-white text-3xl">Women’s Collections</h2>
            <p className="text-[17px]  text-[#FAFAFA]">
              Featured woman collections that <br /> give you another vibe..
            </p>
            <button className="text-[17px] my-2 border-b-1 text-white">
              Shop Now
            </button>
          </div>
          <div
            className="md:row-start-2 md:gap-3 gap-0 md:row-end-2 h-[400px] bg-black bg-no-repeat bg-center flex flex-col items-start justify-end p-[30px]"
            style={{
              backgroundImage: `url(${porfium})`,
            }}
          >
            <h2 className="text-white  text-3xl">Speakers</h2>
            <p className="text-[17px]  text-[#FAFAFA]">
              Amazon wireless speakers
            </p>
            <button className="text-[17px] my-2 border-b-1 text-white">
              Shop Now
            </button>
          </div>
          <div
            className="md:row-start-2 md:gap-3 gap-0 md:row-end-2 bg-black bg-no-repeat h-[400px] bg-center flex flex-col items-start justify-end p-[30px]"
            style={{
              backgroundImage: `url(${dukhi})`,
            }}
          >
            <h2 className="text-white  text-3xl">Perfume</h2>
            <p className="text-[17px]  text-[#FAFAFA]">GUCCI INTENSE OUD EDP</p>
            <button className="text-[17px] my-2 border-b-1 text-white">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      {/* ////////////////////// before the footer */}
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

export default Home;
