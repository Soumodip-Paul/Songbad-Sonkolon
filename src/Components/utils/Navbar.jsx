import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import { DarkModeContext } from '../items/DarkMode'
import "../css/toggleSwitch.css"

export const Navbar = ({ children, stickyTop }) => {
    const darkModeObject = useContext(DarkModeContext)
    const toggleDarkMode = () => { darkModeObject.setDarkMode(!darkModeObject.darkMode) }
    const bg = darkModeObject.darkMode ? "dark" : "light"
    const text = !darkModeObject.darkMode ? "dark" : "light"

    return (
        <nav className={`navbar navbar-expand-lg navbar-${bg} bg-${bg} ${stickyTop ? "sticky-top" : ''}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/favicon-32x32.png" alt="logo" className="rounded-circle" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {children}
                    </ul>
                    {/* {<form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>} */}
                    <div className={`form-check form-switch text-${text}`}>
                        <input className="anim form-check-input" onChange={toggleDarkMode} type="checkbox" id="darkMode" checked={darkModeObject.darkMode} />
                        {/* <label className="form-check-label" htmlFor="darkMode">{darkModeObject.darkMode?"Dark":"Light"} Mode</label> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export const NavItemLink = ({ to, children }) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" exact to={to} activeClassName="active">{children}</NavLink>
        </li>
    )
}

Navbar.propTypes = {
    stickyTop: PropTypes.bool,
}