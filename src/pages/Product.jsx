import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import RelatedProducts from "../components/RelatedProducts"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ProductDescriptionSection from "../components/productdescription"

const Product = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState("")
  const [size, setSize] = useState(null)
  const [color, setColor] = useState(null)

  useEffect(() => {
    const product = products.find((item) => item._id === productId)
    if (product) {
      setProductData(product)
      setImage(product.image[0])
    }
  }, [productId, products])

  const handleBuyNow = () => {
    if (!size) {
      toast.error("Please select a size before buying", {
        position: "bottom-right",
        autoClose: 2000,
      })
      return

    }
     window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

    addToCart(productData._id, size, color || "default")
    navigate("/cart") // 🚀 Redirect to cart
  }

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*----------- Product Data-------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*---------- Product Images------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item || "/placeholder.svg"}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image || "/placeholder.svg"} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-3.5" />
            ))}
          </div>
          <div className="mt-5">
            {productData.discountPrice ? (
              <>
                <span className="text-3xl font-medium text-red-600">{currency}{productData.discountPrice}</span>
                <span className="ml-3 text-xl text-gray-400 line-through">{currency}{productData.price}</span>
              </>
            ) : (
              <span className="text-3xl font-medium">{currency}{productData.price}</span>
            )}
          </div>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Color Selection */}
            <p>Select Color</p>
            <div className="flex gap-2">
              {productData.colors?.length > 0 ? (
                productData.colors.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setColor(item)}
                    className={`border py-2 px-4 bg-gray-100 ${item === color ? "border-orange-500" : ""}`}
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="text-gray-400">No color options available</p>
              )}
            </div>
          </div>

          {/* Buy Now Button */}
          <button
            disabled={productData.soldOut}
            onClick={handleBuyNow}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            BUY NOW
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <ProductDescriptionSection />
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

      <ToastContainer />
    </div>
  ) : (
    <div className="opacity-0"></div>
  )
}

export default Product
