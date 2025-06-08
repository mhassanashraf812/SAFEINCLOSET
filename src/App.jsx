
// import { Routes, Route, useLocation } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import ReactPixel from "react-facebook-pixel";

// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Orders from "./pages/Orders";
// import Verify from "./pages/Verify";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
// import AnnouncementSlider from "./components/annoucement";
// import WhatsAppButton from "./components/whatsappbutton";
// import InstagramFeed from "./components/instagramfeed";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//   const location = useLocation();
//   const isPixelInitialized = useRef(false); //     Track if Pixel is already initialized

//   useEffect(() => {
//     if (!isPixelInitialized.current) {
//       const options = {
//         autoConfig: true,
//         debug: false,
//       };
//       ReactPixel.init("2396719647367140", options); //     Replace with your actual Pixel ID
//       ReactPixel.pageView(); // Initial load
//       isPixelInitialized.current = true; //     Set initialized flag
//     }
//   }, []);

//   useEffect(() => {
//     ReactPixel.pageView(); //     Fires on route changes only
//   }, [location.pathname]);

//   return (
//     <div>
//       <AnnouncementSlider />
//       <div className="pt-0 px-0 sm:px-4 md:px-6 lg:px-8" >
//         <ToastContainer />
//         <Navbar />
//         <SearchBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/place-order" element={<PlaceOrder />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/verify" element={<Verify />} />
//         </Routes>
//         <Footer />
//       </div>
//       <WhatsAppButton
//         phoneNumber="1234567890"
//         message="Hello! I'm interested in your products."
//       />
//     </div>
//   );
// };

// export default App;

"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import ReactPixel from "react-facebook-pixel"

import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Verify from "./pages/Verify"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import AnnouncementSlider from "./components/annoucement"
import WhatsAppButton from "./components/whatsappbutton"

// Choose your preferred loading spinner
import Elgantlaoding from "./components/ElegantDotsLoader.jsx"


import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const location = useLocation()
  const isPixelInitialized = useRef(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isRouteChanging, setIsRouteChanging] = useState(false)

  // Initial app loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Increased to 2 seconds to show off the stylish loader

    return () => clearTimeout(timer)
  }, [])

  // Facebook Pixel initialization
  useEffect(() => {
    if (!isPixelInitialized.current) {
      const options = {
        autoConfig: true,
        debug: false,
      }
      ReactPixel.init("2396719647367140", options)
      ReactPixel.pageView()
      isPixelInitialized.current = true
    }
  }, [])

  // Handle route changes
  useEffect(() => {
    setIsRouteChanging(true)
    ReactPixel.pageView()

    const timer = setTimeout(() => {
      setIsRouteChanging(false)
    }, 800) // Slightly longer to show the stylish transition

    return () => clearTimeout(timer)
  }, [location.pathname])

  // Show loading spinner during initial load or route changes
  if (isLoading || isRouteChanging) {
    return <Elgantlaoding />
  }

  return (
    <div>
      <AnnouncementSlider />
      {/* <div className="pt-0 px-0 sm:px-4 md:px-6 lg:px-8"> */}
      <div className="pt-0 px-0">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
        <Footer />
      </div>
      <WhatsAppButton phoneNumber="1234567890" message="Hello! I'm interested in your products." />
    </div>
  )
}

export default App
