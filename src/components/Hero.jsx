// import { useEffect, useState, useCallback } from "react"
// import useEmblaCarousel from "embla-carousel-react"
// import Autoplay from "embla-carousel-autoplay"

// const Hero = () => {
//   const [isMobile, setIsMobile] = useState(false)
//   const [selectedIndex, setSelectedIndex] = useState(0)

//   const desktopImages = [
  
//     "/summer.jpg", 
//     "/summer.jpg",
//     "/summer.jpg",
//     "/summer.jpg",
//     "/summer.jpg",

   
//   ]

//   const mobileImages = [
//     "/summer.jpg",
//     "/summer.jpg",
//     "/summer.jpg",
//     "/summer.jpg",
//     "/summer.jpg",
    
//   ]

//   const autoplayOptions = {
//     delay: 3000, 
//     stopOnInteraction: false, 
//   }

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return
//     setSelectedIndex(emblaApi.selectedScrollSnap())
//   }, [emblaApi])

//   useEffect(() => {
//     if (!emblaApi) return

//     // Call onSelect when the carousel is ready
//     onSelect()

//     emblaApi.on("select", onSelect)
//     return () => {
//       emblaApi.off("select", onSelect)
//     }
//   }, [emblaApi, onSelect])

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsMobile(window.innerWidth < 640)
//       const handleResize = () => {
//         setIsMobile(window.innerWidth < 640)
//       }

//       window.addEventListener("resize", handleResize)

//       return () => window.removeEventListener("resize", handleResize)
//     }
//   }, [])

//   const images = isMobile ? mobileImages : desktopImages

//   return (
//     <div className="w-full px-4 py-6">
//       <div className="w-full overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {images.map((image, index) => (
//             <div className="min-w-0 flex-[0_0_100%]" key={index}>
//               <div className="h-full">
//                 <img
//                   src={image || "/placeholder.svg"}
//                   alt={`Hero image ${index + 1}`}
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-4 gap-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === selectedIndex ? "bg-primary scale-110" : "bg-gray-300"
//             }`}
//             onClick={() => emblaApi?.scrollTo(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Hero
"use client"

import { useEffect, useState } from "react"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Video sources for different screen sizes
  const desktopVideo = "/SLIDER.mp4" // Path to your video in public folder
  const mobileVideo = "/SLIDER.mp4" // Optional different video for mobile

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

  // Choose video source based on device
  const videoSource = isMobile ? mobileVideo : desktopVideo

  return (
    <div className="w-full relative overflow-hidden">
      <video className="w-full h-auto object-cover" autoPlay muted loop playsInline>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero
