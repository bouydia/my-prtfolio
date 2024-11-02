import React from 'react'

const NavigationDots = ({active}) => {
    return (
      <div className="navigation-dot-container">
        {['header', 'about', 'skills', 'portfolio', 'contact'].map(
          (item, i) => (
            <a
              href={`#${item}`}
              key={i}
              className="navigation-dot"
              style={{
                backgroundColor: active == item && 'rgb(143, 227, 136)',
              }}
            ></a>
          )
        )}
      </div>
    )
}

export default NavigationDots