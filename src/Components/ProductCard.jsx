import React, { useState } from "react";
import { motion } from "framer-motion";

function ProductCard({ product, index }) {
  const { name, description, price, originalPrice, image, discount, isNew, rating, deliveryTime } = product;
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* الأزرار عند الهوفر */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center gap-3">
          {/* زر السلة */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
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
            onClick={() => setIsLiked(!isLiked)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isLiked ? "#ef4444" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={isLiked ? "#ef4444" : "currentColor"}
              className="w-5 h-5 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.071-1.679-3.75-3.75-3.75-1.09 0-2.063.47-2.75 1.219a4.002 4.002 0 00-7.5 0A3.744 3.744 0 004.5 4.5C2.43 4.5.75 6.179.75 8.25c0 6.716 11.25 11.25 11.25 11.25s11.25-4.534 11.25-11.25z"
              />
            </svg>
          </motion.button>

          {/* زر المعاينة السريعة */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
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
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {discount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
            >
              -{discount}%
            </motion.div>
          )}
          {isNew && (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
            >
              NEW
            </motion.div>
          )}
        </div>
      </div>

      {/* المحتوى السفلي */}
      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* التقييم ووقت التوصيل */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-sm">{deliveryTime}</span>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 text-xl mb-2 line-clamp-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e89f72] hover:bg-[#d18c65] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm"
          >
            Order Now
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductCard;