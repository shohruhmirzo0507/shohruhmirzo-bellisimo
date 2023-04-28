import React from 'react'
import "./Banner.css"
import { DATA, PITSA } from "../../static/index"

function Banner() {
  return (
    <div className='container'>
      <h2>Kombo</h2>
      <br />
      <div className="banner container">

        {
          DATA?.map((item) => <div key={item.id} className="banner__cart">
            <img className='banner__top' width={250} src={item.url} alt="" />
            <h3 className='text__kom'>{item.title}</h3>
            <p>{item.text}</p>
            <button className='price'><b>{item.price} so'm</b></button>
          </div>)
        }

      </div>


      <h2>Pitsa</h2>
      <br />
      <div className="banner10 container">

      {
        PITSA?.map((item) => <div key={item.id} className="banner__cart10">
          <img className='banner__top10' width={250} src={item.urls} alt="" />
          <h3 className='text__kom10'>{item.titles}</h3>
          <p className='mern'>{item.texts}</p>
          <button className='price10'><b>{item.prices} so'm</b></button>
        </div>)
      }
       </div>
    </div>
  )
}

export default Banner