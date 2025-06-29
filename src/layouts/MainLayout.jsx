import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/back-to-top/BackToTop";
import AOS from 'aos';
import Aos from "aos";

const MainLayout = () => {
    const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    Aos.refresh(); 
  }, [location.pathname]);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
        <BackToTop></BackToTop>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
