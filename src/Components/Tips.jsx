import React from "react";
import { motion } from "framer-motion";

function Tips() {
  const tips = [
    {
      id: 1,
      title: "Perfect Dough Secrets",
      description: "Discover the art of creating the perfect pizza dough - crispy edges, soft center, and that authentic Italian texture that makes every bite unforgettable.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      readTime: "5 min read",
      category: "Dough Mastery",
      difficulty: "Beginner",
      tipsCount: 7
    },
    {
      id: 2,
      title: "Topping Combinations",
      description: "Explore creative topping combinations that will transform your pizza from ordinary to extraordinary. Balance flavors like a professional chef.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      readTime: "7 min read",
      category: "Flavor Guide",
      difficulty: "Easy",
      tipsCount: 12
    },
    {
      id: 3,
      title: "Baking Perfection",
      description: "Master the oven techniques that give your pizza that perfect char, bubbly cheese, and crispy crust that everyone loves.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      readTime: "6 min read",
      category: "Cooking Techniques",
      difficulty: "Intermediate",
      tipsCount: 9
    },
    {
      id: 4,
      title: "Sauce Secrets",
      description: "Learn how to make the perfect pizza sauce from fresh tomatoes and herbs. The foundation of every great pizza starts here.",
      image: "https://images.unsplash.com/photo-1562059394-e7b6f21d8e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      readTime: "4 min read",
      category: "Sauces",
      difficulty: "Beginner",
      tipsCount: 5
    },
    {
      id: 5,
      title: "Cheese Selection",
      description: "From mozzarella to gorgonzola, understand which cheeses work best for different pizza styles and how to achieve the perfect melt.",
      image: "https://images.unsplash.com/photo-1546039907-3155e31eb6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      readTime: "8 min read",
      category: "Ingredients",
      difficulty: "Easy",
      tipsCount: 10
    },
    {
      id: 6,
      title: "Wine Pairing Guide",
      description: "Discover the perfect wine companions for your pizza creations. Elevate your dining experience with these expert pairing suggestions.",
      image: "https://images.unsplash.com/photo-1474722883778-792e7990302a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      readTime: "5 min read",
      category: "Pairing",
      difficulty: "Intermediate",
      tipsCount: 6
    }
  ];

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
      y: 60,
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Easy": return "bg-blue-100 text-blue-800";
      case "Intermediate": return "bg-orange-100 text-orange-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-orange-50 to-amber-50" id="tips">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pizza Mastery Tips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Become a pizza expert with our collection of professional tips, techniques, and secrets
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {tips.map((tip) => (
            <motion.article
              key={tip.id}
              variants={itemVariants}
              whileHover="hover"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
            >
              {/* الصورة مع Overlay */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80`;
                  }}
                />
                
                {/* Overlay معلومات سريعة */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#e89f72] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {tip.category}
                  </span>
                  <span className={`${getDifficultyColor(tip.difficulty)} px-2 py-1 rounded-full text-xs font-medium shadow-sm`}>
                    {tip.difficulty}
                  </span>
                </div>

                {/* عدد النصائح */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {tip.tipsCount} tips
                </div>
              </div>

              {/* المحتوى */}
              <div className="p-6">
                {/* وقت القراءة */}
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm text-gray-500 font-medium">
                    {tip.readTime}
                  </span>
                </div>

                {/* العنوان */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e89f72] transition-colors duration-200 line-clamp-2">
                  {tip.title}
                </h3>

                {/* الوصف */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {tip.description}
                </p>

                {/* زر القراءة */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#e89f72] font-semibold hover:text-[#d18c65] transition-colors duration-200 flex items-center gap-2 group/btn"
                >
                  Read Guide
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.button>
              </div>

              {/* تأثير عند Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#e89f72] rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-[#e89f72] hover:bg-[#d18c65] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-lg flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Pizza Guides
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Tips;