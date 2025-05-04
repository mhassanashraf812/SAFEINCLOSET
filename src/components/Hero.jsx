import { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const desktopImages = [
  
    "/1.jpg", 
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",

   
  ]

  const mobileImages = [
   
    "/1.jpg", 
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",

    
  ]

  const autoplayOptions = {
    delay: 2500, 
    stopOnInteraction: false, 
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    // Call onSelect when the carousel is ready
    onSelect()

    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640)
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640)
      }

      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  const images = isMobile ? mobileImages : desktopImages

  return (
    <div className="w-full px-4 py-6">
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="min-w-0 flex-[0_0_100%]" key={index}>
              <div className="h-full">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Hero image ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex ? "bg-primary scale-110" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero




// const Hero = () => {
//   return (
//     <div className="w-full relative overflow-hidden">
//       <video
//         className="w-full h-auto object-cover"
//         src="/SLIDER.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//       />
//     </div>
//   )
// }

// export default Hero
