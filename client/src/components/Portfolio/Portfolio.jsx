import React, { useState, useEffect } from 'react'
import { AiFillGithub, AiOutlineArrowsAlt } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { client, urlFor } from '../../client'
import './portfolio.scss'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filterWork, setFilterWork] = useState([])
  const [works, setWorks] = useState([])
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  //populate skill state
  useEffect(() => {
    const query = '*[_type == "works"]'
    client.fetch(query).then(data => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])
  const handleFilterWork = (item) => {
    setActiveFilter(item)
    setAnimateCard({y:100,opacity:0})
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })
      if (item === "All") {
        setFilterWork(works)
      }
      else {
        setFilterWork(works.filter((work)=>work.tags.includes(item)))
      }
    }, 500);
  }
  return (
    <div className="portfolio section__padding" id="portfolio">
      <div className="title">
        <h3>Creative Portfolio</h3>
      </div>
      <div className="portfolio_filter">
        <div className="filter">
          {['All','Web App', 'MERN', 'BlockChain'].map(
            (item, index) => (
              <p
                className={activeFilter == item ? 'active' : ''}
                key={index}
                onClick={() => handleFilterWork(item)}
              >
                {item}
              </p>
            )
          )}
        </div>
        <motion.div
          whileInView={animateCard}
          transition={{ duration: 0.5 }}
          className="works"
        >
          {filterWork.map((work, i) => (
            <div className="card" key={i}>
              <div className="image">
                <img src={urlFor(work.imgUrl)} alt="" />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className="work-hover"
                >
                  <a href={work.codeLink} target="_blank">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                  <a href={work.projectLink} target="_blank">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiOutlineArrowsAlt />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="work-content">
                <h4>{work.title}</h4>
                <p style={{ marginTop: 10 }}></p>
                <div className="work-tag">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
