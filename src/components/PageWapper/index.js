import React from 'react'

export default function PageWapper({ children, backgroundImage }) {
  return (
    <div
      style={{
        minHeight: '368px',
        height: '1000px',
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: '5em'
      }}
    >
      {children}
    </div>
  )
}
