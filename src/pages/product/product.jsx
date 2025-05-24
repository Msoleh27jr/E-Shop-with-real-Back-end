import React, { useEffect } from "react";
import {
  GetPraducData,
  postProduct,
  ProductGet,
  setWishList,
} from "../../features/getProducts/GetProduct";

import { useDispatch, useSelector } from "react-redux";
import { API } from "../../features/getProducts/GetProduct";
import star from "../home/img/Frame 566.png";
import {} from "../../features/getProducts/GetProduct";
import { Link } from "react-router";
import Filter from "../../shared/filter/filter";

const Product = () => {
  const data = useSelector((state) => state.todolist.data);
  const dispatch = useDispatch();
  const like = useSelector((state) => state.todolist.wishlist);
  const cartToken = localStorage.getItem("accaunt");

  useEffect(() => {
    ProductGet();
    dispatch(GetPraducData());
  }, [dispatch]);
  return (
    <div className="max-w-[1700px] m-auto my-15">
      <section>
        <span className="text-[18px] text-gray-500">
          Home
          <span className="text-black font-bold"> / Explore Our Products</span>
        </span>
        <section className="flex justify-between my-20">
          <div className="w-[20%]">
            <Filter/>
          </div>
          <div className="w-[75%] flex flex-col items-center">
            <div className="flex flex-wrap justify-between">
              {data?.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="md:w-[31%] w-[90%] h-[420px] flex flex-col md:gap-2 md:mx-0 mx-5 relative shrink-0 mb-[3%]"
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
                      <img className="" src={star} alt="" />
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
                          onClick={() => {
                            dispatch(setWishList(e));
                            console.log(e);
                          }}
                          style={{
                            backgroundColor: like?.find((el) => e.id == el.id)
                              ? "green"
                              : "white",
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
                      {cartToken == "" ? (
                        <button className="w-[100%] bg-black text-white hidden group-hover:block py-2">
                          <Link to={"/signup"}>Add To Cart</Link>
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
            <button
              onClick={() => alert("That's All")}
              className="bg-[#DB4444] text-white py-3 px-8 font-bold rounded-[5px]"
            >
              More Product
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Product;
