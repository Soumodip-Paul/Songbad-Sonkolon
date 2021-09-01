import React,{useState,useEffect,useContext} from 'react'
import { DarkModeContext } from './DarkMode'

export const ScrollTop = () => {

    const [right, setRight] = useState("-60px")
    const darkMode = useContext(DarkModeContext).darkMode ? " bg-dark text-light" : " text-dark bg-light"

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.pageYOffset > 200) setRight("0px")
            else setRight("-60px")
        })
    }, [])

    return (
        <span className={"m-3 mb-2 text-center rounded-circle material-icons material-icons-outlined p-2 " + darkMode}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }} style={{ position: 'fixed', bottom: '0', right: right, transition: "all 0.25s ease-in-out", cursor: 'pointer' }}>
            arrow_upward
        </span>
    )
}
