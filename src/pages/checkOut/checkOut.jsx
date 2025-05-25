import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, Order, ProductGet } from "../../features/getProducts/GetProduct";
import cartBank from "./img/Frame 834.png";

const CheckOut = () => {
  const data = useSelector((state) => state.todolist.product);
  console.log(data);
  let product = data.productsInCart;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductGet());
  }, [dispatch]);

  return (
    <div className="md:max-w-[1700px] w-[90%] m-auto my-10">
      <span className="text-[18px] text-gray-500">
        cart / <span className="text-black font-bold">Check Out</span>
      </span>
      <h2 className="text-3xl font-bold my-5">Billing Details</h2>
      <section className="my-10 flex justify-between md:flex-row flex-col">
        <div className="md:w-[40%]">
          <div className="shadow-2xl rounded-2xl p-8 border-2 flex flex-col gap-5">
            <input
              type="text"
              placeholder="First name"
              className="border-2 rounded-[10px] p-3 w-[100%] placeholder:text-xl"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border-2 rounded-[10px] p-3 w-[100%] placeholder:text-xl"
            />
            <input
              type="text"
              placeholder="Street address"
              className="border-2 rounded-[10px] p-3 w-[100%] placeholder:text-xl"
            />
            <input
              type="text"
              placeholder="Apartment, floor, etc. (optional)"
              className="border-2 rounded-[10px] p-3 w-[100%] placeholder:text-xl"
            />
            <input
              type="text"
              placeholder="Town/City"
              className="border-2 rounded-[10px] p-3 w-[100%] placeholder:text-xl"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border-2 rounded-[10px] p-3 w-[100%] placeholder:text-xl"
            />
            <input
              type="text"
              placeholder="Email address"
              className="border-2 rounded-[10px] p-3 w-[100%] placeholder:text-xl"
            />
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="size-5 bg-red-600"
                checked={true}
              />
              <h3 className="text-xl">
                Save this information for faster check-out next time
              </h3>
            </div>
          </div>
        </div>
        <div className="md:w-[40%]">
          {product?.map((e) => {
            return (
              <div
                key={e.id}
                className="flex items-center justify-between my-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    className="w-[60px] h-[60px]"
                    src={`${API}/images/${e.product.image}`}
                    alt=""
                  />
                  <h1 className="text-xl">{e.product.productName}</h1>
                </div>
                <h2 className="text-xl font-bold">${e.product.price}</h2>
              </div>
            );
          })}
          <div className="flex justify-between mt-5 border-t-2 pt-3">
            <h3 className="text-xl">Subtotal:</h3>
            <h3 className="text-xl">${data.totalPrice}</h3>
          </div>
          <div className="flex justify-between my-2">
            <h3 className="text-xl">Total Product:</h3>
            <h3 className="text-xl">{data.totalProducts}</h3>
          </div>
          <div className="flex justify-between border-b-2 pb-3">
            <h3 className="text-xl">Shipping:</h3>
            <h3 className="text-xl line-through">${data.totalDiscountPrice}</h3>
          </div>
          <div className="flex justify-between pt-3">
            <h3 className="text-2xl font-bold">Total:</h3>
            <h3 className="text-2xl font-bold">
              ${data.totalPrice - data.totalDiscountPrice}
            </h3>
          </div>
          <div className="flex justify-between pt-3 items-center mt-5">
            <div className="flex gap-3 items-center">
              <input type="radio" name="cart" className="size-4" />
              <h3 className="text-xl">Bank</h3>
            </div>
            <img src={cartBank} alt="" />
          </div>
          <div className="flex gap-3 my-3">
            <input type="radio" name="cart"/>
            <h3 className="text-xl">Cash on delivery</h3>
          </div>
          <div className="flex border-2 p-5 rounded-[5px] shadow-2xl justify-between my-2">
            <input type="text" className="border-2 p-3 rounded-[5px] w-[70%]" placeholder="Coupon Code" />
            <button className="border-2 w-[25%] rounded-[5px] border-red-300 text-red-400 font-bold">Apply</button>
          </div>
          <button className="text-xl border-2 bg-[#DB4444] text-white py-2 px-5 rounded-[5px] my-5" onClick={()=> {dispatch(Order())}}>Place Order</button>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
