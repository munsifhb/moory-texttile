import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureDesign() {


  return (
    <div className='px-4 py-10 mt-2 bg-light'>
      
      <motion.h1 className='text-3xl font-bold text-center text-text'
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        viewport={{once: true}}
      >Feature Design</motion.h1>
        <p className='max-w-2xl mx-auto mt-8 text-center text-text'>Discover the art of textile design with our exquisite collection of fabrics and patterns.</p>

        <div className="grid w-full grid-cols-1 gap-5 mx-auto mt-16 md:w-4/6 md:grid-cols-3">
            <motion.div className="relative overflow-hidden rounded-lg group"
            initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        viewport={{once: true}}
            >
                <img src="./images/pic-1.jpg" alt="" className="z-10 object-cover w-full h-full transition duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 bg-text bg-opacity-35 translate-y-96 group-hover:opacity-100 group-hover:translate-y-0">
                    <h2 className="text-4xl font-bold text-center text-light">Elegant Patterns</h2>
                </div>
            </motion.div>
            <motion.div className="relative overflow-hidden rounded-lg group"
            initial={{ x: 70, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        viewport={{once: true}}
            >
                <img src="./images/pic-2.jpg" alt="" className="object-cover w-full h-full transition duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 bg-text bg-opacity-35 translate-y-96 group-hover:opacity-100 group-hover:translate-y-0">
                    <h2 className="text-4xl font-bold text-center text-light">Luxurious Fabrics</h2>
                </div>
            </motion.div>
            <motion.div className="relative overflow-hidden rounded-lg group"
            initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
        viewport={{once: true}}
            >
                <img src="./images/pic-3.jpg" alt="" className="object-cover w-full h-full transition duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 bg-text bg-opacity-35 translate-y-96 group-hover:opacity-100 group-hover:translate-y-0">
                    <h2 className="text-4xl font-bold text-center text-light">Innovative Textiles</h2>
                </div>
            </motion.div>
        </div>
      
    </div>
  );
};

