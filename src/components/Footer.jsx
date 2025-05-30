// import { assets } from "../assets/assets"

// const Footer = () => {
//   return (
//     <div>
//       <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
//         <div>
//           <img src={assets.logo || "/placeholder.svg"} className="mb-5 w-32" alt="" />
//           <p className="w-full md:w-2/3 text-gray-600">
//             Safeein Closet – Your go-to destination for trendy and elegant fashion. We bring you carefully curated
//             styles that blend comfort with sophistication. Explore our collection and redefine your wardrobe with
//             timeless pieces.
//           </p>
//         </div>

//         <div>
//           <p className="text-xl font-medium mb-5">COMPANY</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>+92 3314034851</li>
//             <li>safeinclosetofficial@gmail.com</li>
//           </ul>
//         </div>
//       </div>

//       {/* SafeinCloset Signature */}
//       <div className="w-full flex justify-center my-8">
//         <div className="relative">
//           <div
//             style={{
//               fontFamily: 'cursive, "Brush Script MT", "Segoe Script", serif',
//               fontSize: "2.8rem",
//               letterSpacing: "2px",
//               color: "#000",
//               transform: "rotate(-2deg)",
//               textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
//               fontWeight: "bold",
//             }}
//           >
//             SafeinCloset
//           </div>
//           <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"></div>
//         </div>
//       </div>

//       <div>
//         <hr />
//         <p className="py-5 text-sm text-center">Copyright 2025@ safeinofficial.com - All Right Reserved.</p>
//       </div>
//     </div>
//   )
// }

// export default Footer
import { assets } from "../assets/assets"
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative mt-40 pt-16 pb-8 bg-gradient-to-b from-white to-gray-50">
      {/* Decorative element */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200"></div> */}

      <div className="container mx-auto px-4">
        {/* Beautiful Quote Section */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="relative py-8 px-6">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-pink-300 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-pink-300 opacity-60"></div>

            {/* Quote */}
            <p className="italic text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
              "Elegance is not standing out, but being remembered."
            </p>
            <p className="mt-4 text-sm text-pink-500 font-medium tracking-wider">SAFEIN CLOSET</p>

            {/* Decorative divider */}
            <div className="w-16 h-0.5 bg-pink-300 mx-auto my-4"></div>
          </div>
        </div>

        {/* Main footer content - improved responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Brand section */}
          <div className="space-y-5">
            <img
              src={assets.logo || "/placeholder.svg"}
              className="w-32 sm:w-40 transition-all duration-300 hover:opacity-80"
              alt="SafeinCloset Logo"
            />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Safeein Closet – Your go-to destination for trendy and elegant fashion. We bring you carefully curated
              styles that blend comfort with sophistication.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.instagram.com/safeincloset"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-pink-600 transition-colors duration-300"
              >
                <Instagram size={16} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/15vfRxGL7p/"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-pink-600 transition-colors duration-300"
              >
                <Facebook size={16} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1"
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-pink-600 transition-colors duration-300"
              >
                {/* TikTok Icon (custom SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-tiktok"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 relative">
              COMPANY
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-rose-400"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "About us", "Delivery", "Privacy policy"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-600 hover:text-rose-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-rose-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 relative">
              GET IN TOUCH
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-rose-400"></span>
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+923314034851"
                  className="text-sm sm:text-base text-gray-600 hover:text-rose-500 transition-colors duration-300 flex items-center"
                >
                  <Phone size={16} className="mr-2 sm:mr-3 text-rose-400" />
                  +92 3314034851
                </a>
              </li>
              <li>
                <a
                  href="mailto:safeinclosetofficial@gmail.com"
                  className="text-sm sm:text-base text-gray-600 hover:text-rose-500 transition-colors duration-300 flex items-center flex-wrap"
                >
                  <Mail size={16} className="mr-2 sm:mr-3 text-rose-400 flex-shrink-0" />
                  <span className="break-all">safeinclosetofficial@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 sm:mr-3 mt-1 text-rose-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600">
                Outlet no: LG 24, Basement Rehmat Market Wapda Town Lahore
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Second romantic quote - more subtle */}
        <div className="mb-12 text-center">
          <p className="text-sm italic text-gray-500">
            "Dress like you're already famous, and the world will recognize your beauty."
          </p>
        </div>

        {/* Copyright section - improved responsive design */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-xs sm:text-sm text-center text-gray-500">
            Copyright © {new Date().getFullYear()} safeinofficial.com - All Rights Reserved.
            <span className="inline-flex items-center ml-1">
              Made with <Heart size={10} className="mx-1 text-rose-500 animate-pulse" /> in Fashion
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
