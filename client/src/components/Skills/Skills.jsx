import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { client, urlFor } from '../../client'
import './skills.scss'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experience, setExperience] = useState([])
  //populate skill state
  const toolVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, rotate: 360 },
  }
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }
  const childVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }
  useEffect(() => {
    const query = '*[_type == "skills"]'
    client.fetch(query).then(data => {
      setSkills(data)
    })
    const expQuery = '*[_type == "experiences"]'
    client.fetch(expQuery).then(data => {
      setExperience(data)
    })
  }, [])
  return (
    <div className="skills section__padding" id="skills">
      <div className="title">
        <h3>Skills & Experience</h3>
      </div>
      <div className="experience">
        <div className="techs">
          {skills.map((skill, i) => (
            <motion.div
              variants={toolVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="techs-item"
              key={i}
            >
              <img
                src={urlFor(skill.icon).width(60).height(60)}
                alt={skill.name}
                style={{ background: skill.bgColor }}
              />
            </motion.div>
          ))}
        </div>
        <div className="skills-exp">
          {experience.map(exp => (
            <motion.div
              variants={parentVariants}
              initial="hidden"
              whileInView="visible"
              key={exp._id}
            >
              <motion.div
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                className="skills-exp-year"
              >
                <p>{exp.year}</p>
              </motion.div>
              {exp.works.map(work => (
                <motion.div
                  variants={childVariants}
                  className="skills-exp-work"
                  key={work._key}
                >
                  <div>
                    <div className="info">
                      <h4>{work.company}</h4>
                      <p>{work.name} </p>
                    </div>
                    <div className="time">
                      <small>{work.duration}</small>
                    </div>
                  </div>
                  <p className="desc">
                    <p>{work?.desc} </p>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
