import React from 'react'

export default function About() {
  return (
    <div className='w-full px-4 py-10 mt-5 bg-light md:px-20'>

        <div className="w-full px-6 py-10 rounded-xl border-s-4 border-accent">
        <h1 className='mt-10 text-4xl font-bold text-center text-text'>About Us</h1>
        <p className='mt-8 text-start'>Welcome to Moory Textile, your premier destination for exquisite textile designs. We are passionate about creating unique and innovative fabrics that inspire creativity and elevate your style. Our team of talented designers combines traditional craftsmanship with modern techniques to bring you a diverse collection of textiles that cater to every taste and occasion. Whether you're looking for luxurious fabrics for fashion or stunning patterns for home decor, Moory Textile has something special for you. Join us on this journey of creativity and discover the art of textile design with us.
        </p>

        </div>

        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
            <div className="px-6 py-5 rounded-xl border-s-4 border-accent">
                <h1 className='mt-10 text-4xl font-bold text-center text-text'>Our Mission</h1>
                <p className='max-w-2xl mt-8 text-start'>At Moory Textile, our mission is to provide the highest quality textiles that combine beauty and functionality. We are committed to sustainability and ethical practices in all our operations, ensuring that every fabric we create meets the highest standards of excellence.</p>
            </div>
            <div className="px-6 py-5 rounded-xl border-s-4 border-accent">
                <h1 className='mt-10 text-4xl font-bold text-center text-text'>Our Vission</h1>
                <p className='max-w-2xl mt-8 text-start'>We believe in the power of creativity and innovation. Our values include integrity, quality, and customer satisfaction. We strive to build lasting relationships with our clients based on trust and mutual respect.</p>
            </div>
            
        </div>

    </div>
  )
}
