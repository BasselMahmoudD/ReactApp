import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/Home/MainSection";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import USer from "./components/User/USer";

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <USer />,
      children: [
        { index: true, element: <MainSection /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      <Footer />
    </>
  );
}
