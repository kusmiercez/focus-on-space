const cardTemp = document.querySelector('.temp-card')
const grid = document.querySelector('.grid')
const API_KEY = '7b5a196484ee4c7baa609a95c32ef4cd';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '05eca59d77msh08269870e87fa7cp18d311jsn203a1d285d2b',
        'X-RapidAPI-Host': 'space-news.p.rapidapi.com'
    }
};
let newCard;
let allNews;
const currentDate = new Date;
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const sendApiRequest = () => {
    fetch(`https://newsapi.org/v2/everything?q=astronomy&from=${year}-${month}-${day-5}&to=${year}-${month}-${day}&pageSize=60&sortBy=publishedAt&language=en&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            allNews = response.articles;
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

sendApiRequest()



