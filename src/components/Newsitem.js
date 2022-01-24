import React from 'react'

function Newsitem({title,description,imageurl}) {
  return (
    <div>
      <img style={{width:"100%",height:"auto"}} src={!imageurl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageurl} className="card-img-top" alt="..." />
      <h1 style={{fontSize:'27px'}}> {title}... </h1>
      <p> {description}... </p>
    </div>
  )
}

export default Newsitem
