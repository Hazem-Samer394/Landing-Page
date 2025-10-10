import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaTruck, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const appScreenshots = [
    {
      id: 1,
      title: "Package Tracking",
      description: "Real-time tracking interface",
      content: (
        <div className="bg-gradient-to-b from-blue-50 to-indigo-100 p-4 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <FaTruck className="text-white text-base" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Logic4Go</h3>
              <p className="text-sm text-gray-600">Smart Delivery</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Package Status</span>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">In Transit</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Package #LG123456</p>
                <p className="text-xs text-gray-600">Expected: 2:30 PM</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Delivery Progress</span>
              <span className="text-xs text-blue-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Picked up</span>
              <span>In transit</span>
              <span>Delivered</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Delivery History",
      description: "Past deliveries overview",
      content: (
        <div className="bg-gradient-to-b from-green-50 to-emerald-100 p-4 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <FaClock className="text-white text-base" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Logic4Go</h3>
              <p className="text-sm text-gray-600">Delivery History</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-3 shadow-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">#LG789012</span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Delivered</span>
              </div>
              <p className="text-xs text-gray-600">Dec 15, 2024 • 3:45 PM</p>
            </div>
            
            <div className="bg-white rounded-xl p-3 shadow-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">#LG345678</span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Delivered</span>
              </div>
              <p className="text-xs text-gray-600">Dec 14, 2024 • 11:20 AM</p>
            </div>
            
            <div className="bg-white rounded-xl p-3 shadow-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">#LG901234</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">In Transit</span>
              </div>
              <p className="text-xs text-gray-600">Expected: Dec 16, 2024</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Service Selection",
      description: "Choose delivery options",
      content: (
        <div className="bg-gradient-to-b from-purple-50 to-violet-100 p-4 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <FaMapMarkerAlt className="text-white text-base" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Logic4Go</h3>
              <p className="text-sm text-gray-600">Select Service</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-md border-2 border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-900">Express Delivery</span>
                <span className="text-sm font-bold text-blue-600">$9.99</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">Same-day delivery</p>
              <div className="w-full bg-blue-200 rounded-full h-1">
                <div className="bg-blue-600 h-1 rounded-full w-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-900">Standard Delivery</span>
                <span className="text-sm font-bold text-green-600">$5.99</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">2-3 business days</p>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-600 h-1 rounded-full w-2/3"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-900">Economy Delivery</span>
                <span className="text-sm font-bold text-gray-600">$3.99</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">5-7 business days</p>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-gray-600 h-1 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % appScreenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [appScreenshots.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % appScreenshots.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  };

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto">
      {/* iPhone 17 Mockup */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10"></div>
        
        <div className="bg-white rounded-[2.5rem] overflow-hidden border-[6px] border-gray-800">
          {/* Status Bar */}
          <div className="bg-transparent h-12 flex items-center justify-between px-6 text-black text-sm font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-4 h-2 bg-black rounded-sm"></div>
            </div>
          </div>
          
          {/* App Content - Simple animation without direction */}
          <div className="h-[640px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {appScreenshots[currentImage].content}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Home Indicator */}
          <div className="bg-transparent h-4 flex items-center justify-center">
            <div className="w-32 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-200 border border-gray-200"
      >
        <FaChevronLeft className="w-4 h-4 text-gray-600" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-200 border border-gray-200"
      >
        <FaChevronRight className="w-4 h-4 text-gray-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {appScreenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-blue-600 w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Image Info */}
      <div className="text-center mt-4">
        <h4 className="font-semibold text-gray-900 text-sm">
          {appScreenshots[currentImage].title}
        </h4>
        <p className="text-gray-600 text-xs">
          {appScreenshots[currentImage].description}
        </p>
      </div>
    </div>
  );
}

export default ImageCarousel;