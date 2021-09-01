import React, { useContext } from 'react'
import { capitalizedFirstLetter } from '../utils/TextUtils'
import { getTimeAgo } from '../utils/TimeUtils'
import { DarkModeContext } from './DarkMode'

const placeholderImage = "https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w480/nth.png"

export const Card = ({ result }) => {

    const darkMode = useContext(DarkModeContext)
    const mode = darkMode.darkMode ? " bg-dark text-light":""

    return (
        <div className={"card text-center"+ mode} style={{ width: '18rem' }}>
            <CardBadge>{result.source.name}</CardBadge>
            <img src={result.urlToImage ? result.urlToImage : placeholderImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{result.title ? result.title : "News Title"}</h5>
                <p className="card-text text-end"><small className="text-muted">{result.author && <em>by - {capitalizedFirstLetter(result.author)}</em>}</small></p>
                <p className="card-text">{result.description ? result.description : ""}</p>
                <a href={result.url} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated {getTimeAgo(result.publishedAt)}</small>
            </div>
        </div>
    )
}

export const CardGrid = ({ children }) => {
    return (
        <div className="container p-4">
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export const CardGridItem = ({ result }) => {
    return (
        <div className="col m-2">
            <Card result={result} />
        </div>
    )
}

export const CardBadge = ({ children }) => {
    return (
        // <div style={{
        //     display: 'flex',
        //     justifyContent: 'flex-end',
        //     position: 'absolute',
        //     right: '0'}}>
        //     <span className="badge rounded-pill bg-danger"> {children} </span>
        // </div>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {children}
        </span>
    )
}

