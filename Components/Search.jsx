'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchPorduct } from '@/Redux/Fetch/fetch'
import { useSelector } from 'react-redux'
import { darkModee } from '@/Redux/DarkMode/darkMode';
const Search = () => {
  const darkMode = useSelector((state) => state.darkMode.mode)
  const dispatch = useDispatch()
    const [search, setsearch] = useState("")
    const searchProduct = ()=>{
      dispatch(searchPorduct(search))
      setsearch("")
    }
    const searchMotion = (delay)=>({
        initial: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay : delay } },
    })
  return (
    <motion.div className={`flex items-center ${darkMode ? 'bg-black' : 'bg-#ffffff'}`} variants={searchMotion(1)} initial="initial" animate="visible">
      <input type="text" className={`w-[90%] rounded-3xl p-3 font-black mx-5 ${darkMode ? 'text-blue-400' : 'text-gray-500'}`} placeholder='Search a Product' value={search} onChange={(e)=>setsearch(e.target.value)}/>
      <button className='text-xl rounded-2xl bg-blue-400 p-2 cursor-pointer hover:scale-105 hover:text-white' onClick={searchProduct}>Search</button>
    </motion.div>
  )
}

export default Search
