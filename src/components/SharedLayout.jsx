import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Subscribe from "./services-components/Subscribe";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Subscribe />
    </div>
  );
};

export default SharedLayout;
