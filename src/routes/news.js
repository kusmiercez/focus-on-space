require('dotenv').config();
const express = require('express')
const axios = require('axios').default;
const router = express.Router()
const News = require('../models/news')

router.get("/", async (req, res) => {
    try {
        const news = await News.find()
        console.log(news)
        res.json(news)
    }catch(err){
        res.json({message: err})
    }
})

const processNews = async() => {
    const rawNews = await getNewsFromApi();
    if(rawNews){
        const parseNews = await parseRawNews(rawNews);
        updateNewsInDb(parseNews)
    }
}

const getNewsFromApi = async () => {
    try{
        const url = `https://newsapi.org/v2/everything?q=astronomy&searchIn=title,description&pageSize=60&sortBy=publishedAt&language=en&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        return response.data.articles
    }catch(e){
        console.error(e)
        return undefined
    }
}

const parseRawNews = async(rawNews) => {
    const parseNews = []
    //map
    //filter urlImages

    // const example = [{exercise: true}, {exercise: false}]
    // const newEample = example.map(sample => ({
    //     url: sample.exercise
    // }))
    await rawNews.forEach(news => {
        const title = news.title;
        const url = news.url;
        const urlToImage = news.urlToImage;
        parseNews.push({
            title,
            url,
            urlToImage
        })
    })
    return parseNews
}

const updateNewsInDb = async(parseNews) => {
   try {
        await News.deleteMany({})
        await News.insertMany(parseNews)
    } catch (err) {
        console.log(err)
    }
}

setInterval(()=>{
    processNews()
}, 1000 * 3600 * 4)

module.exports = router