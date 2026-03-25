import React from 'react'
import { useState, useEffect  } from 'react'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()

        useEffect(() => {
            const handleScroll = () => {
                if (scrollY.get() > 50) {
                    document.querySelector('header').classList.add('bg-opacity-90', 'shadow-lg')
                } else {
                    document.querySelector('header').classList.remove('bg-opacity-90', 'shadow-lg')
                }
            }

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, [scrollY])

        useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <div className=''>
        <motion.header className={`flex items-center justify-between px-2 md:px-10 ${scrollY.get() > 50 ? 'bg-opacity-30 bg-light shadow-lg backdrop-blur-md' : 'bg-light'} fixed w-full z-40 transition duration-300`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            

            
            <motion.img src={scrolled ? './images/logo-sec.png' : './images/logo.png'} className="h-10 w-120 md:w-32 md:h-32" alt="Logo" 
            initial={{ y: 30, width: 220, height: 220 }}
            animate={{ y: 0, width: scrolled ? 70 : 100, height: scrolled ? 65 : 100 }}
            transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
            />

            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    <li><a href="#" className="transition-colors duration-300 text-text font-josefin hover:text-accent">Home</a></li>
                    <li><a href="#" className="transition-colors duration-300 text-text font-josefin hover:text-accent">Products</a></li>
                    <li><a href="#" className="transition-colors duration-300 text-text font-josefin hover:text-accent">About Us</a></li>
                    <li><a href="#" className="transition-colors duration-300 text-text font-josefin hover:text-accent">Contact</a></li>
                </ul>
            </nav>

            <nav className={`${!isOpen ? 'sm:h-0 transition-all duration-200 delay-100 md:hidden bg-light z-20 '  : 'sm:h-screen pt-20 pl-5 transition-all duration-200 delay-100 md:hidden'} h-0 block bg-light w-full absolute top-0 right-0 left-0 overflow-hidden`}>
                <ul className="flex flex-col w-full space-y-4">
                    <li><a href="#" className="text-5xl font-thin transition-colors duration-300 text-text font-josefin hover:text-accent">Home</a></li>
                    <li><a href="#" className="text-5xl font-thin transition-colors duration-300 text-text font-josefin hover:text-accent">Products</a></li>
                    <li><a href="#" className="text-5xl font-thin transition-colors duration-300 text-text font-josefin hover:text-accent">About Us</a></li>
                    <li><a href="#" className="text-5xl font-thin transition-colors duration-300 text-text font-josefin hover:text-accent">Contact</a></li>
                </ul>

                <svg xmlns="http://www.w3.org/2000/svg" className='absolute transition-colors duration-300 cursor-pointer top-8 size-8 fill-text hover:fill-accent right-4' onClick={() => setIsOpen(!isOpen)} viewBox="0 0 640 640"><path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/></svg>
            </nav>

            <div className="flex space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className='transition-colors duration-300 cursor-pointer size-6 fill-text hover:fill-accent' viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='transition-colors duration-300 cursor-pointer size-6 fill-text hover:fill-accent' viewBox="0 0 640 640"><path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='block transition-colors duration-300 cursor-pointer size-6 fill-text md:hidden hover:fill-accent' onClick={() => setIsOpen(!isOpen)} viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
            </div>
        </motion.header>

        
    </div>
  )
}
