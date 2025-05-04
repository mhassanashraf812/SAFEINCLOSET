// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// import { useLocation } from "react-router-dom";

// const Collection = () => {

//   const { products , search , showSearch } = useContext(ShopContext);
//   const [showFilter,setShowFilter] = useState(false);
//   const [filterProducts,setFilterProducts] = useState([]);
//   const [category,setCategory] = useState([]);
//   const [subCategory,setSubCategory] = useState([]);
//   const [sortType,setSortType] = useState('relavent')
//   const location = useLocation();
// const [collectionCategory, setCollectionCategory] = useState('');

// useEffect(() => {
//   const queryParams = new URLSearchParams(location.search);
//   const categoryFromUrl = queryParams.get('category');
//   if (categoryFromUrl) {
//     setCollectionCategory(categoryFromUrl);
//   } else {
//     setCollectionCategory('');
//   }
// }, [location]);

//   const toggleCategory = (e) => {

//     if (category.includes(e.target.value)) {
//         setCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setCategory(prev => [...prev,e.target.value])
//     }

//   }

//   const toggleSubCategory = (e) => {

//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setSubCategory(prev => [...prev,e.target.value])
//     }
//   }

//   const applyFilter = () => {
//     let productsCopy = products.slice();
  
//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//     }
  
//     if (collectionCategory) {
//       // If a URL category exists, filter by that
//       productsCopy = productsCopy.filter(item => item.collection?.toLowerCase() === collectionCategory.toLowerCase());
//     }
  
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
//     }
  
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
//     }
  
//     setFilterProducts(productsCopy);
//   };
  

//   const sortProduct = () => {

//     let fpCopy = filterProducts.slice();

//     switch (sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
//         break;

//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
//         break;

//       default:
//         applyFilter();
//         break;
//     }

//   }

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, search, showSearch, products, collectionCategory]);
  

//   useEffect(()=>{
//     sortProduct();
//   },[sortType])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
//       {/* Filter Options */}
//       <div className='min-w-60'>
//         <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//         </p>
//         {/* Category Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>Filter</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'2 Piece'} onChange={toggleCategory}/>2 Piece
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'3 Piece'} onChange={toggleCategory}/>3 Piece
//             </p>
//             {/* <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'winter'} onChange={toggleCategory}/> Winter Collections
//             </p> */}
//           </div>
//         </div>
//         {/* SubCategory Filter */}
//         {/* <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Summerwear'} onChange={toggleSubCategory}/> Summerwear
//             </p>
//           </div>
//         </div> */}
//       </div>

//       {/* Right Side */}
//       <div className='flex-1'>

//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//             <Title text1={collectionCategory?.toUpperCase() || 'ALL'} text2={'COLLECTIONS'} />
//             {/* Porduct Sort */}
//             <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//               <option value="relavent">Sort by: Relavent</option>
//               <option value="low-high">Sort by: Low to High</option>
//               <option value="high-low">Sort by: High to Low</option>
//             </select>
//         </div>
//        {
//         collectionCategory &&  <img
//         src={`/${collectionCategory}.webp`}
//         alt="Banner"
//         className="w-full h-full object-cover"
//       />
//        }
//         {/* Map Products */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {
//             filterProducts.map((item,index)=>(
//               <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//             ))
//           }
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Collection







"use client"

import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import Title from "../components/Title"
import ProductItem from "../components/ProductItem"
import { useLocation } from "react-router-dom"

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relavent")
  const location = useLocation()
  const [collectionCategory, setCollectionCategory] = useState("")

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const categoryFromUrl = queryParams.get("category")
    if (categoryFromUrl) {
      setCollectionCategory(categoryFromUrl.toLocaleLowerCase())
    } else {
      setCollectionCategory("")
    }
  }, [location])

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setSubCategory((prev) => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (collectionCategory) {
      // If a URL category exists, filter by that
      productsCopy = productsCopy.filter((item) => item.collection?.toLowerCase().replaceAll(" ","") === collectionCategory.toLowerCase())
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    const fpCopy = filterProducts.slice()

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
        break

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
        break

      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products, collectionCategory])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 border-t mb-8">
        {/* Filter Options - Sidebar */}
        <div className="w-full sm:w-60 flex-shrink-0">
          <div className="sticky top-4">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="w-full my-2 text-xl flex items-center justify-between cursor-pointer gap-2 sm:cursor-default"
            >
              <span>FILTERS</span>
              <img
                className={`h-3 w-3 transition-transform duration-200 sm:hidden ${showFilter ? "rotate-180" : ""}`}
                src={assets.dropdown_icon || "/placeholder.svg"}
                alt="Toggle filters"
              />
            </button>

            {/* Category Filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-4 transition-all duration-300 ${showFilter ? "max-h-60" : "max-h-0 overflow-hidden border-0 py-0 mt-0"} sm:max-h-60 sm:overflow-visible sm:border sm:py-3 sm:mt-4`}
            >
              <p className="mb-3 text-sm font-medium">Filter</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="w-4 h-4" type="checkbox" value={"2 Piece"} onChange={toggleCategory} />
                  <span>2 Piece</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input className="w-4 h-4" type="checkbox" value={"3 Piece"} onChange={toggleCategory} />
                  <span>3 Piece</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Products */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <Title text1={collectionCategory?.toUpperCase() || "ALL"} text2={"COLLECTIONS"} />

            {/* Product Sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2 py-1 rounded w-full sm:w-auto"
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Collection Banner */}
          {collectionCategory && (
            <div className="w-full mb-8 rounded-lg overflow-hidden">
              <img
                src={`/${collectionCategory}.svg`}
                alt={`${collectionCategory} Banner`}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Products Grid */}
          {filterProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection
