// "use client"

// import { useContext, useState } from "react"
// import { assets } from "../assets/assets"
// import { Link, NavLink } from "react-router-dom"
// import { ShopContext } from "../context/ShopContext"
// // Remove Lucide icons import
// // Import Material UI icons
// import FacebookIcon from "@mui/icons-material/Facebook"
// import InstagramIcon from "@mui/icons-material/Instagram"

// // Custom TikTok icon using Material UI style
// const TikTok = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     style={{ fill: "currentColor", color: "#000000" }}
//   >
//     <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
//   </svg>
// )

// const Navbar = () => {
//   const [visible, setVisible] = useState(false)
//   const [socialVisible, setSocialVisible] = useState(false)

//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

//   const logout = () => {
//     navigate("/login")
//     localStorage.removeItem("token")
//     setToken("")
//     setCartItems({})
//   }

//   const openSocialLink = (url) => {
//     window.open(url, "_blank")
//   }

//   const openEmail = (email) => {
//     window.location.href = `mailto:${email}`
//   }

//   const [openDropdown, setOpenDropdown] = useState(false);

//   const toggleDropdown = (e) => {
//     e.stopPropagation(); // Stop click from also triggering the NavLink
//     e.preventDefault(); // Prevent default navigation on arrow click
//     setOpenDropdown(!openDropdown);
//   };


//   return (
//     <div className="flex items-center justify-between py-5 font-medium">
//       <Link to="/">
//         <img src={assets.logo || "/placeholder.svg"} className="w-36" alt="" />
//       </Link>

//       <ul className="hidden sm:flex gap-5 text-sm text-gray-700 relative">
//       <NavLink to="/" className="flex flex-col items-center gap-1">
//         <p>HOME</p>
//         <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//       </NavLink>

//       {/* COLLECTION + Arrow */}
//       <div className="relative flex flex-col items-center">
//         <div className="flex items-center gap-1 cursor-pointer">
//           {/* COLLECTION Text Link */}
//           <NavLink to="/collection" className="flex flex-col items-center gap-1">
//             <p>COLLECTION</p>
//           </NavLink>

//           {/* Arrow Button */}
//           <button onClick={toggleDropdown}>
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         </div>

//         {/* Dropdown */}
//         {openDropdown && (
//           <div className="absolute top-full mt-2 flex flex-col bg-white shadow-md rounded-md overflow-hidden min-w-[180px] z-50">
//             <NavLink
//               to="/collection?category=summer"
//               className="px-4 py-2 hover:bg-gray-100 text-left w-full whitespace-nowrap"
//               onClick={() => setOpenDropdown(false)}
//             >
//               Summer Collection
//             </NavLink>
//             <NavLink
//               to="/collection?category=festive"
//               className="px-4 py-2 hover:bg-gray-100 text-left w-full whitespace-nowrap"
//               onClick={() => setOpenDropdown(false)}
//             >
//               Festive Collection
//             </NavLink>
//             <NavLink
//               to="/collection?category=cordset"
//               className="px-4 py-2 hover:bg-gray-100 text-left w-full whitespace-nowrap"
//               onClick={() => setOpenDropdown(false)}
//             >
//               Cord Collection
//             </NavLink>
//           </div>
//         )}
//       </div>

//       <NavLink to="/about" className="flex flex-col items-center gap-1">
//         <p>ABOUT</p>
//         <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//       </NavLink>

//       <NavLink to="/contact" className="flex flex-col items-center gap-1">
//         <p>CONTACT</p>
//         <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//       </NavLink>
//     </ul>

//       <div className="flex items-center gap-6">
//         {/* Social Media Icons - Desktop */}
//         <div className="hidden sm:flex items-center gap-3">
//           <InstagramIcon
//             onClick={() => openSocialLink("https://www.instagram.com/safeincloset")}
//             className="w-5 h-5 cursor-pointer text-[#E1306C] hover:opacity-80 transition-colors"
//             fontSize="small"
//           />
//           <FacebookIcon
//             onClick={() => openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")}
//             className="w-5 h-5 cursor-pointer text-[#1877F2] hover:opacity-80 transition-colors"
//             fontSize="small"
//           />
//           <div
//             onClick={() => openSocialLink("https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1")}
//             className="cursor-pointer hover:opacity-80 transition-colors"
//           >
//             <TikTok />
//           </div>
//         </div>

//         {/* Social Media Icon for Mobile - Shows dropdown */}
//         <div className="sm:hidden relative">
//           <svg
//             onClick={() => setSocialVisible(!socialVisible)}
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="cursor-pointer"
//           >
//             <path d="M18 16.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 0V7m0 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 0H6A3.5 3.5 0 1 1 6 0h0a3.5 3.5 0 0 1 0 7z" />
//           </svg>

//           {/* Social Media Dropdown for Mobile */}
//           {socialVisible && (
//             <div className="absolute right-0 pt-2 z-10">
//               <div className="flex flex-col gap-3 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//                 <div
//                   onClick={() => {
//                     openSocialLink("https://www.instagram.com/safeincloset")
//                     setSocialVisible(false)
//                   }}
//                   className="flex items-center gap-2 cursor-pointer hover:text-black"
//                 >
//                   <InstagramIcon className="w-4 h-4 text-[#E1306C]" fontSize="small" />
//                   <p>Instagram</p>
//                 </div>
//                 <div
//                   onClick={() => {
//                     openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")
//                     setSocialVisible(false)
//                   }}
//                   className="flex items-center gap-2 cursor-pointer hover:text-black"
//                 >
//                   <FacebookIcon className="w-4 h-4 text-[#1877F2]" fontSize="small" />
//                   <p>Facebook</p>
//                 </div>
//                 <div
//                   onClick={() => {
//                     openSocialLink("https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1")
//                     setSocialVisible(false)
//                   }}
//                   className="flex items-center gap-2 cursor-pointer hover:text-black"
//                 >
//                   <TikTok />
//                   <p>TikTok</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <img
//           onClick={() => {
//             setShowSearch(true)
//             navigate("/collection")
//           }}
//           src={assets.search_icon || "/placeholder.svg"}
//           className="w-5 cursor-pointer"
//           alt=""
//         />

//         <div className="group relative">
//           <img
//             onClick={() => (token ? null : navigate("/login"))}
//             className="w-5 cursor-pointer"
//             src={assets.profile_icon || "/placeholder.svg"}
//             alt=""
//           />
//           {/* Dropdown Menu */}
//           {token && (
//             <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
//               <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//                 <p className="cursor-pointer hover:text-black">My Profile</p>
//                 <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">
//                   Orders
//                 </p>
//                 <p onClick={logout} className="cursor-pointer hover:text-black">
//                   Logout
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//         <Link to="/cart" className="relative">
//           <img src={assets.cart_icon || "/placeholder.svg"} className="w-5 min-w-5" alt="" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
//             {getCartCount()}
//           </p>
//         </Link>
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon || "/placeholder.svg"}
//           className="w-5 cursor-pointer sm:hidden"
//           alt=""
//         />
//       </div>

//       {/* Sidebar menu for small screens */}
//       <div
//   className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-20 ${visible ? "w-full" : "w-0"}`}
// >
//   <div className="flex flex-col text-gray-600">
//     {/* Back button */}
//     <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
//       <img className="h-4 rotate-180" src={assets.dropdown_icon || "/placeholder.svg"} alt="Back" />
//       <p>Back</p>
//     </div>

//     {/* Normal Links */}
//     <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
//       HOME
//     </NavLink>

//     {/* Collection + Subcategories */}
//     <div className="flex flex-col border">
//       <NavLink
//         onClick={() => setVisible(false)}
//         className="py-2 pl-6"
//         to="/collection"
//       >
//         COLLECTION
//       </NavLink>

//       {/* Subcategories under collection */}
//       <div className="flex flex-col ml-4 border-t text-sm">
//         <NavLink
//           onClick={() => setVisible(false)}
//           className="py-2 pl-6 border-b"
//           to="/collection?category=summer"
//         >
//           Summer Collection
//         </NavLink>
//         <NavLink
//           onClick={() => setVisible(false)}
//           className="py-2 pl-6 border-b"
//           to="/collection?category=festive"
//         >
//           Festive Collection
//         </NavLink>
//         <NavLink
//           onClick={() => setVisible(false)}
//           className="py-2 pl-6"
//           to="/collection?category=cordset"
//         >
//           Cord Collection
//         </NavLink>
//       </div>
//     </div>

//     <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
//       ABOUT
//     </NavLink>
//     <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
//       CONTACT
//     </NavLink>

//           {/* Social Media Links in Mobile Menu */}
//           <div className="py-3 pl-6 border">
//             <p className="mb-2 font-medium">CONNECT WITH US</p>
//             <div className="flex gap-4 mt-2">
//               <InstagramIcon
//                 onClick={() => {
//                   openSocialLink("https://www.instagram.com/safeincloset")
//                   setVisible(false)
//                 }}
//                 className="w-5 h-5 cursor-pointer text-[#E1306C] hover:opacity-80 transition-colors"
//                 fontSize="small"
//               />
//               <FacebookIcon
//                 onClick={() => {
//                   openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")
//                   setVisible(false)
//                 }}
//                 className="w-5 h-5 cursor-pointer text-[#1877F2] hover:opacity-80 transition-colors"
//                 fontSize="small"
//               />
//               <div
//                 onClick={() => {
//                   openSocialLink("https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1")
//                   setVisible(false)
//                 }}
//                 className="cursor-pointer hover:opacity-80 transition-colors"
//               >
//                 <TikTok />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
"use client"

import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { Link, NavLink } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"

const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    style={{ fill: "currentColor", color: "#000000" }}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
)

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext)

  const logout = () => {
    navigate("/login")
    localStorage.removeItem("token")
    setToken("")
    setCartItems({})
  }

  const openSocialLink = (url) => {
    window.open(url, "_blank")
  }

  const toggleDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 sm:px-8 py-5 flex items-center justify-between font-medium">
      {/* MOBILE LEFT: Hamburger */}
      <div className="sm:hidden flex items-center">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon || "/placeholder.svg"}
          className="w-5 cursor-pointer"
          alt="menu"
        />
      </div>

      {/* DESKTOP LEFT: Logo
      <div className="hidden sm:flex items-center flex-shrink-0">
        <Link to="/">
          <img src={assets.logo || "/placeholder.svg"} className="w-36" alt="logo" />
        </Link>
      </div> */}

      {/* MOBILE CENTER: Logo
      <div className="sm:hidden flex justify-center flex-grow">
        <Link to="/">
          <img src={assets.logo || "/placeholder.svg"} className="w-36" alt="logo" />
        </Link>
      </div> */}

      {/* DESKTOP CENTER: Social Icons */}
      <div className="hidden sm:flex items-center gap-3 mx-auto">
        {/* <InstagramIcon
          onClick={() => openSocialLink("https://www.instagram.com/safeincloset")}
          className="w-5 h-5 cursor-pointer text-[#E1306C] hover:opacity-80 transition-colors"
          fontSize="small"
        />
        <FacebookIcon
          onClick={() => openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")}
          className="w-5 h-5 cursor-pointer text-[#1877F2] hover:opacity-80 transition-colors"
          fontSize="small"
        />
        <div
          onClick={() =>
            openSocialLink(
              "https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1"
            )
          }
          className="cursor-pointer hover:opacity-80 transition-colors"
        >
          <TikTok />
        </div> */}
      </div>

      {/* MOBILE RIGHT: Search + Cart */}
      <div className="sm:hidden flex items-center gap-5">
        <img
          onClick={() => {
            setShowSearch(true)
            navigate("/collection")
          }}
          src={assets.search_icon || "/placeholder.svg"}
          className="w-5 cursor-pointer"
          alt="search"
        />

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon || "/placeholder.svg"}
            className="w-5 min-w-5"
            alt="cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
      </div>

      {/* DESKTOP RIGHT: Nav links + Search + Cart + Profile */}
      <div className="hidden sm:flex items-center gap-6">
        {/* Nav Links */}
        <ul className="flex gap-5 text-sm text-gray-700 relative">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
          </NavLink>

          {/* COLLECTION + Arrow */}
          <div className="relative flex flex-col items-center">
            <div className="flex items-center gap-1 cursor-pointer">
              <NavLink to="/collection" className="flex flex-col items-center gap-1">
                <p>COLLECTION</p>
              </NavLink>
              <button onClick={toggleDropdown} className="focus:outline-none">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {openDropdown && (
              <div className="absolute top-full mt-2 flex flex-col bg-white shadow-md rounded-md overflow-hidden min-w-[180px] z-50">
                <NavLink
                  to="/collection?category=summer"
                  className="px-4 py-2 hover:bg-gray-100 text-left w-full whitespace-nowrap"
                  onClick={() => setOpenDropdown(false)}
                >
                  Summer Collection
                </NavLink>
                <NavLink
                  to="/collection?category=festive"
                  className="px-4 py-2 hover:bg-gray-100 text-left w-full whitespace-nowrap"
                  onClick={() => setOpenDropdown(false)}
                >
                  Festive Collection
                </NavLink>
                <NavLink
                  to="/collection?category=cordset"
                  className="px-4 py-2 hover:bg-gray-100 text-left w-full whitespace-nowrap"
                  onClick={() => setOpenDropdown(false)}
                >
                  Cord Collection
                </NavLink>
                <NavLink
                  to="/collection?category=casual"
                  className="px-4 py-2 hover:bg-gray-100 text-left w-full whitespace-nowrap"
                  onClick={() => setOpenDropdown(false)}
                >
                  Casual Collection
                </NavLink>
                <NavLink
                  to="/collection?category=ThreePiece"
                  className="px-4 py-2 hover:bg-gray-100 text-left w-full whitespace-nowrap"
                  onClick={() => setOpenDropdown(false)}
                >
                 Three Piece Collection
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
          </NavLink>
        </ul>

        {/* Search icon */}
        <img
          onClick={() => {
            setShowSearch(true)
            navigate("/collection")
          }}
          src={assets.search_icon || "/placeholder.svg"}
          className="w-5 cursor-pointer"
          alt="search"
        />

        {/* Cart icon */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon || "/placeholder.svg"}
            className="w-5 min-w-5"
            alt="cart"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Profile icon */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon || "/placeholder.svg"}
            alt="profile"
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SIDEBAR MENU (Mobile only) */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-20 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          {/* Back button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer border-b"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon || "/placeholder.svg"}
              alt="Back"
            />
            <p>Back</p>
          </div>

          {/* Nav Links */}
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/">
            HOME
          </NavLink>

          {/* Collection + Subcategories */}
          <div className="flex flex-col border-b">
            <NavLink onClick={() => setVisible(false)} className="py-2 pl-6" to="/collection">
              COLLECTION
            </NavLink>

            <div className="flex flex-col ml-4 border-t text-sm">
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border-b"
                to="/collection?category=summer"
              >
                Summer Collection
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border-b"
                to="/collection?category=festive"
              >
                Festive Collection
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to="/collection?category=cordset"
              >
                Cord Collection
              </NavLink>
            </div>
          </div>

          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border-b" to="/contact">
            CONTACT
          </NavLink>

          {/* Social Media Links */}
          <div className="py-3 pl-6 border-t">
            <p className="mb-2 font-medium">CONNECT WITH US</p>
            <div className="flex gap-4 mt-2">
              <InstagramIcon
                onClick={() => {
                  openSocialLink("https://www.instagram.com/safeincloset")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-[#E1306C] hover:opacity-80 transition-colors"
                fontSize="small"
              />
              <FacebookIcon
                onClick={() => {
                  openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-[#1877F2] hover:opacity-80 transition-colors"
                fontSize="small"
              />
              <div
                onClick={() => {
                  openSocialLink(
                    "https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1"
                  )
                  setVisible(false)
                }}
                className="cursor-pointer hover:opacity-80 transition-colors"
              >
                <TikTok />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
