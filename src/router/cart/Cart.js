import React from 'react'
import "./Cart.css" 
import { DATA } from "../../static/index"


function Cart() {
  
  return (
    <div className="cart__bmv container">
      <div className="oppo">
        {
          DATA?.map((item)=><div key={item.id} className="bmv__flex">
          <div className="flex__img">
              <img className='vvv' width={150} src={item.url} alt="" />
              <div className="div">
              <p><b>Jo'jacha Ranch  kichkina</b></p>
              <p>Qalin</p>
              </div>
          </div>
          <div className="plas">
          <div className="muth">
                  <button className="muth__btn">-</button>
                  <b>1</b>
                  <button className="muth__btn">+</button>
          </div>
          <b>220 000 so'm</b>
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
        <h3>626 000 so'm</h3>
        </div>
        <button className='rig__end'>Keyingisi</button>
      </div>

    </div>
  )
}

export default Cart