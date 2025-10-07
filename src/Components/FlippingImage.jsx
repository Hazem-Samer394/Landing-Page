import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const images = [
  "https://paltimeps.ps/uploads//images/2dd38b123cc8007185954de8ad885655.jpg",
  "https://img.lahloba.com/news/large/n632.jpg",
  "https://i0.wp.com/minna-pastry.com/wp-content/uploads/2024/12/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D9%81%D8%B1%D8%A7%D8%AE.png?fit=1080%2C1080&ssl=1"
];

function FlippingImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[800px] flex justify-center items-center mx-auto overflow-hidden rounded-xl hidden md:block">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Sofa"
          className="w-[700px] h-[400px] object-cover rounded-xl select-none"
          initial={{ opacity: 0, x: 100 }}  
          animate={{ opacity: 1, x: 0 }}    
          exit={{ opacity: 0, x: -100 }}     
          transition={{ duration: 0.8, ease: 'easeInOut' }} 
        />
      </AnimatePresence>
    </div>
  );
}

export default FlippingImage;
