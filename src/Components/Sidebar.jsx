import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";



const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const handleSidebar = () => {
    setOpen(open === true ? false : true);
  }
  return (
    <>
      <button className={`burger ${open === true ? 'openburger' : ''}`} onClick={handleSidebar}>{open === false ? (<><RxHamburgerMenu /> <p>Menu</p></>) : (<><MdClose /> <p>Close</p></>)}</button>
      <div className={`sidebar-container ${open === true ? 'active-sidebar' : ''}`}>
        <p className='sidebar-title'>Categories</p>
        <div className="categories">
          <ul className="linklist">
              <NavLink
                className={({ isActive }) => (isActive ? "list active" : "list")}
                to="/business"
              >
                Business
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "list active" : "list")}
                to="/entertainment"
              >
                Entertainment
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "list active" : "list")}
                to="/general"
              >
                General
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "list active" : "list")}
                to="/health"
              >
                Health Science
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "list active" : "list")}
                to="/sports"
              >
                Sports
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "list active" : "list")}
                to="/technology"
              >
                Technology
              </NavLink>
          </ul>
        </div>


      </div>
    </>
  )
}

export default Sidebar
