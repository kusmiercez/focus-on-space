//Mars weather 
// const API_KEY = "OCwASgHFrPp1ha5DJZzkLk3SMVeuDBKya42l3Ell";

// const sendApiRequest2 = async() => {
//     const res = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`);
//     const data = await res.json();
//     console.log(data)
// }

// sendApiRequest2()


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '05eca59d77msh08269870e87fa7cp18d311jsn203a1d285d2b',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Warszawa', options)
// 	.then(response => response.json())
// 	.then(response => {
//         console.log(response)
//     })

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '05eca59d77msh08269870e87fa7cp18d311jsn203a1d285d2b',
//         'X-RapidAPI-Host': 'stormglass-complete.p.rapidapi.com'
//     }
// };

// fetch('https://stormglass-complete.p.rapidapi.com/astro/%7Blat%7D/%7Blng%7D/%7BstartDate%7D/%7BendDate%7D', options)
//     .then(response => response.json())
//     .then(response => console.log(response))

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '05eca59d77msh08269870e87fa7cp18d311jsn203a1d285d2b',
        'X-RapidAPI-Host': 'real-time-climate-index.p.rapidapi.com'
    }
};

fetch('https://real-time-climate-index.p.rapidapi.com/api/climate-data', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
