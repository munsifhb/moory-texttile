import React from 'react'

export default function Loader() {
  return (
    <div>
        <div className="flex items-center justify-center h-screen">
            <img src="./images/logo.png" alt="Loading..." className="w-20 h-20 animate-spin" />
        </div>
    </div>
  )
}
