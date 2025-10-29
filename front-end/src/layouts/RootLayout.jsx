import React from "react";
import { Outlet} from "react-router-dom";
import Header from "../components/Header";



export default function RootLayout() {


  return (
    <div className="md:w-full md:min-h-screen md:flex flex-col">
      <div className="w-full flex justify-center fixed top-0 left-0 right-0 z-50 bg-transparent md:px-40 md:py-4 ">
        <Header/>
      </div>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
