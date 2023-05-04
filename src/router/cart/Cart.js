import React from 'react'
import "./Cart.css"
import { DATA } from "../../static/index"
import { useSelector } from 'react-redux'
import {useDispatch} from "react-redux"
import {addToCard, decFromCard, removeFromCard,deleteAllCart }  from "../../context/action/action"


function Cart() {   
  const dispatch = useDispatch()

  const selector = useSelector(s => s.cart)
  console.log(selector);
  return (
    <div className="cart__bmv container">
      <div className="oppo">
        {
          selector?.map((item) => <div key={item.id} className="bmv__flex">
            <div className="flex__img">
              <img className='vvv' width={150} src={item.url} alt="" />
              <div className="div">
                <p><b>{item.title}</b></p>
                <p>Qalin</p>
              </div>
            </div>
            <div className="plas">
              <div className="muth">
                <button disabled={item.soni <= 1} onClick={()=> dispatch(decFromCard(item))} className="muth__btn">-</button>
                <b>{item.soni}</b>
                <button onClick={()=> dispatch(addToCard(item))} className="muth__btn">+</button>
              </div>
              <b>{item.price * item.soni} so'm</b>
            </div>
          </div>)
        }

      </div>

      <div className="bmv__flex1">
        <div className="rig__top">
          <p>Yetkazib berish</p>
          <p>Bepul</p>
        </div>
        <div className="rig__top1">
          <h3>Umumiy narx</h3>
          <h3>{selector?.reduce((a,b)=> a + (b.soni*b.price), 0)}</h3>
        </div>
        <button className='rig__end'>Keyingisi</button>
      </div>

    </div>
  )
}

export default Cart