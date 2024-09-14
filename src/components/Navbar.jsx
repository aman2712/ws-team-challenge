import React from 'react'
const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="" id="brand">Flavors of Lyon</a>
        <div className="menu">
            <p>Restaurant</p>
            <p>Services</p>
            <p>Contact</p>
            <p>
            <i className="fa-solid fa-magnifying-glass"></i>
            </p>
        </div>
    </div>
  )
}

export default Navbar