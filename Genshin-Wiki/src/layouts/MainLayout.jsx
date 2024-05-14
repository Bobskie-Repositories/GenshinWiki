import React from "react";
import { Outlet } from "react-router-dom";
import { DataProvider } from "../context/DataContext";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <DataProvider>
        <Outlet />
      </DataProvider>
    </>
  );
};

export default MainLayout;
