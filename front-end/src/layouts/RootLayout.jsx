import React from "react";
import { Outlet} from "react-router-dom";
import Header from "../components/Header";



export default function RootLayout() {


  return (
    <div className="md:w-full md:min-h-screen md:flex flex-col">
        <Header/>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
