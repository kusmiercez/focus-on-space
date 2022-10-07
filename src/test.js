const { default: axios } = require('axios');
const express = require('express');
const { getNewsFromDb, processNews, getNewsFromApi } = require('./src/server/newsService');
const port = 3000
const app = express()
const axios = require('axios').default;
// import fetch from 'node-fetch';


// app.use(express.static('public'));

// setInterval(()=>{
//     processNews()
// }, 1000 * 3600 * 4)

app.get('/', (req, res) => {
    console.log("api");
    res.json({
        'message': 'here is the response'
    });
});

const getNews = () => {
    return []
}

app.get("/api", async(req, res) => {
    //zwracanie listy newsow z bazy danych
    // res.json(getNewsFromDb())
    res.json(getNewsFromApi())
})

// app.get('/api', async (req, res) => {
//     const api_key = '7b5a196484ee4c7baa609a95c32ef4cd';
//     const news_url = `https://newsapi.org/v2/everything?q=astronomy&searchIn=title,description&pageSize=60&sortBy=publishedAt&language=en&apiKey=${api_key}`
//     const news = await fetch(news_url);
//     const data = await news.json();
//     res.json(data);
// })

// app.set('view engine', 'hbs')

// app.get('/climat-temperature', (req, res) => {

//     //uderzenie do bazy danyc
//     //obrobienie danych
//     //wstrzykniecie danych do widoku
//     //zwrocenie widoku i przeladowanie strony
//     // res.render('climat')

//     res.send(
//         {
//             wenus: " opis example"
//         }
//     )
// })

app.listen(port)