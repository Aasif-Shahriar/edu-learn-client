import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
