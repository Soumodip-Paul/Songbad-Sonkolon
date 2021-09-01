export const getNews = async (country, setArticles, setProgress, pageSize, page,setPageSize) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    setProgress(50)
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${pageSize}&page=${page}`)
    setProgress(80)
    let result = await data.json()
    setPageSize(result.totalResults)
    setProgress(100)
    setArticles(result.articles)
    console.log("get news fired");
    console.log(result.articles)
}

export const getNewsByCategory = async (country, category, setArticles, setProgress, pageSize, page, setPageSize) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    setProgress(50)
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${pageSize}&page=${page}`)
    setProgress(80)
    let result = await data.json()
    setPageSize(result.totalResults)
    setProgress(100)
    setArticles(result.articles)
    console.log("get news category fired");
    console.log(result.articles)
}