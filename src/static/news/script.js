const cardTemp = document.querySelector('.temp-card')
const grid = document.querySelector('.grid')
const API_KEY = '7b5a196484ee4c7baa609a95c32ef4cd';
let newCard;
let allNews;

const currentDate = new Date;
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const sendDbRequest = () => {
    fetch('http://localhost:3000/news')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            allNews = response;
            prepareNewsCard()
        })
}

const prepareNewsCard = () => {
    allNews.forEach(news => {
        newCard = cardTemp.content.cloneNode(true);
        newCard.querySelector('a').href = news.url;
        newCard.querySelector('.news-title').textContent = news.title;
        newCard.querySelector('.photo').innerHTML = `<img src="${news.urlToImage}">`;
        grid.appendChild(newCard)

    })
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": .6
    });
}

sendDbRequest()