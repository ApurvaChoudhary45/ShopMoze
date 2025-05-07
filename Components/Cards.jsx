'use client'
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
import { displayData } from '@/Redux/Fetch/fetch';
import { addFavorite } from '@/Redux/AddFav/AddFav';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { addItem, updateCart } from '@/Redux/cartItems/updateCart';

import { darkModee } from '@/Redux/DarkMode/darkMode';
const Cards = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.fetch.cards)
    const search = useSelector((state) => state.fetch.search)
    const addfav = useSelector((state) => state.favroite.addfav)
    const CartItems = useSelector((state) => state.counter.items)
    const [select, setselect] = useState('')
    const [remove, setremove] = useState('')
    const [open, setopen] = useState(false)
    const darkMode = useSelector((state) => state.darkMode.mode)
  
    
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
        const jsonData = await response.json();
        dispatch(displayData(jsonData))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    }, [dispatch, search]);

    const addFav = (id)=>{
      dispatch(addFavorite(id))
      setselect('Added to Favorite')
      setTimeout(() => {
        setselect('')
      }, 2000);
    }
    const removeFav = (id)=>{
      dispatch(addFavorite(id))
      setremove('Removed from Favorite')
      setTimeout(() => {
        setremove('')
      }, 2000);
    }
    const cartupdate = (item)=>{
      dispatch(addItem(item))
    }
    const openCart = ()=>{
      setopen(!open)
    }
  return (
    <div className={darkMode ? 'bg-black' : 'bg-#f4ecfd'}>
      <div>
        <motion.h1 className='font-bold text-4xl text-blue-400 text-center py-10 overflow-x-hidden' whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:100}} transition={{duration: 0.5}}>Products</motion.h1>
      </div>
      <motion.svg
                viewBox="0 0 1440 100"
                className="w-full h-[100px] mt-2 overflow-x-hidden"
                preserveAspectRatio="none"
                whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1}}
                // variants={separator(1)} initial="initial" animate="animate"

            >
                <defs>
                    <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3B82F6" />  {/* Blue */}
                        <stop offset="100%" stopColor="#60A5FA" /> {/* Light-Blue */}
                    </linearGradient>
                </defs>
                <path
                    d="M0,0 C480,100 960,100 1440,0"
                    fill="none"
                    stroke="url(#strokeGradient)"
                    strokeWidth="5"
                />
            </motion.svg>
            <div className='flex justify-end items-center mx-4 gap-5'>
              <motion.div className='bg-purple-50 p-2 rounded-lg shadow-md flex items-center gap-2 cursor-pointer overflow-x-hidden' whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}}>
              <FaShoppingCart className='text-blue-400 text-3xl' onClick={openCart} />
              <div className='mx-3'>{CartItems.length}</div>
              </motion.div>
            </div>
            {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h4 className="font-semibold mb-2">Cart Items</h4>
            {CartItems.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
                {CartItems.map((item) => (
                  <li key={item.id} className="py-2 flex justify-between text-sm">
                    <span>{item.title}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            )}
            <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 text-sm">
              Go to Checkout
            </button>
          </div>
        </div>
      )}
            
            <div className='md:grid md:grid-cols-3 md:gap-3 md:py-4 flex flex-col gap-2'>
            {data?.products?.map(item=>{    
              const isFavorite = addfav.includes(item.id)
                return(<motion.div className={`${darkMode ? 'bg-blue-200' : 'bg-purple-50'} shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-105 cursor-pointer w-3/4 my-4 mx-auto overflow-x-hidden`} key={item.id} whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}}>
                    <img
                      src={item.thumbnail}
                      alt='hey'
                      className="h-48 w-full object-contain p-4 rounded-2xl"
                    />
                    <div className="p-4">
                    <h2 className="text-lg font-semibold mb-1 line-clamp-1">{item.title}</h2>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-2">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">${item.price}</span>
                        
                      <button className="bg-blue-400 text-white px-3 py-1 rounded-lg hover:bg-blue-700" onClick={()=>cartupdate(item)}>
                        Add to Cart
                      </button>
                     {isFavorite ? ( <FaHeart className='text-red-500 cursor-pointer' onClick={()=>removeFav(item.id)}/>) : ( <FaHeart className='text-purple-300 cursor-pointer' onClick={()=>addFav(item.id)}/>)}
                    </div>
                  </div>
                  </motion.div>
                  )
            })}
            
            </div>
            {select && <div className='fixed bottom-0 right-0 left-0 bg-blue-400 text-white text-center py-2'>{select}</div>}
            {remove && <div className='fixed bottom-0 right-0 left-0 bg-red-400 text-white text-center py-2'>{remove}</div>}
      
    </div>
  )
}

export default Cards
