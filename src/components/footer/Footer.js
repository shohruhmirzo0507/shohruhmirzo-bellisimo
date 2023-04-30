import React from 'react'
import "./Footer.css"
import { SiAmazonpay } from 'react-icons/si';
import { BsCreditCard2Back } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok, FaTelegramPlane } from 'react-icons/fa';
import { useLocation } from 'react-router';


function Footer() {
  let location = useLocation()
  
  if (location.pathname === "/login") {
    return <></>
  }
  return (
    <div className='footer'>
        <div className="footer__cart container">
        <div className="footer__top">
            <div className="top__card">
                <h2>Bellissimo Pizza</h2>
                <p><b>Biz haqimizda</b></p>
                <p><b>Ommaviy ofert</b></p>
                <p><b>Maxfiylik siyosati</b></p>
                <p><b>Halol sertifikati</b></p>
                <p><b>Restoranlar</b></p>
            </div>
            <div className="top__card">
                <h2>To'lov usuli</h2>
                <SiAmazonpay/>
                <BsCreditCard2Back/>
            </div>
            <div className="top__card1">
                <h2>Hamkorlik</h2>
                <p><b>Franchayzi</b></p>
                <p><b>Bizning ish o'rinlarimiz</b></p>
            </div>
        </div>
        <hr />
        <div className="footer__bottom">
          
          <h3 className='www'>@ 2016 - 2023 Bellissimo Pizza.</h3>
          <h1><AiFillInstagram/> <FaTiktok/> <FaTelegramPlane/> </h1>
        </div>
        </div>
        
    </div>
  )
}

export default Footer