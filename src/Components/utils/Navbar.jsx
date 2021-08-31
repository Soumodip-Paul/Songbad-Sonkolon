import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const Navbar = ({ children, stickyTop }) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${stickyTop ? "sticky-top" : ''}`}>
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">Navbar</a> */}
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