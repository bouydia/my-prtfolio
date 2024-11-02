import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

import './socialMedia.css' 

const SocialMedia = () => {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/youness-bouydia-14344219a/"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>

      <a href="https://twitter.com/BouydiaYouness" target="_blank">
        <AiFillTwitterCircle />
      </a>

      <a href="https://github.com/bouydia" target="_blank">
        <AiFillGithub />
      </a>

      <div />
      <p>Follow me</p>
    </div>
  )
}

export default SocialMedia