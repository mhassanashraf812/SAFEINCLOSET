// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>Wear Confidence</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero
"use client"

import { useEffect, useState } from "react"
import { assets } from "../assets/assets"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Initial check
      setIsMobile(window.innerWidth < 640)

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640)
      }

      window.addEventListener("resize", handleResize)

      // Clean up
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="border border-gray-400">
      {isMobile ? (
        // Mobile hero image
        <img
          className="w-full"
          src={assets.mobile_hero_img || "/placeholder.svg?width=640&height=400"}
          alt="Mobile hero image"
        />
      ) : (
        // Desktop hero image
        <img
          className="w-full"
          src={assets.hero_img || "/placeholder.svg?width=1200&height=600"}
          alt="Desktop hero image"
        />
      )}
    </div>
  )
}

export default Hero
