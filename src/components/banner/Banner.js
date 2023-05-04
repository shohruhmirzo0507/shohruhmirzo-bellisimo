import React from 'react'
import "./Banner.css"
import { DATA, PITSA } from "../../static/index"
import { Link, useLocation } from 'react-router-dom'
import {ADD_TO_CARD, REMOVE_FROM_CARD, DEC_FROM_CARD, DELETE_ALL_CART} from "../../context/action/actionType"
import { useDispatch } from 'react-redux'


function Banner() {
  let location = useLocation()
  const dispatch = useDispatch()
  
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
            <div>
              <Link to={`/page/${item.id}`}>
              <img className='banner__top' width={250} src={item.url} alt="" />
              </Link>
            </div>
            <h3 className='text__kom'>{item.title}</h3>
            <p>{item.text}</p>
            <div>
            <button onClick={() => dispatch({type: ADD_TO_CARD, payload: item})} className='price'><b>{item.price} so'm</b></button>
            </div>

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
            <div>
            <button className='price10'><b>{item.prices} so'm</b></button>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Banner