'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { darkModee } from '@/Redux/DarkMode/darkMode';
const About = () => {
    const darkMode = useSelector((state) => state.darkMode.mode)
  
  const aboutTion = (delay) => ({
    initial: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: delay } },
  });

  const aboutMo = (delay) => ({
    initial: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: delay } },
  });

  return (
    <div className={`py-10 px-4 overflow-x-hidden ${darkMode ? 'bg-black' : 'bg-#f4ecfd'}`} >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        
        {/* Text Section */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left overflow-x-hidden"
          variants={aboutTion(0.5)} 
          initial="initial" 
          animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 dark:text-blue-400 leading-tight tracking-tight mb-6">
            Welcome to <span className="text-blue-600 dark:text-blue-300">SHOPMOZE</span> – Your Smart Shopping Companion
          </h1>
          <motion.p 
            className="text-lg leading-relaxed text-gray-600  overflow-x-hidden"
            variants={aboutMo(1)} 
            initial="initial" 
            animate="visible"
          >
            Discover a clean, fast, and delightful shopping experience. With beautifully designed product listings, smooth navigation, and powerful search and filter tools, <span className="font-semibold text-primary">ShopMoze</span> makes it easy to find exactly what you're looking for. Whether you're browsing for fashion, gadgets, or home essentials, enjoy a seamless experience across all devices. Shopping online has never been this smooth.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center overflow-x-hidden"
          variants={aboutTion(1)} 
          initial="initial" 
          animate="visible"
        >
          <Image 
            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="About Us" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default About;
