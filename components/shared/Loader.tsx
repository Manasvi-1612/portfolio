"use client"

import React, { useEffect, useState } from 'react'

const Loader = () => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true)
  }, [])

  return (
    <div className="preloader">
      <div className="black_wall">
        <div className="loader"></div>
      </div>
      <div className={`${active ? 'off' : ''}`}></div>
    </div>
  )
}

export default Loader
