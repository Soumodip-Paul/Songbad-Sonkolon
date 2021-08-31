import React, { useState, useEffect } from 'react'
import { CardGrid, CardGridItem } from '../items/Card'
import PropTypes from 'prop-types'
import { getNews, getNewsByCategory } from '../utils/fetchNewsUtils'
import InfiniteScroll from 'react-infinite-scroll-component'

export const NewsItem = ({ items, category, setProgress }) => {

    const [articles, setResult] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(0)
    const concatResult = async (country) => {
        const doc = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}${category && category !== undefined ? `&category=${category}` : ''}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${items}&page=${page + 1}`)
        const resultData = await doc.json()
        console.log(resultData)
        setResult(articles.concat(resultData.articles))
        setPage(page + 1)
        setPageSize(resultData.totalResults)
    }

    useEffect(() => {
        if (category && category !== undefined)
            getNewsByCategory("in", category, setResult, setProgress, items, 1, setPageSize)
        else
            getNews("in", setResult, setProgress, items, 1, setPageSize)
    }, [setProgress, category, items])

    return (
        <>
            {articles && articles !== undefined ?
                <InfiniteScroll
                    dataLength={articles.length}
                    next={() => concatResult("in")}
                    hasMore={articles.length !== pageSize}
                    loader={
                        <h6 className="text-center">
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
    items: 6,
}

