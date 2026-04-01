import React from 'react'
import { motion } from 'framer-motion'

export default function Brand() {
  return (
    <div className='px-5 py-16 mt-5 overflow-hidden bg-light md:px-14'>
        <motion.h1 className="text-4xl font-semibold text-center text-text font-josefin" 
        initial = {{ y: 50, opacity: 0 }}
        whileInView = {{ y: 0, opacity: 1 }}
        transition = {{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        viewport={{ once: true }}
        >
            Brand Values
        </motion.h1>

        <div className="grid w-full grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:w-3/5">
        <motion.div className="p-5 transition-all duration-200 delay-100 rounded-md shadow-sm bg-light hover:shadow-md hover:scale-105"
        initial = {{ x: -100, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        transition = {{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}>
            <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto fill-accent size-12' viewBox="0 0 640 640"><path d="M353.8 118.1L330.2 70.3C326.3 62 314.1 61.7 309.8 70.3L286.2 118.1L233.9 125.6C224.6 127 220.6 138.5 227.5 145.4L265.5 182.4L256.5 234.5C255.1 243.8 264.7 251 273.3 246.7L320.2 221.9L366.8 246.3C375.4 250.6 385.1 243.4 383.6 234.1L374.6 182L412.6 145.4C419.4 138.6 415.5 127.1 406.2 125.6L353.9 118.1zM288 320C261.5 320 240 341.5 240 368L240 528C240 554.5 261.5 576 288 576L352 576C378.5 576 400 554.5 400 528L400 368C400 341.5 378.5 320 352 320L288 320zM80 384C53.5 384 32 405.5 32 432L32 528C32 554.5 53.5 576 80 576L144 576C170.5 576 192 554.5 192 528L192 432C192 405.5 170.5 384 144 384L80 384zM448 496L448 528C448 554.5 469.5 576 496 576L560 576C586.5 576 608 554.5 608 528L608 496C608 469.5 586.5 448 560 448L496 448C469.5 448 448 469.5 448 496z"/></svg>
            <h1 className="mt-5 text-2xl font-bold text-center text-text">Quality</h1>
            <p className="max-w-sm mt-3 text-center text-text">We are committed to providing the highest quality textiles that combine beauty and functionality.</p>
        </motion.div>
        <motion.div className="p-5 transition-all duration-200 delay-100 rounded-md shadow-sm bg-light hover:shadow-md hover:scale-105"
        initial = {{ x: 100, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        transition = {{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}>
            <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto fill-accent size-12' viewBox="0 0 640 640"><path d="M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z"/></svg>
            <h1 className="mt-5 text-2xl font-bold text-center text-text">Creativity</h1>
            <p className="max-w-sm mt-3 text-center text-text">We are committed to creativity and innovative design, constantly pushing the boundaries of what is possible in textile creation.</p>
        </motion.div>
        <motion.div className="p-5 transition-all duration-200 delay-100 rounded-md shadow-sm bg-light hover:shadow-md hover:scale-105"
        initial = {{ x: -100, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        transition = {{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}>
            <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto fill-accent size-12' viewBox="0 0 640 640"><path d="M538.3 394.4C514.6 486.3 444.1 539 336.4 542.8L336.4 493.6C336.4 445.6 362.8 419.2 410.8 419.2C472.8 419.2 510 382 510 320C510 258.6 473.5 221.7 412.6 220.9C379.6 151.6 266.1 156.2 235.4 220.9C174.5 221.7 138 258.6 138 320C138 382.1 175.3 419.4 237.4 419.4C285.4 419.4 312 445.6 312 493.8L312 543C177.6 538 100.9 457.9 100.9 320C100.9 178.2 182.3 96.8 324.1 96.8C438.9 96.8 513.9 150 538.8 245.6L564.1 245.6C537.9 135.5 452.2 72 323.8 72C169 72 76 165.2 76 319.8C76 475.1 169.2 568.3 323.8 568C452.1 568 537.7 504.2 563.5 394.4L538.3 394.4zM421 246.3C462.4 249.7 485.2 275.3 485.2 320C485.2 368 458.8 394.4 410.8 394.4C382.2 394.4 361.5 384.8 349.2 367.1C432.3 350.6 424.8 267.4 421 246.4zM339.3 343.7C336.8 333.4 323 256.7 395.5 246.7C397.8 256.8 412 333.8 339.2 343.7L339.2 343.7zM324 196C352.6 196 373 205.7 385.4 223.6C357 229.1 336 244.2 323.8 267C311.6 244.1 290.6 229 262.2 223.6C274.6 205.9 295.5 196.2 323.8 196.2L324 195.9zM252.5 246.7C325.7 257.3 311.4 333.5 309 343.7C236.6 333.9 250 256.7 252.8 246.7L252.6 246.7zM237.2 394.4C189.2 394.4 162.8 368 162.8 320C162.8 275.6 185.7 250 227 246.3C220.2 283.5 225.6 352.8 298.6 367C286.5 384.6 265.8 394.3 237.5 394.3L237.2 394.3zM290.4 406.8C304.7 399.2 316.4 387.5 324 373.3C331.8 387.8 343.3 398.8 357.8 406.8C343.4 414.4 331.7 426.2 324.2 440.6C316.2 426.1 305.1 414.4 290.6 406.8L290.3 406.8z"/></svg>
            <h1 className="mt-5 text-2xl font-bold text-center text-text">Elegance</h1>
            <p className="max-w-sm mt-3 text-center text-text">We are dedicated to elegance and timeless design, creating products that stand the test of time.</p>
        </motion.div>
        <motion.div className="p-5 transition-all duration-200 delay-100 rounded-md shadow-sm bg-light hover:shadow-md hover:scale-105"
        initial = {{ x: 100, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        transition = {{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}>
            <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto fill-accent size-12' viewBox="0 0 640 640"><path d="M320 128C241 128 175.3 185.3 162.3 260.7C171.6 257.7 181.6 256 192 256L208 256C234.5 256 256 277.5 256 304L256 400C256 426.5 234.5 448 208 448L192 448C139 448 96 405 96 352L96 288C96 164.3 196.3 64 320 64C443.7 64 544 164.3 544 288L544 456.1C544 522.4 490.2 576.1 423.9 576.1L336 576L304 576C277.5 576 256 554.5 256 528C256 501.5 277.5 480 304 480L336 480C362.5 480 384 501.5 384 528L384 528L424 528C463.8 528 496 495.8 496 456L496 435.1C481.9 443.3 465.5 447.9 448 447.9L432 447.9C405.5 447.9 384 426.4 384 399.9L384 303.9C384 277.4 405.5 255.9 432 255.9L448 255.9C458.4 255.9 468.3 257.5 477.7 260.6C464.7 185.3 399.1 127.9 320 127.9z"/></svg>
            <h1 className="mt-5 text-2xl font-bold text-center text-text">Customer Satisfaction</h1>
            <p className="max-w-sm mt-3 text-center text-text">We prioritize customer satisfaction and strive to exceed our clients' expectations with every interaction.</p>
        </motion.div>
        </div>
        </div>
  )
}
