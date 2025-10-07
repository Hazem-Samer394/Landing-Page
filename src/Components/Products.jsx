import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      price: "$12.99",
      originalPrice: "$15.99",
      image:
        "https://paltimeps.ps/uploads//images/2dd38b123cc8007185954de8ad885655.jpg",
      discount: 18,
      isNew: true,
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description: "Topped with pepperoni slices and mozzarella cheese",
      price: "$14.99",
      image:
        "https://modo3.com/thumbs/fit630x300/164265/1490711030/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1_%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7_%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.jpg",
      discount: 0,
      isNew: false,
    },
    {
      id: 3,
      name: "Veggie Pizza",
      description: "Loaded with bell peppers, olives, mushrooms, and onions",
      price: "$13.99",
      originalPrice: "$16.99",
      image:
        "https://img.ananinja.com/media/ninja-catalog-42/restaurants/wbbr83vdqevv6ajgpuq463nwmf8y/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7%20%D9%85%D8%B4%D9%83%D9%84%20%D9%84%D8%AD%D9%88%D9%85%20(shobbak).jpg?w=1080&q=75",
      discount: 20,
      isNew: false,
    },
    {
      id: 4,
      name: "BBQ Chicken Pizza",
      description: "Grilled chicken with BBQ sauce and red onions",
      price: "$15.99",
      image: "https://img.lahloba.com/news/large/n632.jpg",
      discount: 0,
      isNew: true,
    },
    {
      id: 5,
      name: "Hawaiian Pizza",
      description: "Ham and pineapple topping for a tropical twist",
      price: "$14.49",
      originalPrice: "$16.49",
      image:
        "https://cdn.alweb.com/thumbs/3ajeen/article/fit727x484/1/%D8%A3%D9%81%D8%B6%D9%84-%D9%88%D8%B5%D9%81%D8%A7%D8%AA-%D9%84%D8%B9%D9%85%D9%84-%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.jpeg",
      discount: 12,
      isNew: false,
    },
    {
      id: 6,
      name: "Four Cheese Pizza",
      description: "Mozzarella, cheddar, parmesan, and gorgonzola cheese",
      price: "$16.99",
      image:
        "https://i0.wp.com/minna-pastry.com/wp-content/uploads/2024/12/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D9%81%D8%B1%D8%A7%D8%AE.png?fit=1080%2C1080&ssl=1",
      discount: 0,
      isNew: true,
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="product">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Pizzas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our delicious selection of pizzas made with fresh
            ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 cursor-pointer">
            View All Pizzas
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
