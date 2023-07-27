import React from 'react'
import logo from './abc_logo.png'

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <img src={logo} alt="" width="45" height="45" className="d-inline-block" />
            <a className="navbar-brand m-auto h1" href="/">
            ABC Company
            </a>
        </div>
    </nav>

  )
}

export default Header