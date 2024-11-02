import React from 'react'
import {NavigationDots,SocialMedia} from '..'

const AppWrapp = (Component,ClassNames) => {
  return function HOC() {
    return (
      <div className={`app__container ${ClassNames}`}>
        <SocialMedia />
        <div className="app__wrapper">
          <Component />
        </div>
        <NavigationDots active={ClassNames} />
      </div>
    )
  }
}

export default AppWrapp