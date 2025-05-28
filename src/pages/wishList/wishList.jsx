import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API,
  postProduct,
  setDeletePro,
} from "../../features/getProducts/getProduct";
import stars from "../home/img/Frame 566.png";
import ProductBoxs from "../../shared/productBox/productBoxs";

const WishList = () => {
  const like = useSelector((state) => state.todolist.wishlist);
  const cartToken = localStorage.getItem("accaunt");
  const dispatch = useDispatch();
  console.log(like);

  return (
    <div className="md:max-w-[1700px] w-[90%] m-auto my-10">
      <section>
        <h2 className="text-2xl flex items-center">Wishlist ({like.length})</h2>
        <div className="flex md:gap-[60px] overflow-x-auto whitespace-nowrap md:max-w-[1700px] my-10 m-auto md:w-[100%] w-[90%] px-2 md:flex-wrap">
          {like.map((e) => {
            return (
              <div key={e.id} className="md:w-[300px] w-[90%] h-[420px] flex flex-col md:gap-2 md:mx-0 mx-5 relative shrink-0">
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
                      className="size-6"
                      onClick={() => dispatch(setDeletePro(e.id))}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                  {cartToken == "" ? (
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
        <div className="my-20">
          <h2 className="text-2xl text-red-600 font-bold border-l-[15px] pl-3 border-red-600">
            Just For You
          </h2>
          <ProductBoxs />
        </div>
      </section>
    </div>
  );
};

export default WishList;
