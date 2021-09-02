import React, { useContext } from 'react'
import { DarkModeContext } from './DarkMode'
import { Link } from 'react-router-dom'

export const Footer = () => {

    const backgroundContext = useContext(DarkModeContext)
    const backGround = backgroundContext.darkMode ? "bg-dark text-light" : ""
    const textColor = ""

    return (
        <footer className={backGround + " p-3 px-5"}>
            <p className="m-0 ">&copy; 2017–2021 <Link className={"text-decoration-none " + textColor} to="/">Songbad Sonkolon </Link>
                Inc. &middot; <Link to="/privacy-policy" className="text-decoration-none">Privacy</Link> &middot; <Link className="text-decoration-none" to="/terms-and-conditions">Terms</Link></p>
        </footer>
    )
}
