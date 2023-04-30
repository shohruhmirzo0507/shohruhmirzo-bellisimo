import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
  return (
    <div>
        <Link className='go__home' to={'/'}>go to home</Link>
        <div className="login">
          <h2>Raqamingizni kiriting</h2>
          <input className='login__input' type="text" placeholder='Name...' />
          <input className='login__input' type="number" name="" id="" placeholder='+998 00 000 00 00' />
          <br />
          <button className='login__btns'>Jo'natish</button>
        </div>
    </div>
  )
}

export default Login