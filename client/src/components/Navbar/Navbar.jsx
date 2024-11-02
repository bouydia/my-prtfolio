import React, { useState,useEffect,useRef } from 'react'
import {AnimatePresence, motion } from 'framer-motion'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

import images from '../../assets/img'
import './navbar.scss'

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const storedMode = localStorage.getItem('mode')
  const ref=useRef(null)
  const variants = {
    hidden: { x: 300,},
    visible: { opacity: 1, x: 0 },
  }
  if (storedMode == null) {
    localStorage.setItem('mode', 'light')
  }
  useEffect(() => {
    setDarkMode(storedMode == "dark" ? true : false)
    const closeMenu = (e) => {
      if (!ref.current.contains(e.target)) {
        setToggleMenu(false)
      }
    }
    document.body.addEventListener('click', closeMenu)
  }, [])
  const toggleDarkMode = checked => {
    if (storedMode == 'light' || storedMode === null) {
      localStorage.removeItem('mode')
      localStorage.setItem('mode', 'dark')
      setDarkMode(true)
    } else {
      localStorage.removeItem('mode')
      localStorage.setItem('mode', 'light')
      setDarkMode(false)
    }
  } 
  
   if (isDarkMode) {
    document.body.classList.add('dark')
   } else {
    document.body.classList.remove('dark')
   }

  return (
    <div ref={ref} className="navbar">
      <div className="logo">
        <a className="navbar-brand" href="/">
          <img src={images.logo} alt="brand" />
        </a>
      </div>
      <div className="menu-container">
        <div className="menu">
          <ul>
            {['home', 'about', 'skills', 'portfolio', 'contact'].map(
              (item, i) => (
                <li key={i}>
                  <a onClick={() => setToggleMenu(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <DarkModeSwitch
          onChange={toggleDarkMode}
          checked={isDarkMode}
          className="mode-toggle"
        />
      </div>
      <div className="res-menu-container">
        <RiMenu3Line className="icon" onClick={() => setToggleMenu(true)} />
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              key="box"
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5, ease: 'easeIn' }}
              variants={variants}
              className="res-menu"
            >
              <div className="toggls">
                <DarkModeSwitch
                  onChange={toggleDarkMode}
                  checked={isDarkMode}
                  size={40}
                  className="mode-toggle"
                />
                <RiCloseLine
                  className="icon"
                  onClick={() => setToggleMenu(false)}
                />
              </div>
              <div className="menu">
                <ul>
                  {['home', 'about', 'skills', 'portfolio', 'contact'].map(
                    (item, i) => (
                      <li key={i}>
                        <a
                          onClick={() => setToggleMenu(false)}
                          href={`#${item}`}
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar
