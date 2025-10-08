import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: "Logic4Go ",
      content: (
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
          We make the best pizzas with love and fresh ingredients. Bringing joy
          to every bite.
        </p>
      ),
    },
    {
      title: "Quick Links",
      list: ["About Us", "Menu", "Order Online", "Careers", "Privacy Policy"],
    },
    {
      title: "Categories",
      list: [
        "Classic Pizzas",
        "Vegetarian",
        "Meat Lovers",
        "Sides",
        "Beverages",
      ],
    },
    {
      title: "Contact Info",
      content: (
        <div className="space-y-3 text-gray-400 text-sm sm:text-base">
          <p>📍 456 Pizza Street, Food City</p>
          <p>📞 +1 (555) 987-6543</p>
          <p>✉️ contact@pizzahaven.com</p>
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-14" id="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {section.title}
              </h3>
              {section.list ? (
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  {section.list.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                section.content
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm text-center sm:text-left"
        >
          <p>© {year} Logic4IT. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 sm:mt-0">
            {["Terms", "Privacy", "Cookies"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
