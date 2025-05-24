import React from "react";
import { Outlet } from "react-router";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
