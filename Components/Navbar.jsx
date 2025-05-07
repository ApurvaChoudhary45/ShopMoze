'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { darkModee } from '@/Redux/DarkMode/darkMode';
const Navbar = () => {
  const darkMode = useSelector((state) => state.darkMode.mode)
  const dispatch = useDispatch()
    const navMotion = (delay)=>({
        initial: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay : delay } },
    })
  return (
    <motion.nav className={`flex justify-between items-center p-4 py-5 overflow-x-hidden ${darkMode ? 'bg-black': 'bg-#f4ecfd'}`} variants={navMotion(0.5)} initial="initial" animate="visible"> 
        {darkMode ? (<div className="text-3xl text-blue-400 font-bold">SHOPMOZE</div>) : (<div className="text-3xl text-blue-400 font-bold">SHOPMOZE</div>)}
        <label className="flex items-center cursor-pointer">
          {/* Switch Container */}
          <div className="relative">
            {/* Hidden checkbox */}
            <input type="checkbox" className="sr-only peer" onClick={()=>dispatch(darkModee())}/>

            {/* Slider */}
            <div className="w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-400 transition duration-300"></div>

            {/* Toggle circle */}
            <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-6"></div>
          </div>

          {/* Label */}
          <span className={`ml-3 text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-gray-700'}  dark:text-white`}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
        </label>

      </motion.nav>
  )
}

export default Navbar
