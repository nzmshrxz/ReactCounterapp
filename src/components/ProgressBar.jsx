import React from 'react'

const ProgressBar = ({progress, color = 'green'}) => {
  return (
      <div style={{
        backgroundColor: '#ddd',
        height: '20px',
        width: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        margin: '20px 0'
      }}>
        <div style={{
          backgroundColor: color,
          height: '100%',
          width: `${progress}%`,
          transition: 'width 0.3s ease'
        }}></div>
      </div>
  )
}

export default ProgressBar
