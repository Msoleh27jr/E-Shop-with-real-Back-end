import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router";
import Logo from "./img/Group 1116606595.png";
import searchBtn from "./img/Component 2.png";
import btnManu from "./img/material-symbols-light_menu.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { ProductGet } from "../../features/getProducts/GetProduct";
import { toast } from "sonner";

const Header = () => {
  const like = useSelector((state) => state.todolist.wishlist);

  const data = useSelector((state) => state.todolist.product);
  console.log(data);

  const [cart, setCart] = useState("");
  function forCart() {
    let carts = localStorage.getItem("accaunt");
    setCart(carts);
  }
  const dispacth = useDispatch();
  useEffect(() => {
    setCart(localStorage.getItem("accaunt"));
    dispacth(ProductGet());
  }, [dispacth]);
  return (
    <div>
      <nav className="md:max-w-[1700px] w-[95%] m-auto flex justify-between items-center py-3 ">
        <div className="flex items-centers gap-2 md:hidden">
          <Sheet>
            <SheetTrigger>
              <img src={btnManu} alt="" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Manu</SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col text-[17px] gap-2">
                    <Link to={"/"}>
                      <li>Home</li>
                    </Link>
                    <Link to={"contact"}>
                      <li>Contact</li>
                    </Link>
                    <Link to={"about"}>
                      <li>About</li>
                    </Link>
                    <Link to={"signUp"}>
                      <li>Sign Up</li>
                    </Link>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <h2 className="text-[20px] font-bold">Exclusive</h2>
        </div>
        <Link to={"/"}>
          <img className="hidden md:block" src={Logo} alt="" />
        </Link>
        <ul className="md:flex text-[20px] gap-9 hidden">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"contact"}>
            <li>Contact</li>
          </Link>
          <Link to={"about"}>
            <li>About</li>
          </Link>
          <Link to={"signUp"}>
            <li>Sign Up</li>
          </Link>
        </ul>
        <div className="flex items-center gap-5">
          <div className="md:flex items-center gap-4 bg-[#F5F5F5] rounded-[4px] py-1 px-6 hidden">
            <input
              className="w-[200px] outline-0"
              type="text"
              placeholder="What are you looking for?"
            />
            <img src={searchBtn} alt="" />
            {/* ///////////// like */}
          </div>
          <div className="relative md:block hidden">
            <Link to={"wishList"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Link>
            <h2 className="bg-red-600 text-[12px] text-white text-center rounded-2xl absolute w-[20px] top-0 right-[-6px]">
              {like.length}
            </h2>
          </div>
          {/* ////////// cart */}
          <div className="relative">
            {cart == "" || cart == null ? (
              <h1></h1>
            ) : (
              <Link to={"cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
            )}
            <div className="absolute top-0 right-[-10px] bg-red-600 text-white w-[20px] text-center rounded-2xl text-[12px]">
              {data?.totalProducts}
            </div>
          </div>
          {/* //////////// profile */}
          <DropdownMenu>
            <p onClick={forCart}>
              {cart == "" || cart == null ? (
                <Link to={"signUp"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 bg-red-600 rounded-2xl w-[30px] h-[30px] p-1 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </Link>
              ) : (
                <DropdownMenuTrigger className="bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 bg-green-600 rounded-2xl w-[30px] h-[30px] p-1 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </DropdownMenuTrigger>
              )}
            </p>
            <DropdownMenuContent className="py-1 px-3 bg-[#000000B8] border-0 text-white w-[200px] md:h-[150px] flex flex-col justify-center gap-2">
              <DropdownMenuItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <Link to={"profile"}>Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>{" "}
                My Order
              </DropdownMenuItem>
              <Link to={"wishList"}>
                <DropdownMenuItem className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>{" "}
                  Wishlist
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <button
                  className="flex gap-2 items-center"
                  onClick={() => {
                    localStorage.setItem("accaunt", ""),
                      localStorage.setItem("wishList", JSON.stringify([]));
                    toast.success("logout Successfully");
                    window.location = "/signUp";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>
                  Logout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <hr className="border-0.5 border-gray-200" />
    </div>
  );
};

export default Header;
