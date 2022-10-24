const processNews = require("./newsService.js")
require('dotenv').config();
const express = require('express')
const router = express.Router()
const News = require('../models/news')

router.get("/", async (req, res) => {
    try {
        const news = await News.find()
        res.json(news)
    }catch(err){
        res.json({message: err})
    }
})

setInterval(()=>{
    processNews()
}, 1000 * 3600 * 4)

module.exports = router