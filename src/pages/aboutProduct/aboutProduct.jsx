import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import {
  API,
  getDataById,
  GetPraducData,
  postProduct,
  setWishList,
} from "../../features/getProducts/GetProduct";
import stars from "../home/img/Frame 566.png";
import ProductBoxs from "../../shared/productBox/ProductBoxs";
import BoxImg from "../../shared/boxsForImages/boxImg";

const AboutProduct = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.todolist.productById);
  const dataLike = useSelector((state) => state.todolist.data);
  const like = useSelector((state) => state.todolist.wishlist);

  let findLike = dataLike.find((e) => e.id == id);

  const dispatch = useDispatch();
  const cartToken = localStorage.getItem("accaunt");

  useEffect(() => {
    dispatch(getDataById(id));
  }, [id, dispatch]);

  return (
    <div className="md:max-w-[1700px] w-[90%] m-auto my-10">
      <span className="text-[18px] text-gray-500">
        Home
        <span className="text-black font-bold"> / {data?.productName}</span>
      </span>
      <section className="my-10 flex md:flex-row flex-col justify-between md:h-[600px]">
        <BoxImg imgBox={data?.images} />
        <aside className="md:w-[45%] w-[100%] md:gap-0 gap-5 flex flex-col items-start justify-between">
          <h2 className="text-4xl">{data?.productName}</h2>
          <div className="flex items-center gap-5">
            <img src={stars} alt="" />
            {data?.hasDiscount ? (
              <h4 className="text-white px-3 rounded-xl text-xl bg-green-600">
                InStock
              </h4>
            ) : (
              <h4 className="text-white px-3 rounded-xl text-xl bg-red-600">
                OutStock
              </h4>
            )}
          </div>
          <span className="text-2xl font-bold flex items-center gap-5 text-green-600">
            ${data?.discountPrice}
            <span className="text-red-600 line-through">${data?.price}</span>
          </span>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            sapiente quaerat magnam nobis amet ex facere error minus
            voluptatibus illum adipisci, perferendis maxime quas hic possimus!
            Minus saepe molestias vel.
          </p>
          <hr className="border-1 border-black w-[100%]" />
          <span className="text-2xl">
            Colours:{" "}
            <span
              className="px-2 rounded-4xl"
              style={{
                backgroundColor: `${data?.color}`,
                color: `${data?.color}`,
              }}
            >
              0
            </span>
          </span>
          <span className="text-2xl flex items-center gap-4">
            Size :<span>{data?.size}</span>
          </span>
          <div className="flex items-center gap-3">
            {cartToken == "" ? (
              <button className="w-[200px] rounded-[5px] font-bold bg-[#DB4444] text-white py-2">
                <Link to={"signup"}>Add To Cart</Link>
              </button>
            ) : (
              <button
                onClick={() => dispatch(postProduct(id))}
                className="w-[200px] rounded-[5px] font-bold bg-[#DB4444] text-white py-2"
              >
                Add To Cart
              </button>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 active:text-yellow-300 rounded-[5px]"
              onClick={() => {
                dispatch(setWishList(findLike));
              }}
              style={{
                backgroundColor: like?.find((el) => findLike.id == el.id)
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
          </div>
          <div className="rounded-2xl">
            {/* router */}
            <div className="w-[100%] border-2 border-black rounded-t-2xl flex h-[100px] items-center p-5 gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <aside>
                <h2 className="text-2xl font-bold">Free Delivery</h2>
                <p className="text-[18px] underline">
                  Enter your postal code for Delivery Availability
                </p>
              </aside>
            </div>
            {/* delivary */}
            <div className="w-[100%] border-2 border-black rounded-b-2xl flex h-[100px] items-center p-5 gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <aside>
                <h2 className="text-2xl font-bold">Return Delivery</h2>
                <p className="text-[18px] underline">
                  Free 30 Days Delivery Returns. Details
                </p>
              </aside>
            </div>
          </div>
        </aside>
      </section>
      <div className="my-20">
        <h2 className="text-2xl text-red-600 font-bold border-l-[15px] pl-3 border-red-600">
          Related Item
        </h2>
        <ProductBoxs />
      </div>
    </div>
  );
};

export default AboutProduct;
