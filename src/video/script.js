const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '05eca59d77msh08269870e87fa7cp18d311jsn203a1d285d2b',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

fetch('https://bing-news-search1.p.rapidapi.com/news?originalImg=true&category=ScienceAndTechnology&mkt=en-US&setLang=EN&safeSearch=Off&textFormat=Raw', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));