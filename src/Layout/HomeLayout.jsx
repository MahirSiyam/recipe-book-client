import React from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mb-2">
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
