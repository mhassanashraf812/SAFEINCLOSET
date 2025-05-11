

// import { Routes, Route } from "react-router-dom"
// import Home from "./pages/Home"
// import Collection from "./pages/Collection"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Product from "./pages/Product"
// import Cart from "./pages/Cart"
// import Login from "./pages/Login"
// import PlaceOrder from "./pages/PlaceOrder"
// import Orders from "./pages/Orders"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// import SearchBar from "./components/SearchBar"
// import AnnouncementSlider from "./components/annoucement"
// import WhatsAppButton from "./components/whatsappbutton"
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import Verify from "./pages/Verify"
// import InstagramFeed from "./components/instagramfeed"
// const App = () => {
//   return (
//     <div >
//       <AnnouncementSlider />
//       {/* <div className="pt-0 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> */}
//       <div className="pt-0 px-2 sm:px-4 md:px-6 lg:px-8">
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
//       </div >
//       <WhatsAppButton phoneNumber="1234567890" message="Hello! I'm interested in your products." />
//     </div>
//   )
// }

// export default App

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import ReactPixel from "react-facebook-pixel";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Verify from "./pages/Verify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import AnnouncementSlider from "./components/annoucement";
import WhatsAppButton from "./components/whatsappbutton";
import InstagramFeed from "./components/instagramfeed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();
  const isPixelInitialized = useRef(false); //     Track if Pixel is already initialized

  useEffect(() => {
    if (!isPixelInitialized.current) {
      const options = {
        autoConfig: true,
        debug: false,
      };
      ReactPixel.init("2396719647367140", options); //     Replace with your actual Pixel ID
      ReactPixel.pageView(); // Initial load
      isPixelInitialized.current = true; //     Set initialized flag
    }
  }, []);

  useEffect(() => {
    ReactPixel.pageView(); //     Fires on route changes only
  }, [location.pathname]);

  return (
    <div>
      <AnnouncementSlider />
      <div className="pt-0 px-2 sm:px-4 md:px-6 lg:px-8">
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
      <WhatsAppButton
        phoneNumber="1234567890"
        message="Hello! I'm interested in your products."
      />
    </div>
  );
};

export default App;

