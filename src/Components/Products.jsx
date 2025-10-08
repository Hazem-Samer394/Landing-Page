import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and fresh basil leaves",
      price: "$12.99",
      originalPrice: "$15.99",
      image: "https://paltimeps.ps/uploads//images/2dd38b123cc8007185954de8ad885655.jpg",
      discount: 18,
      isNew: true,
      rating: 4.8,
      deliveryTime: "20-25 min"
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description: "Loaded with pepperoni slices and extra mozzarella cheese",
      price: "$14.99",
      image: "https://modo3.com/thumbs/fit630x300/164265/1490711030/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1_%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7_%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.jpg",
      discount: 0,
      isNew: false,
      rating: 4.9,
      deliveryTime: "15-20 min"
    },
    {
      id: 3,
      name: "Veggie Delight",
      description: "Bell peppers, olives, mushrooms, onions, and fresh tomatoes",
      price: "$13.99",
      originalPrice: "$16.99",
      image: "https://img.ananinja.com/media/ninja-catalog-42/restaurants/wbbr83vdqevv6ajgpuq463nwmf8y/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7%20%D9%85%D8%B4%D9%83%D9%84%20%D9%84%D8%AD%D9%88%D9%85%20(shobbak).jpg?w=1080&q=75",
      discount: 20,
      isNew: false,
      rating: 4.6,
      deliveryTime: "25-30 min"
    },
    {
      id: 4,
      name: "BBQ Chicken Pizza",
      description: "Grilled chicken with BBQ sauce, red onions, and cilantro",
      price: "$15.99",
      image: "https://img.lahloba.com/news/large/n632.jpg",
      discount: 0,
      isNew: true,
      rating: 4.7,
      deliveryTime: "20-25 min"
    },
    {
      id: 5,
      name: "Hawaiian Pizza",
      description: "Ham and pineapple topping for a sweet and savory experience",
      price: "$14.49",
      originalPrice: "$16.49",
      image: "https://cdn.alweb.com/thumbs/3ajeen/article/fit727x484/1/%D8%A3%D9%81%D8%B6%D9%84-%D9%88%D8%B5%D9%81%D8%A7%D8%AA-%D9%84%D8%B9%D9%85%D9%84-%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.jpeg",
      discount: 12,
      isNew: false,
      rating: 4.5,
      deliveryTime: "18-22 min"
    },
    {
      id: 6,
      name: "Four Cheese Pizza",
      description: "Mozzarella, cheddar, parmesan, and gorgonzola cheese blend",
      price: "$16.99",
      image: "https://i0.wp.com/minna-pastry.com/wp-content/uploads/2024/12/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D9%81%D8%B1%D8%A7%D8%AE.png?fit=1080%2C1080&ssl=1",
      discount: 0,
      isNew: true,
      rating: 4.8,
      deliveryTime: "22-28 min"
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Delicious Pizzas
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our mouth-watering selection of pizzas made with the freshest ingredients and authentic recipes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button 
            className="bg-[#e89f72] hover:bg-[#d18c65] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Pizzas
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;