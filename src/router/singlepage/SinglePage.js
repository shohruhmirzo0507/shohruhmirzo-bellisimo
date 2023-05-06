 import React from 'react'
 import "./SinglePage.css"
 import { useParams } from 'react-router'
 import { DATA} from "../../static/index"
 import { GrFormNext } from 'react-icons/gr';
 import { Link } from 'react-router-dom';
 import {ADD_TO_CARD, REMOVE_FROM_CARD, DEC_FROM_CARD, DELETE_ALL_CART} from "../../context/action/actionType"
 import { useDispatch } from 'react-redux'

 function SinglePage() {
  const dispatch = useDispatch()

    const param = useParams()
  const oneItem = DATA.find(i =>i.id === param.id)
   return (
     <div>
        <div className="single__page container">
          <div className="page__top">
          <img className='single__img5' src={oneItem?.url} alt="" />
          <h1 className='text__kom'>{oneItem.title}</h1>
          <p>{oneItem.text}</p>
          </div>
          <div className="page__bottom">
            <button className='page__btn'>
              <div className="bistake">
              <h3>Kebab pitsa kichkina</h3>
              </div>
               <h1><GrFormNext/></h1>
            </button>
            <button className='page__btn'>
              <div className="bistake">
              <h3>Tovuqli Bellisster</h3>
              </div>
               <h1><GrFormNext/></h1>
            </button>
            <button className='page__btn'>
              <div className="bistake">
              <h3>Go'shtli Bellisster</h3>
              </div>
               <h1><GrFormNext/></h1>
            </button>
            <button className='page__btn'>
              <div className="bistake">
              <h3>Pepperoni rollar 4 dona</h3>
              </div>
               <h1><GrFormNext/></h1>
            </button>


            <div className="page__short">
              <div className='short__top'>
                <button className='bbb__btn'>Umumiy narx</button>
                <button className='bbb__btn'><b>{oneItem.price} so'm</b></button>
                   </div>
              <div className='short__bottom'>
                <button  onClick={() => dispatch({type: ADD_TO_CARD, payload: oneItem})} className='fff__end'>Qo'shish</button>
                   </div>
            </div>
          </div>


          </div>
     
     </div>
   )
 }
 
 export default SinglePage