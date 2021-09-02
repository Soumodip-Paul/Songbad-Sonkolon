import React, { useState, useEffect, useContext} from 'react'
import { CardGrid, CardGridItem } from '../items/Card'
import { getNews, getNewsByCategory } from '../utils/fetchNewsUtils'
import InfiniteScroll from 'react-infinite-scroll-component'
import { capitalizedFirstLetter } from '../utils/TextUtils'
import { DarkModeContext } from '../items/DarkMode'
import PropTypes from 'prop-types'

export const NewsItem = ({ items, category, setProgress }) => {

    const [articles, setResult] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(0)
    const [emptyResult, setEmptyResult] = useState(false)
    const darkMode = useContext(DarkModeContext)
    const concatResult = (country) => {
        setTimeout(async () => {
            const doc = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}${category && category !== undefined ? `&category=${category}` : ''}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${items}&page=${page + 1}`)
            const resultData = await doc.json()
            console.log(resultData)
            setResult(articles.concat(resultData.articles))
            setEmptyResult(resultData.articles.length === 0)
            setPage(page + 1)
            setPageSize(resultData.totalResults)
        }, 500)
    }

    useEffect(() => {
        if (category && category !== undefined) {
            document.title = capitalizedFirstLetter(category) + " : Songbad Sonkolon"
            getNewsByCategory("in", category, setResult, setProgress, items, 1, setPageSize)
        }
        else {
            document.title = "Songbad Sonkolon : News App made for you"
            getNews("in", setResult, setProgress, items, 1, setPageSize)
        }
    }, [setProgress, category, items])

    return (
        <>
            {articles && articles !== undefined ?
                <InfiniteScroll
                    style={{minHeight: "82.3vh"}}
                    className={`${darkMode.darkMode ? "bg-secondary":""}`}
                    dataLength={articles.length}
                    next={() => concatResult("in")}
                    hasMore={!emptyResult && articles.length !== pageSize}
                    loader={
                        <h6 className="text-center text-info">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </h6>}>
                    <CardGrid>
                        {articles.map(element => {
                            return <CardGridItem result={element} key={element.url} />
                        })}
                    </CardGrid>
                </InfiniteScroll> :
                <div><h2 className="m-auto">No Result available</h2></div>}
        </>
    )
}

NewsItem.propTypes = {
    setProgress: PropTypes.func.isRequired,
    items: PropTypes.number,
}

NewsItem.defaultProps = {
    items: 9,
}

