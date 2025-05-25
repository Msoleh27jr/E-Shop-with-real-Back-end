import React from "react";
import { Outlet } from "react-router";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Toaster } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
