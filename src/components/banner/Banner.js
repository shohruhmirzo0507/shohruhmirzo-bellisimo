import React from 'react'
import "./Banner.css"
import { DATA, PITSA } from "../../static/index"
import { Link, useLocation } from 'react-router-dom'

function Banner() {
  let location = useLocation()
  
  if (location.pathname === "/login") {
    return <></>
  }
  return (
    <div className='container'>
      <h2>Kombo</h2>
      <br />
      <div className="banner container">

        {
          DATA?.map((item) => <div key={item.id} className="banner__cart">
            <Link to={`/page/${item.id}`}>
              <img className='banner__top' width={250} src={item.url} alt="" />
            </Link>
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
            <Link to={`/single/${item.id}`}>

              <img className='banner__top10' width={250} src={item.urls} alt="" />
            </Link>
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