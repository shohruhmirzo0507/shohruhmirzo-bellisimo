import React from 'react'
import "./Navbar.css"
import { AiFillStar } from 'react-icons/ai';
import { IoCallOutline } from 'react-icons/io5';
// import { AiFillStar } from 'react-icons/ai';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


function Navbar() {
  return (
    <div>
<div className="nav__top container">
   <img className='belis' width={260} src="https://bellissimo.uz/_next/image?url=%2Fimages%2Flogo.png&w=320&q=75" alt="" />
    <div className="adres">
        <p><b>Shahar:</b> <b className='ferd'>Toshkent</b></p>
        <p> <b className='starik'><AiFillStar/></b><b> 4.72/5</b></p>

    </div>
    <div className="adres1">
      <IoCallOutline/>
      <h2>1174</h2>
<b className='time'>40 daqiqada tekin yetkazib beramiz yoki pitsa bepul</b>
    </div>
    <img className='halol'  src="https://bellissimo.uz/_next/image?url=%2Fimages%2Fhalal.png&w=64&q=75" alt="" />
    <p>O'zbek</p>
    <p>Kirish</p>
</div>

<div className="swiper container">
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fd4b91bb9-d2fe-42da-ab82-27aa778e7d6b_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F7116c7d9-3fa2-41b4-b23d-b0d2306b49c0_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6fc5ae62-bca2-4a3b-a40a-1d23beb7e0ef_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fd4b91bb9-d2fe-42da-ab82-27aa778e7d6b_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        
      </Swiper>
      </div>
<div className="submit container">
<div className="dast">
  <button className='this'><b>Yetkazib berish</b></button>
  <button className='this1'><b>Olib ketish</b></button>
</div>
<input className="dast1" type="text" placeholder='Yetkazib berish manzilini tanlang' />
</div>
<div className="nav__bottom">
<div className="menyu container">
  <div className="ford">
    <button className='dele'><img className='dele' width={40} src="https://bellissimo.uz/_next/image?url=%2Fimages%2Ficon.png&w=1920&q=75" alt="" /></button>
    <button className='kombo'><b>Kombo</b></button>
    <button className='kombo1'><b>Pitsa</b></button>
    <button className='kombo1'><b>Gazaklar</b></button>
    <button className='kombo1'><b>Ichimliklar</b></button>
    <button className='kombo1'><b>Salatlar</b></button>
    <button className='kombo1'><b>Desertlar</b></button>
    <button className='kombo1'><b>Souslar</b></button>
  </div>
  <div className="ford1">
    <button className='buy'><b>Savatcha | 0</b></button>
  </div>
</div>

</div>
    </div>
  )
}

export default Navbar