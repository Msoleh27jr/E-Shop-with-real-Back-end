import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import stars from "../../pages/home/img/Frame 566.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPraducData,
  postProduct,
  setWishList,
} from "../../features/getProducts/getProduct";
import { API } from "../../features/getProducts/getProduct";
import { Link } from "react-router";
import { toast } from "sonner";

const ProductBoxs = () => {
  const cartToken = localStorage.getItem("accaunt");
  const data = useSelector((state) => state.todolist.data);
  const like = useSelector((state) => state.todolist.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPraducData());
  }, [dispatch]);
  const showToast = () => {
    toast.error(
      <div>
        First login —{" "}
        <Link to="/signUp" className="text-blue-400 underline">
          Login
        </Link>
      </div>,
      { autoClose: 3000 }
    );
  };

  return (
    <div className="h-[500px] my-10 w-[90%] m-auto md:w-[100%]">
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
        {data?.map((e) => {
          return (
            <div className="flex flex-col justify-between">
              <SwiperSlide
                style={{
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  backgroundColor: "transparent",
                  gap: "10px",
                  position: "relative",
                }}
                key={e.id}
              >
                <img src={`${API}/images/${e.image}`} alt="" />
                <h1>{e.productName}</h1>
                <div className="flex items-center gap-5">
                  <h2 className="text-red-600">${e.discountPrice}</h2>
                  <h2 className="text-gray-500 line-through"> ${e.price}</h2>
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
                      className="size-6 active:text-yellow-600 rounded-[3px]"
                      onClick={() => {
                        dispatch(setWishList(e));
                        console.log(e);
                      }}
                      style={{
                        backgroundColor: like?.find((el) => e.id == el.id)
                          ? "green"
                          : "white",
                        color: like?.find((el) => e.id == el.id)
                          ? "white"
                          : "black",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    <Link to={`/aboutProduct/${e.id}`}>
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
                    </Link>
                  </div>
                  {cartToken == "" || cartToken == null ? (
                    <button
                      className="w-[100%] bg-black text-white hidden group-hover:block py-2"
                      onClick={() => {showToast()}}
                    >
                      Add To Cart
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
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductBoxs;
