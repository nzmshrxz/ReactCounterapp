import React from 'react'

const Button = ({onClick, disabled, style, lable}) => {
  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    style={style}
    >
    {lable}
    </button>
  )
}

export default Button
