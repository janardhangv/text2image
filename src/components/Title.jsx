import React from 'react'

const Title = ({element,content,customStyle}) => {
    const title = ()=>{
        if (element === "h1") return <h1 className={customStyle}>{content}</h1>
        else if (element === "h2") return <h2 className={customStyle}>{content}</h2>
        else return <h3 className={customStyle}>{content}</h3>
    }
  return (
    {title}
  )
}

export default Title