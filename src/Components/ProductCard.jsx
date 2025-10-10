import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRight, FaClock, FaStar, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

function PizzaProducts() {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const pizzas = [
    {
      id: 1,
      name: "Margherita Classic",
      description: "Fresh tomato sauce, mozzarella cheese, and basil leaves on our signature crust",
      price: "$12.99",
      originalPrice: "$15.99",
      image: "/api/placeholder/400/300",
      discount: 19,
      isNew: true,
      rating: 4.8,
      deliveryTime: "25-35 min",
      category: "Vegetarian",
      spiceLevel: 0,
      size: "Medium",
      ingredients: ["Tomato", "Mozzarella", "Basil", "Olive Oil"]
    },
    {
      id: 2,
      name: "Pepperoni Supreme",
      description: "Double pepperoni, extra cheese, and our special pizza sauce",
      price: "$16.99",
      originalPrice: "$19.99",
      image: "/api/placeholder/400/300",
      discount: 15,
      isNew: false,
      rating: 4.9,
      deliveryTime: "30-40 min",
      category: "Meat Lovers",
      spiceLevel: 2,
      size: "Large",
      ingredients: ["Pepperoni", "Mozzarella", "Pizza Sauce", "Herbs"]
    },
    {
      id: 3,
      name: "BBQ Chicken Deluxe",
      description: "Grilled chicken, BBQ sauce, red onions, and cilantro on crispy crust",
      price: "$18.99",
      originalPrice: null,
      image: "/api/placeholder/400/300",
      discount: 0,
      isNew: true,
      rating: 4.7,
      deliveryTime: "35-45 min",
      category: "Specialty",
      spiceLevel: 1,
      size: "Large",
      ingredients: ["Chicken", "BBQ Sauce", "Onions", "Cilantro"]
    },
    {
      id: 4,
      name: "Veggie Paradise",
      description: "Bell peppers, mushrooms, olives, onions, and tomatoes with extra cheese",
      price: "$14.99",
      originalPrice: "$17.99",
      image: "/api/placeholder/400/300",
      discount: 17,
      isNew: false,
      rating: 4.6,
      deliveryTime: "25-35 min",
      category: "Vegetarian",
      spiceLevel: 0,
      size: "Medium",
      ingredients: ["Bell Peppers", "Mushrooms", "Olives", "Onions", "Tomatoes"]
    },
    {
      id: 5,
      name: "Spicy Meat Feast",
      description: "Pepperoni, sausage, jalapeños, and spicy tomato sauce for heat lovers",
      price: "$20.99",
      originalPrice: null,
      image: "/api/placeholder/400/300",
      discount: 0,
      isNew: true,
      rating: 4.8,
      deliveryTime: "30-40 min",
      category: "Spicy",
      spiceLevel: 3,
      size: "Large",
      ingredients: ["Pepperoni", "Sausage", "Jalapeños", "Spicy Sauce"]
    },
    {
      id: 6,
      name: "Four Cheese Bliss",
      description: "Mozzarella, parmesan, gorgonzola, and ricotta cheese blend",
      price: "$15.99",
      originalPrice: "$18.99",
      image: "/api/placeholder/400/300",
      discount: 16,
      isNew: false,
      rating: 4.5,
      deliveryTime: "20-30 min",
      category: "Vegetarian",
      spiceLevel: 0,
      size: "Medium",
      ingredients: ["Mozzarella", "Parmesan", "Gorgonzola", "Ricotta"]
    },
    {
      id: 7,
      name: "Hawaiian Tropical",
      description: "Ham, pineapple, and mozzarella cheese with sweet and savory flavors",
      price: "$13.99",
      originalPrice: null,
      image: "/api/placeholder/400/300",
      discount: 0,
      isNew: false,
      rating: 4.4,
      deliveryTime: "25-35 min",
      category: "Classic",
      spiceLevel: 0,
      size: "Medium",
      ingredients: ["Ham", "Pineapple", "Mozzarella", "Tomato Sauce"]
    },
    {
      id: 8,
      name: "Supreme Deluxe",
      description: "All our best toppings including pepperoni, sausage, veggies, and extra cheese",
      price: "$22.99",
      originalPrice: "$26.99",
      image: "/api/placeholder/400/300",
      discount: 15,
      isNew: true,
      rating: 4.9,
      deliveryTime: "35-45 min",
      category: "Meat Lovers",
      spiceLevel: 1,
      size: "Family",
      ingredients: ["Pepperoni", "Sausage", "Veggies", "Extra Cheese"]
    }
  ];

  const categories = ["All", "Vegetarian", "Meat Lovers", "Spicy", "Specialty", "Classic"];

  return (
    <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 lg:py-24" id="pizzas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Delicious Pizzas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Handcrafted with the finest ingredients, delivered hot and fresh to your door
          </p>

          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  category === "All" 
                    ? "bg-[#e69d70] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-[#e69d70] hover:text-white border border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pizzas.map((pizza, index) => (
            <motion.div
              key={pizza.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <FaShoppingCart className="w-4 h-4 text-gray-800" />
                  </motion.button>

                  <motion.button
                    onClick={() => toggleLike(pizza.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <FaHeart 
                      className={`w-4 h-4 ${likedItems[pizza.id] ? 'text-red-500 fill-current' : 'text-gray-800'}`} 
                    />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <FaEye className="w-4 h-4 text-gray-800" />
                  </motion.button>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {pizza.discount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                    >
                      -{pizza.discount}%
                    </motion.div>
                  )}
                  {pizza.isNew && (
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

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[#e69d70] text-white px-2 py-1 rounded-full text-xs font-medium">
                    {pizza.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Rating and Delivery Time */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{pizza.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <FaClock className="w-3 h-3" />
                    <span className="text-sm">{pizza.deliveryTime}</span>
                  </div>
                </div>

                {/* Pizza Name and Description */}
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
                  {pizza.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                  {pizza.description}
                </p>

                {/* Size and Spice Level */}
                <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                  <span>Size: {pizza.size}</span>
                  <span>
                    {Array.from({ length: 3 }, (_, i) => (
                      <span key={i} className={i < pizza.spiceLevel ? "text-red-500" : "text-gray-300"}>
                        🌶️
                      </span>
                    ))}
                  </span>
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">{pizza.price}</span>
                    {pizza.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {pizza.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#e69d70] hover:bg-[#d18c65] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    Order Now
                    <FaArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-[#e69d70] to-[#d18c65] rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Hungry for More?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Download our app for exclusive deals, faster ordering, and personalized recommendations!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#e69d70] px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download App
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#e69d70] transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Menu
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PizzaProducts;