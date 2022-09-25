const date = document.querySelector('.date')
const picture = document.querySelector('.pic')
const title = document.querySelector('.pic-title')
const copyright = document.querySelector('.pic-copyright')
const description = document.querySelector('.pic-description')
const API_KEY = "OCwASgHFrPp1ha5DJZzkLk3SMVeuDBKya42l3Ell";

const sendApiRequest = async() => {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data = await res.json();
    useApiData(data)
}

const useApiData = (data) => {
    date.textContent = data.date;
    title.textContent = data.title;
    picture.innerHTML = `<img src="${data.url}">`;
    copyright.textContent = data.copyright;
    description.textContent = data.explanation;
}

sendApiRequest()