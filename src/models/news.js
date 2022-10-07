const mongoose = require('mongoose')

const news = new mongoose.Schema({
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    urlToImage: {
        type: String,
    }
})

module.exports = mongoose.model("News", news)