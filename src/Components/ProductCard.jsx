import React from "react";
import { motion } from "framer-motion";

function ProductCard({ product, index }) {
const { name, description, price, originalPrice, image, discount, isNew } = product;

return (
<motion.div
className="group relative bg-white rounded-xl shadow-md overflow-hidden"
initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
>
{/* الصورة + الهوفر */} <div className="relative overflow-hidden">
<motion.img
src={image}
alt={name}
className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.2 }}
/>

    {/* الأزرار عند الهوفر */}
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
      {/* زر السلة */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 2.25h2.25l2.1 12.6a2.25 2.25 0 002.25 1.875h9a2.25 2.25 0 002.25-1.875L21.75 6.75H6.75"
          />
        </svg>
      </motion.button>

      {/* زر الإعجاب */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.071-1.679-3.75-3.75-3.75-1.09 0-2.063.47-2.75 1.219a4.002 4.002 0 00-7.5 0A3.744 3.744 0 004.5 4.5C2.43 4.5.75 6.179.75 8.25c0 6.716 11.25 11.25 11.25 11.25s11.25-4.534 11.25-11.25z"
          />
        </svg>
      </motion.button>

      {/* زر المعاينة */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955a.75.75 0 011.06 0L21.25 12m-19 0v8.25a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V12"
          />
        </svg>
      </motion.button>
    </div>

    {/* بادجات الخصم والجديد */}
    {discount > 0 && (
      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold z-20">
        -{discount}%
      </div>
    )}
    {isNew && (
      <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold z-20">
        New
      </div>
    )}
  </div>

  {/* المحتوى السفلي */}
  <motion.div
    className="p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <h3 className="font-semibold text-gray-900 text-lg mb-2">{name}</h3>
    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-gray-900">{price}</span>
      {originalPrice && (
        <span className="text-sm text-gray-500 line-through">
          {originalPrice}
        </span>
      )}
    </div>
  </motion.div>
</motion.div>


);
}

export default ProductCard;
