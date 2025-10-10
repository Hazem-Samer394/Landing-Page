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
        <div className="bg-gradient-to-b from-blue-50 to-indigo-100 p-6 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <FaTruck className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Logic4Go</h3>
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
                <p className="text-xs text-gray-600">Expected delivery: 2:30 PM</p>
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
        <div className="bg-gradient-to-b from-green-50 to-emerald-100 p-6 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <FaClock className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Logic4Go</h3>
              <p className="text-sm text-gray-600">Delivery History</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-3 shadow-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Package #LG789012</span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Delivered</span>
              </div>
              <p className="text-xs text-gray-600">Delivered on Dec 15, 2024 at 3:45 PM</p>
            </div>
            
            <div className="bg-white rounded-xl p-3 shadow-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Package #LG345678</span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Delivered</span>
              </div>
              <p className="text-xs text-gray-600">Delivered on Dec 14, 2024 at 11:20 AM</p>
            </div>
            
            <div className="bg-white rounded-xl p-3 shadow-md">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">Package #LG901234</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">In Transit</span>
              </div>
              <p className="text-xs text-gray-600">Expected delivery: Dec 16, 2024</p>
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
        <div className="bg-gradient-to-b from-purple-50 to-violet-100 p-6 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <FaMapMarkerAlt className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Logic4Go</h3>
              <p className="text-sm text-gray-600">Select Service</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-md border-2 border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Express Delivery</span>
                <span className="text-sm font-bold text-blue-600">$9.99</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">Same-day delivery</p>
              <div className="w-full bg-blue-200 rounded-full h-1">
                <div className="bg-blue-600 h-1 rounded-full w-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Standard Delivery</span>
                <span className="text-sm font-bold text-green-600">$5.99</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">2-3 business days</p>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-600 h-1 rounded-full w-2/3"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Economy Delivery</span>
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
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [appScreenshots.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % appScreenshots.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  };

  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto">
      {/* Phone Mockup */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-blue-600 h-8 flex items-center justify-between px-6 text-white text-xs">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
              <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
              <div className="w-4 h-2 bg-white/30 rounded-sm"></div>
            </div>
            <span>100%</span>
          </div>
          
          {/* App Content with Carousel */}
          <div className="h-[500px] relative overflow-hidden">
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
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-200"
      >
        <FaChevronLeft className="w-4 h-4 text-gray-600" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-200"
      >
        <FaChevronRight className="w-4 h-4 text-gray-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
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