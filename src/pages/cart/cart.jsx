import React, { useEffect } from "react";
import {
  API,
  ClearePro,
  DeletePro,
  DicrimentPro,
  IncreasePro,
  ProductGet,
} from "../../features/getProducts/getProduct";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todolist.product);
  let product = data.productsInCart;

  console.log(data);
  console.log(product);

  useEffect(() => {
    dispatch(ProductGet());
  }, [dispatch]);
  return (
    <div>
      <div className="max-w-[1700px] m-auto my-10">
        <span className="text-[18px] text-gray-500">
          Home / <span className="text-black font-bold">Cart</span>
        </span>
        <section className="my-10 flex flex-col gap-5 m-auto md:w-[100%] w-[95%]">
          <div className="md:flex hidden justify-between">
            <h3 className="text-xl text-gray-600">Product</h3>
            <h3 className="text-xl text-gray-600">Price</h3>
            <h3 className="text-xl text-gray-600">Quantity</h3>
            <h3 className="text-xl text-gray-600">Subtotal</h3>
          </div>
          {product ? (
            product.map((e) => {
              return (
                <div
                  key={e.id}
                  className="flex items-center justify-between shadow-2xl border-1 rounded-2xl md:h-[100px] p-8"
                >
                  <div className="md:w-[35%] flex md:flex-row flex-col md:items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-[70px]"
                        src={`${API}/images/${e.product.image}`}
                        alt=""
                      />
                      <h2 className="font-bold text-xl">
                        {e.product.productName}
                      </h2>
                    </div>
                    <h2 className="text-[18px] font-bold">
                      ${e.product.price}
                    </h2>
                  </div>
                  {/* .....second one */}
                  <div className="flex md:w-[38%] w-[35%] md:flex-row flex-col md:justify-between">
                    <div className="h-[60px] md:w-[100px] flex items-center justify-evenly">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8"
                        onClick={() => dispatch(IncreasePro(e.id))}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <h3 className="text-2xl">{e.quantity}</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8"
                        onClick={() => dispatch(DicrimentPro(e.id))}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <div className="md:w-[150px] md:gap-0 gap-3 flex items-center justify-between">
                      <h2 className="text-xl font-bold">
                        ${e.product.price * e.quantity}
                      </h2>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-7 bg-red-600 text-white rounded-2xl"
                          onClick={() => dispatch(DeletePro(e.id))}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Link to="/">
              <button>go Home</button>
            </Link>
          )}
        </section>
        <div className="flex items-center justify-between m-auto md:w-[100%] w-[90%]">
          <button className="border-2 border-black text-[16px] rounded-[6px] py-2 px-7">
            <Link to={"/product"}>Return To Shop</Link>
          </button>
          <button
            className="border-2 border-red-600 text-red-600 text-[16px] rounded-[6px] py-2 px-7"
            onClick={() => dispatch(ClearePro())}
          >
            Remove all
          </button>
        </div>
        <div className="flex md:items-start md:gap-0 gap-10 justify-between my-10 md:flex-row flex-col items-center">
          <div className="flex items-center gap-3 md:w-[100%] w-[90%]">
            <input
              className="border-2 text-[16px] rounded-[6px] py-2 px-7 w-[100%] md:w-[30%]"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="border-2 border-red-600 text-red-600 text-[16px] rounded-[6px] py-2 px-7">
              Apply
            </button>
          </div>
          <div className="border-2 md:w-[460px] w-[90%] h-[300px] border-black rounded-[5px] p-10 flex flex-col justify-between">
            <h2 className="text-2xl font-bold">Cart Total</h2>
            <div className="flex text-xl justify-between items-center">
              <h3>Subtotal:</h3>
              <h3>${data.totalPrice}</h3>
            </div>
            <div className="flex text-xl justify-between items-center">
              <h3>Shipping:</h3>
              <h3>Free</h3>
            </div>
            <hr />
            <div className="flex text-2xl font-bold justify-between items-center">
              <h3>Total:</h3>
              <h3>${data.totalPrice}</h3>
            </div>
            <button className="bg-[#DB4444] text-white py-2 px-5 w-[200px] rounded-[5px]">
              <Link to={"/check"}>Procees to checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
