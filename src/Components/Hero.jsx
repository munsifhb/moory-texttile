import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {

    const myStyle = {
        backgroundImage: 'url(./images/here-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
  return (
    <div className='grid w-full grid-cols-2 px-2 pt-24 pb-2 md:pt-28 md:px-10 lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 bg-text' style={myStyle}>

        <div className="mx-auto ">
            <motion.h1 className="mt-10 leading-tight capitalize md:text-8xl sm:text-8xl text-light font-josefin" initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}>
             
                define your style</motion.h1>
            <motion.p className="max-w-lg mt-6 md:text-2xl sm:text-xl text-light font-josefin" initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}>
                Discover the art of textile design with our exquisite collection of fabrics and patterns.</motion.p>
            <motion.button className="px-3 py-2 mx-4 mt-10 transition duration-300 rounded-md md:px-6 md:py-3 sm:text-xs md:text-lg font-josefin text-light bg-accent hover:bg-opacity-90" initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}>
                Define Your Style</motion.button>
                <motion.button className="px-3 py-2 mx-4 mt-10 text-lg transition duration-300 rounded-md md:px-6 md:py-3 sm:text-xs md:text-lg font-josefin text-light bg-accent hover:bg-opacity-90" initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}>
                View All Style</motion.button>
        </div>

    
        <motion.img src="./images/hero-bg.png" alt="" className="mx-auto -pt20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        />
        
   
    </div>
  )
}
