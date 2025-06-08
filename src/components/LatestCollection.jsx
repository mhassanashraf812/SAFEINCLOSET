import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,40));
    },[products])

  return (
  <div className="my-16 px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-10">
      <Title text1="LATEST" text2="COLLECTIONS" />
      <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
        Your destination for trendy, elegant fashion that blends comfort with sophistication.
      </p>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-6">
      {latestProducts.map((item, index) => (
        <ProductItem
          key={index}
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
        discountPrice={item.discountPrice}
        />
      ))}
    </div>
  </div>
);

}

export default LatestCollection
