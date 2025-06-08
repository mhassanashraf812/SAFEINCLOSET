import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price,discountPrice}) => {
    
    const {currency} = useContext(ShopContext);

  return (
    // <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    //   <div className=' overflow-hidden'>
    //     <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
    //   </div>
    //   <p className='pt-3 pb-1 text-sm'>{name}</p>
    //   <p className=' text-sm font-medium'>{currency}{price}</p>
    // </Link>
    <Link onClick={() => scrollTo(0, 0)} className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
  <div className="overflow-hidden relative">
    <img
      src={image[0]}
      alt=""
      className="transition-opacity duration-300 ease-in-out hover:opacity-0"
    />
    <img
      src={image[1]}
      alt=""
      className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
    />
  </div>
  <p className="pt-3 pb-1 text-sm">{name}</p>
  <p className="text-sm font-medium">
    {discountPrice ? (
      <>
        <span className="text-red-600">{currency}{discountPrice}</span>
        <span className="ml-2 line-through text-gray-400">{currency}{price}</span>
      </>
    ) : (
      <>{currency}{price}</>
    )}
  </p>
</Link>

  )
}

export default ProductItem
