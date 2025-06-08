// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// const CategoryCollection = ({ title, filter, filterField = "collection", bannerDesktop, bannerMobile, noTopMargin }) => {
//   const { products } = useContext(ShopContext);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     // Debug: log products and filter
//     console.log('All products:', products);
//     console.log('Filter:', filter);
//     // Flexible filter by collection or category
//     const normalizedFilter = filter.toString().replace(/\s+/g, '').toLowerCase();
//     const filtered = products.filter(
//       (item) =>
//         item[filterField] &&
//         item[filterField].toString().replace(/\s+/g, '').toLowerCase().includes(normalizedFilter)
//     );
//     console.log('Filtered products:', filtered);
//     setFilteredProducts(filtered);
//     // Debug: log all unique values for the filter field
//     const allValues = Array.from(new Set(products.map(item => item[filterField])));
//     console.log(`All unique ${filterField} values:`, allValues);
//   }, [products, filter, filterField]);

//   return (
//     <div className={`${noTopMargin ? 'mb-16' : 'my-16'} px-4 sm:px-6 lg:px-8`}>
//       {(bannerDesktop || bannerMobile) && (
//         <div className="mb-8">
//           {/* Desktop Banner */}
//           {bannerDesktop && (
//             <img
//               src={bannerDesktop}
//               alt={`${title} Desktop Banner`}
//               className="hidden md:block w-full h-auto rounded-lg shadow-md"
//             />
//           )}
//           {/* Mobile Banner */}
//           {bannerMobile && (
//             <img
//               src={bannerMobile}
//               alt={`${title} Mobile Banner`}
//               className="block md:hidden w-full h-auto rounded-lg shadow-md"
//             />
//           )}
//         </div>
//       )}
//       {/* Section Header */}
//       <div className="text-center mb-10">
//         <Title text1={title.toUpperCase()} text2="COLLECTION" />
//       </div>
//       {/* Product Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-6">
//         {filteredProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//             discountPrice={item.discountPrice}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryCollection; 
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const CategoryCollection = ({
  title,
  filter,
  filterField = "collection",
  bannerDesktop,
  bannerMobile,
  noTopMargin
}) => {
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const normalizedFilter = filter.toString().replace(/\s+/g, '').toLowerCase();
    const filtered = products.filter(
      (item) =>
        item[filterField] &&
        item[filterField].toString().replace(/\s+/g, '').toLowerCase().includes(normalizedFilter)
    );
    setFilteredProducts(filtered);
  }, [products, filter, filterField]);

  return (
    <div className={`${noTopMargin ? 'mb-16' : 'my-16'} w-full overflow-x-hidden`}>
      {(bannerDesktop || bannerMobile) && (
        <div className="mb-8 w-full overflow-hidden">
          {/* Desktop Banner */}
          {bannerDesktop && (
            <img
              src={bannerDesktop}
              alt={`${title} Desktop Banner`}
              className="hidden md:block w-full h-auto object-cover"
            />
          )}
          {/* Mobile Banner */}
          {bannerMobile && (
            <img
              src={bannerMobile}
              alt={`${title} Mobile Banner`}
              className="block md:hidden w-full h-auto object-cover"
            />
          )}
        </div>
      )}
      
      {/* Section Header */}
      <div className="text-center px-4 sm:px-6 mb-10">
        <Title text1={title.toUpperCase()} text2="COLLECTION" />
      </div>

      {/* Product Grid */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 px-2 sm:px-4"> */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-4 px-0 sm:px-4">
        {filteredProducts.map((item, index) => (
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
};

export default CategoryCollection;
