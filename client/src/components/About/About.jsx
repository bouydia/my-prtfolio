import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ModalWrapper } from '..'
import './about.scss'

const About = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }
  const liVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }
  //Claculate age
  const calculate_age = dob => {
    const birthDate = new Date(dob)
    const difference = Date.now() - birthDate.getTime()
    const age = new Date(difference)

    return Math.abs(age.getUTCFullYear() - 1970)
  }
  
  return (
    <>
      <div className="about section__padding" id="about">
        <div className="title">
          <h3>About</h3>
        </div>
        <div className="description">
          <motion.h2
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="name"
          >
            Youness Bouydia &amp; Web Developer
          </motion.h2>
          <div className="description_inner">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="left"
            >
              <p>
                Skilled React developer with a strong foundation in web
                development and a passion for building intuitive user
                interfaces. Proficient in the React framework and skilled at
                creating high-quality web applications. Collaborative team
                player with excellent communication skills and a dedication to
                staying current on industry best practices.
              </p>
              {/* <div className="btn_warpper">
                <button onClick={toggleModal} className="btn">
                  Read More
                </button>
              </div> */}
            </motion.div>
            <div className="right">
              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
              >
                <motion.li variants={liVariants}>
                  <p>
                    <span>Birthday:</span>06.05.2001
                  </p>
                </motion.li>
                <motion.li variants={liVariants}>
                  <p>
                    <span>Age:</span>
                    {calculate_age('06/05/2001')}
                  </p>
                </motion.li>
                <motion.li variants={liVariants}>
                  <p>
                    <span>Address:</span>Tamansourt Marrakech ,Morocco
                  </p>
                </motion.li>
                <motion.li variants={liVariants}>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:younessbouydia@gmail.com">
                      younessbouydia@gmail.com
                    </a>
                  </p>
                </motion.li>
                <motion.li variants={liVariants}>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+0689266430">0689266430</a>
                  </p>
                </motion.li>
                <motion.li variants={liVariants}>
                  <p>
                    <span>Study:</span>ISTA NTIC SYBA, Marrakech
                  </p>
                </motion.li>
                <motion.li variants={liVariants}>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
      {/*  <ModalWrapper isOpen={isOpen} toggleModal={toggleModal} /> */}
    </>
  )
}

export default About
