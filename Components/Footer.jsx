'use client'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { darkModee } from '@/Redux/DarkMode/darkMode';
const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode.mode)
  return (
    <div>
        <footer className={`${darkMode ? 'bg-black text-white' : 'bg-purple-50  text-gray-700' }  `}>
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8" >
        {/* Logo & Description */}
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 0.5}} className='overflow-x-hidden'>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-blue-400': ' text-gray-700'}`}>ShopMoze</h2>
          <p className="mt-2 text-sm">
            Your one-stop shop for all your needs. Quality products, unbeatable prices.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1}} className='overflow-x-hidden'>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </motion.div>

        {/* Customer Service */}
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 0.5}} className='overflow-x-hidden'>
          <h3 className="text-md font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </motion.div>

        {/* Newsletter / Social */}
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}} className='overflow-x-hidden'>
          <h3 className="text-md font-semibold mb-2">Stay Connected</h3>
          <p className="text-sm mb-2">Follow us on social media</p>
          <div className="flex space-x-3 text-gray-600">
            <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-700" /></a>
          </div>
        </motion.div>
      </div>

      <motion.div className="border-t border-gray-200 text-center text-sm py-4 overflow-x-hidden" whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration: 1}}>
        &copy; {new Date().getFullYear()} ShopMoze. All rights reserved.
      </motion.div>
    </footer>
      
    </div>
  )
}

export default Footer
