import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Inspirations() {
  const inspirations = [
    {
      id: 1,
      title: "Classic Margherita",
      description: "Fresh basil, mozzarella, and tomato sauce - the Italian classic",
      image: "https://paltimeps.ps/uploads//images/2dd38b123cc8007185954de8ad885655.jpg",
      category: "Margherita",
      cookingTime: "15 min",
      rating: 4.9,
      price: "$12.99"
    },
    {
      id: 2,
      title: "Pepperoni Feast",
      description: "Spicy pepperoni with extra cheese and secret seasoning",
      image: "https://modo3.com/thumbs/fit630x300/164265/1490711030/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1_%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7_%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.jpg",
      category: "Pepperoni",
      cookingTime: "18 min",
      rating: 4.8,
      price: "$14.99"
    },
    {
      id: 3,
      title: "Veggie Delight",
      description: "Colorful vegetables with our special herb blend",
      image: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/wbbr83vdqevv6ajgpuq463nwmf8y/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7%20%D9%85%D8%B4%D9%83%D9%84%20%D9%84%D8%AD%D9%88%D9%85%20(shobbak).jpg?w=1080&q=75",
      category: "Vegetarian",
      cookingTime: "20 min",
      rating: 4.7,
      price: "$13.99"
    },
    {
      id: 4,
      title: "BBQ Chicken",
      description: "Grilled chicken with smoky BBQ sauce and red onions",
      image: "https://img.lahloba.com/news/large/n632.jpg",
      category: "Chicken",
      cookingTime: "22 min",
      rating: 4.8,
      price: "$15.99"
    },
    {
      id: 5,
      title: "Hawaiian Paradise",
      description: "Sweet pineapple and ham combination with creamy sauce",
      image: "https://cdn.alweb.com/thumbs/3ajeen/article/fit727x484/1/%D8%A3%D9%81%D8%B6%D9%84-%D9%88%D8%B5%D9%81%D8%A7%D8%AA-%D9%84%D8%B9%D9%85%D9%84-%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.jpeg",
      category: "Hawaiian",
      cookingTime: "17 min",
      rating: 4.6,
      price: "$14.49"
    },
    {
      id: 6,
      title: "Four Cheese",
      description: "Mozzarella, cheddar, parmesan, and gorgonzola blend",
      image: "https://i0.wp.com/minna-pastry.com/wp-content/uploads/2024/12/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D9%81%D8%B1%D8%A7%D8%AE.png?fit=1080%2C1080&ssl=1",
      category: "Cheese",
      cookingTime: "19 min",
      rating: 4.9,
      price: "$16.99"
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const visibleInspirations = showAll ? inspirations : inspirations.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white" id="inspirations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pizza Inspirations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our mouth-watering pizza collection crafted with passion and the finest ingredients
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimatePresence>
            {visibleInspirations.map((inspiration) => (
              <motion.div
                key={inspiration.id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 cursor-pointer"
                layout
                onMouseEnter={() => handleCardHover(inspiration.id)}
                onMouseLeave={handleCardLeave}
              >
                {/* الصورة */}
                <div className="relative overflow-hidden h-64 sm:h-72">
                  <motion.img
                    src={inspiration.image}
                    alt={inspiration.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay مع المعلومات - تظهر فقط عند التمرير */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredCard === inspiration.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredCard === inspiration.id ? 1 : 0,
                          y: hoveredCard === inspiration.id ? 0 : 20
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="bg-[#e89f72] text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {inspiration.category}
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                            ⏱️ {inspiration.cookingTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 leading-tight">
                          {inspiration.title}
                        </h3>
                        
                        <p className="text-sm opacity-90 leading-relaxed mb-3">
                          {inspiration.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              <span className="text-sm font-medium">{inspiration.rating}</span>
                            </div>
                          </div>
                          <span className="text-lg font-bold text-[#e89f72]">
                            {inspiration.price}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* المعلومات الأساسية (تختفي عند التمرير) */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6"
                    animate={{ 
                      opacity: hoveredCard === inspiration.id ? 0 : 1,
                      y: hoveredCard === inspiration.id ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-[#e89f72] text-white px-2 py-1 rounded-md text-xs font-semibold">
                          {inspiration.category}
                        </span>
                        <span className="text-sm font-medium">{inspiration.price}</span>
                      </div>
                      <h3 className="font-bold text-lg leading-tight">
                        {inspiration.title}
                      </h3>
                    </div>
                  </motion.div>
                </div>

                {/* زر الطلب السريع */}
                <motion.button
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredCard === inspiration.id ? 1 : 0,
                    scale: hoveredCard === inspiration.id ? 1 : 0.8
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: "#e89f72", color: "white" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#e89f72] hover:bg-[#d18c65] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "Show Less" : "View More Inspirations"}
            <span className="ml-2">🍕</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Inspirations;