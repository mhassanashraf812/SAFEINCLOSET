// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {

//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {

//     if (products.length > 0) {
//       // const tempData = [];
//       // for (const items in cartItems) {
//       //   for (const item in cartItems[items]) {
//       //     if (cartItems[items][item] > 0) {
//       //       tempData.push({
//       //         _id: items,
//       //         size: item,
//       //         quantity: cartItems[items][item]
//       //       })
//       //     }
//       //   }
//       // }
//       setCartData(cartItems);
//     }
//   }, [cartItems, products])
//   console.log(cartData,"cartData")

//   return (
//     <div className='border-t pt-14'>

//       <div className=' text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>

//       <div>
//         {
//           cartData.map((item, index) => {

//             const productData = products.find((product) => product._id === item._id);
//             console.log(productData, "item", cartData)
//             return (
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                 <div className=' flex items-start gap-6'>
//                   <img className='w-16 sm:w-20' src={productData?.image[0]} alt="" />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                     <div className='flex items-center gap-5 mt-2'>
//                       <p>{currency}{productData.price}</p>
//                       <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
//                       <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.color}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, item.color, (e.target.value),)} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
//                 <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
//               </div>
//             )

//           })
//         }
//       </div>

//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal />
//           <div className=' w-full text-end'>
//             <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Cart

// import { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import CartTotal from "../components/CartTotal";
// import { Trash2 } from "lucide-react";

// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

//   return (
//     <div className="border-t pt-6 md:pt-14 px-4 md:px-6 max-w-7xl mx-auto">
//       <div className="mb-6 md:mb-8">
//         <Title text1={"YOUR"} text2={"CART"} />
//       </div>

//       {cartItems.length === 0 ? (
//         <div className="text-center py-16">
//           <p className="text-gray-500 mb-6">Your cart is empty</p>
//           <button
//             onClick={() => navigate("/")}
//             className="bg-black text-white px-6 py-2 text-sm"
//           >
//             CONTINUE SHOPPING
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cartItems.map((item) => {
//               const productData = products.find((product) => product._id === item._id);
//               const uniqueKey = `${item._id}-${item.size}-${item.color}`;

//               return (
//                 <div
//                   key={uniqueKey}
//                   className="py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row items-start sm:items-center gap-4"
//                 >
//                   <div className="flex items-start gap-4 flex-1">
//                     <div className="relative w-20 h-24 bg-gray-50 flex-shrink-0">
//                       <img
//                         className="w-full h-full object-cover"
//                         src={productData?.image[0] || "/placeholder.svg"}
//                         alt={productData?.name || "Product"}
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm md:text-base font-medium">{productData?.name}</p>
//                       <div className="flex flex-wrap items-center gap-2 mt-2">
//                         <p className="text-sm font-medium">
//                           {productData?.discountPrice ? (
//                             <>
//                               <span className="text-red-600">{currency}{productData.discountPrice}</span>
//                               <span className="ml-2 line-through text-gray-400">{currency}{productData.price}</span>
//                             </>
//                           ) : (
//                             <>{currency}{productData?.price}</>
//                           )}
//                         </p>
//                         <div className="flex flex-wrap gap-2">
//                           <span className="px-2 py-1 text-xs border bg-slate-50">{item.size}</span>
//                           <span className="px-2 py-1 text-xs border bg-slate-50">{item.color}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
//                     <div className="flex-1 sm:flex-none">
//                       <input
//                         onChange={(e) => {
//                           const value = e.target.value;
//                           const parsedValue = parseInt(value, 10);
//                           if (!isNaN(parsedValue) && parsedValue > 0) {
//                             updateQuantity(item._id, item.size, item.color, parsedValue);
//                           }
//                         }}
//                         className="border w-full sm:w-16 px-2 py-1 text-center"
//                         type="number"
//                         min={1}
//                         value={item.quantity}
//                       />
//                     </div>
//                     <button
//                       onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
//                       className="p-2 text-gray-500 hover:text-red-500 transition-colors"
//                       aria-label="Remove item"
//                     >
//                       <Trash2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="my-8 md:my-16">
//             <div className="w-full md:max-w-md md:ml-auto">
//               <CartTotal />
//               <div className="w-full flex justify-center md:justify-end mt-6">
//                 <button
//                   onClick={() => navigate("/place-order")}
//                   className="bg-black text-white text-sm px-6 py-3 w-full md:w-auto md:px-8"
//                 >
//                   PROCEED TO CHECKOUT
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
const shippingCharge = 150;

  const total = cartItems.reduce((acc, item) => {
    const product = products.find((p) => p._id === item._id);
    if (!product) return acc;
    const price = product.discountPrice || product.price;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="border-t pt-6 md:pt-14 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6 md:mb-8">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-6">Your cart is empty</p>
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-6 py-2 text-sm"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => {
              const productData = products.find((product) => product._id === item._id);
              const uniqueKey = `${item._id}-${item.size}-${item.color}`;

              return (
                <div
                  key={uniqueKey}
                  className="py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="relative w-20 h-24 bg-gray-50 flex-shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        src={productData?.image[0] || "/placeholder.svg"}
                        alt={productData?.name || "Product"}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base font-medium">{productData?.name}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <p className="text-sm font-medium">
                          {productData?.discountPrice ? (
                            <>
                              <span className="text-red-600">{currency}{productData.discountPrice}</span>
                              <span className="ml-2 line-through text-gray-400">{currency}{productData.price}</span>
                            </>
                          ) : (
                            <>{currency}{productData?.price}</>
                          )}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 text-xs border bg-slate-50">{item.size}</span>
                          <span className="px-2 py-1 text-xs border bg-slate-50">{item.color}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
                    <div className="flex-1 sm:flex-none">
                      <input
                        onChange={(e) => {
                          const value = e.target.value;
                          const parsedValue = parseInt(value, 10);
                          if (!isNaN(parsedValue) && parsedValue > 0) {
                            updateQuantity(item._id, item.size, item.color, parsedValue);
                          }
                        }}
                        className="border w-full sm:w-16 px-2 py-1 text-center"
                        type="number"
                        min={1}
                        value={item.quantity}
                      />
                    </div>
                    <button
                      onClick={() => updateQuantity(item._id, item.size, item.color, 0)}
                      className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="my-8 md:my-16">
            <div className="w-full md:max-w-md md:ml-auto space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{currency}{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee-All over Pakistan</span>
                {/* <span>Free</span> */}
                  <span>{currency}{shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base mt-2">
                <span>Total</span>
                <span>{currency}{total.toFixed(2)}</span>
              </div>
              <div className="w-full flex justify-center md:justify-end mt-6">
                <button
                  onClick={() => navigate("/place-order")}
                  className="bg-black text-white text-sm px-6 py-3 w-full md:w-auto md:px-8"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
