import React from 'react'
import { Navbar, NavItemLink } from '../utils/Navbar'
//business entertainment general health science sports technology

export const NavbarItem = () => {
    return (
        <Navbar stickyTop>
            <NavItemLink to="/">Home</NavItemLink>
            <NavItemLink to="/business">Business</NavItemLink>
            <NavItemLink to="/entertainment">Entertainment</NavItemLink>
            <NavItemLink to="/general">General</NavItemLink>
            <NavItemLink to="/health">Health</NavItemLink>
            <NavItemLink to="/science">Science</NavItemLink>
            <NavItemLink to="/sports">Sports</NavItemLink>
            <NavItemLink to="/technology">Technology</NavItemLink>
        </Navbar>
    )
}
