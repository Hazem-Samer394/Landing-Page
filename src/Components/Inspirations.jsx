import React, { useState } from "react";
import { motion } from "framer-motion";

function Inspirations() {
  const inspirations = [
    {
      id: 1,
      title: "Classic Margherita",
      description:
        "Enjoy the timeless flavors of our classic Margherita pizza with fresh basil and mozzarella",
      image:
        "https://paltimeps.ps/uploads//images/2dd38b123cc8007185954de8ad885655.jpg",
      category: "Margherita",
      direction: "left",
    },
    {
      id: 2,
      title: "Pepperoni Feast",
      description:
        "Loaded with spicy pepperoni slices and gooey mozzarella cheese for pizza lovers",
      image:
        "https://modo3.com/thumbs/fit630x300/164265/1490711030/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1_%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7_%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.jpg",
      category: "Pepperoni",
      direction: "bottom",
    },
    {
      id: 3,
      title: "Veggie Delight",
      description:
        "A healthy and colorful choice with bell peppers, mushrooms, and olives",
      image:
        "https://img.ananinja.com/media/ninja-catalog-42/restaurants/wbbr83vdqevv6ajgpuq463nwmf8y/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7%20%D9%85%D8%B4%D9%83%D9%84%20%D9%84%D8%AD%D9%88%D9%85%20(shobbak).jpg?w=1080&q=75",
      category: "Veggie",
      direction: "right",
    },
  ];

  const getInitial = (direction) => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -150 };
      case "right":
        return { opacity: 0, x: 150 };
      case "bottom":
        return { opacity: 0, y: 150 };
      default:
        return { opacity: 0 };
    }
  };

  const [showAll, setShowAll] = useState(false);
  const visibleInspirations = showAll ? inspirations : inspirations.slice(0, 2);

  return (
    <div className="py-16 bg-white" id="inspirations">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pizza Inspirations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get inspired by our delicious pizza creations and flavor combinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleInspirations.map((inspiration, index) => (
            <motion.div
              key={inspiration.id}
              initial={getInitial(inspiration.direction)}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={inspiration.image}
                alt={inspiration.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-sm font-medium text-orange-400 mb-2 block">
                    {inspiration.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    {inspiration.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {inspiration.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            {showAll ? "Show Less" : "View More Pizzas"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Inspirations;
