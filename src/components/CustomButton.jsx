import React from 'react'

const CustomButton = ({content,customStyle,handleClick}) => {
  return (
    <button className={customStyle}  onClick={handleClick}>{content}</button>
  )
}

export default CustomButton
