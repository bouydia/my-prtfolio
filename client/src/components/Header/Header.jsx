import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

import './header.scss'
import images from '../../assets/img'
import { SocialMedia } from '..'

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="home_content">
        {
          <motion.div
            className="avatar"
            initial={{ x: -100, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="image avatar_img"></div>
          </motion.div>
        }
        <div className="details">
          <div className="hi">
            <h5>Hi</h5>
            <motion.img
              animate={{ rotate: 20 }}
              transition={{
                type: 'spring',
                damping: 10,
                mass: 0.75,
                stiffness: 100,
                delay:1
              }}
              src={images.hand}
              alt=""
              width={50}
            />
          </div>
          <motion.h4
            className="name"
            initial={{ x: 100, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            I'm Youness Bouydia
          </motion.h4>
          <motion.p
            className="job"
            initial={{ x: 100, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'React Developer',
                1000,
                'Javascript Developer',
                1000,
                'MERN STACK Developer',
                1000,
              ]}
              speed={50}
              style={{ fontSize: '2em' }}
              wrapper="span"
              repeat={Infinity}
            />
          </motion.p>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Header
