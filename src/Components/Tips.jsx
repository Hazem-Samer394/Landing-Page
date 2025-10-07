import React from "react";
import { motion } from "framer-motion";

function Tips() {
  const tips = [
    {
      id: 1,
      title: "Perfect Dough Tips",
      description:
        "Learn how to knead and prepare the perfect pizza dough for a crispy and soft base.",
      image:
        "https://paltimeps.ps/uploads//images/2dd38b123cc8007185954de8ad885655.jpg",
      readTime: "5 min read",
      category: "Pizza Basics",
    },
    {
      id: 2,
      title: "Choosing Toppings",
      description:
        "Discover the best ingredient combinations to create mouthwatering pizzas.",
      image:
        "https://modo3.com/thumbs/fit630x300/164265/1490711030/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1_%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7_%D8%A8%D8%A8%D8%B1%D9%88%D9%86%D9%8A.jpg",
      readTime: "7 min read",
      category: "Toppings Guide",
    },
    {
      id: 3,
      title: "Baking Techniques",
      description:
        "Maximize the flavor and texture of your pizza with these essential baking tips.",
      image:
        "https://img.ananinja.com/media/ninja-catalog-42/restaurants/wbbr83vdqevv6ajgpuq463nwmf8y/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7%20%D9%85%D8%B4%D9%83%D9%84%20%D9%84%D8%AD%D9%88%D9%85%20(shobbak).jpg?w=1080&q=75",
      readTime: "6 min read",
      category: "Cooking Tips",
    },
  ];

  return (
    <div className="py-16 bg-gray-50" id="tips">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pizza Tips & Tricks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice and inspiration to create the perfect pizza at home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
            const middleIndex = Math.floor(tips.length / 2);
            const delay = Math.abs(index - middleIndex) * 0.3;

            return (
              <motion.article
                key={tip.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:scale-105"
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-orange-500 bg-orange-100 px-2 py-1 rounded-full">
                      {tip.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {tip.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-200">
                    {tip.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {tip.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 8 }}
                    className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200 flex items-center gap-2"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gray-900 cursor-pointer hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
            View All Pizza Tips
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Tips;
