import React from 'react'
import "./SingleRoute.css"
import { useParams } from 'react-router'
import { PITSA} from "../../static/index"
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function SingleRoute() {
  const param = useParams()
  const oneItem = PITSA.find(i =>i.id === param.id)
  return (
    <div>
      <div className="single">
        <div className='single__top'>
          <div className="single__olx">
            <Link className='rees' to={'/'}><BsChevronLeft/></Link>
          <img className='single__img' src={oneItem?.urls} alt="" />
          </div>
          <div className="single__text">
          <h1 className='text__kom'>{oneItem.titles}</h1>
          <p>{oneItem.texts}</p>
          <h3>Pitsa kattaligi</h3>
          <button className='miks'>Miks</button>
          <h3>Hamir turini tanlang</h3>
          <div className='miks1'>
            <button className='spin'><b>Yupqa</b></button>
            <button className='spin'><b>Qalin</b></button>
            <button className='spin'><b>Hot-dog bort</b></button>
          </div>

          <button className='single__but'><b>{oneItem.prices} so'm</b></button>
          <button className='single__but1'><b>Savatga qo'shish</b></button>


          </div>
        </div>

      </div>
    </div>
  )
}

export default SingleRoute