import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Sidebar.css"

function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className='sidebar'>
      <button onClick={()=> navigate("/")}>go home</button>
        <h2>Admin panel</h2>
        <ul>
            <li>
                <NavLink className={"sidebar__link"} to={"/admin/create-product"}>CreateProduct</NavLink>
            </li>
            <li>
                <NavLink className={"sidebar__link"} to={"/admin/manage-product"}>ManageProduct</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar