import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Loader from '../Components/Loader'
import { useState, useEffect } from 'react' 
import FeatureDesign from '../Components/FeatureDesign'
import About from '../Components/About'

export default function Homepage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureDesign />
      <About />
    </div>
  )
}
