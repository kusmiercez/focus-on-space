const axios = require('axios').default;
const News = require('../models/news');

const processNews = async () => {
    const rawNews = await getNewsFromApi();
    if (rawNews) {
        const parseNews = await parseRawNews(rawNews);
        updateNewsInDb(parseNews)
    }
}

const getNewsFromApi = async () => {
    try {
        const url = `https://newsapi.org/v2/everything?q=astronomy&searchIn=title,description&pageSize=80&sortBy=publishedAt&language=en&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        return response.data.articles
    } catch (e) {
        console.error(e)
        return undefined
    }
}

const parseRawNews = (rawNews) => {
    return rawNews
        .filter((news) => news.urlToImage !== null)
        .map(article => ({
            title: article.title,
            url: article.url,
            urlToImage: article.urlToImage
        }))
}

const updateNewsInDb = async (parseNews) => {
    try {
        await News.deleteMany({})
        await News.insertMany(parseNews)
    } catch (err) {
        console.log(err)
    }
}

module.exports = processNews