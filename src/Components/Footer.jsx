import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaApple, FaGooglePlay, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const sections = [
    {
      title: "Logic4Go",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <FaTruck className="text-white text-lg" />
            </div>
            <span className="text-white font-bold text-xl">Logic4Go</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Smart deliveries made simple. Experience the future of logistics 
            with our intelligent delivery platform by Logic4IT.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Quick Links",
      list: ["About Us", "How It Works", "Features", "Pricing", "Contact Us", "Privacy Policy"],
    },
    {
      title: "Services",
      list: [
        "Real-time Tracking",
        "Secure Payments",
        "Express Delivery",
        "Business Solutions",
        "API Integration",
        "Customer Support",
      ],
    },
    {
      title: "Contact Info",
      content: (
        <div className="space-y-3 text-gray-400 text-sm sm:text-base">
          <p>📍 123 Tech Street, Innovation City</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ support@logic4go.com</p>
          <p>🌐 www.logic4go.com</p>
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

        {/* App Store Badges */}
        <motion.div
          className="border-t border-gray-800 mt-10 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Download Logic4Go App
            </h3>
            <p className="text-gray-400 mb-6">
              Get the app and experience smart delivery on the go
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaApple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.a>
              <motion.a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGooglePlay className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm text-center sm:text-left"
        >
          <p>© {year} Logic4Go by Logic4IT. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 sm:mt-0">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item, i) => (
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
