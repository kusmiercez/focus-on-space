const descriptions = document.querySelectorAll('p')
const details = document.querySelectorAll('.details');
let data;

const PLANETS_DETAILS = [
    {
        name: 'Mercury',
        diametr: '4879',
        rotationPeriod: '1407.6',
        distance: "57.9",
        orbitalPeriod: '88.0',
        meanTemp: '167',
        moons: '0',
    },
    {
        name: 'Venus',
        diametr: '12.104',
        rotationPeriod: '-5832.5',
        distance: "108.2",
        orbitalPeriod: '224.7',
        meanTemp: '464',
        moons: '0',
    },
    {
        name: 'Earth',
        diametr: '12.756',
        rotationPeriod: '23.9',
        distance: "149.6",
        orbitalPeriod: '365.2',
        meanTemp: '15',
        moons: '1',
    },
    {
        name: 'Mars',
        diametr: '6792',
        rotationPeriod: '24.6',
        distance: "228.0",
        orbitalPeriod: '687.0',
        meanTemp: '-65',
        moons: '2',
    },
    {
        name: 'Jupiter',
        diametr: '142.984',
        rotationPeriod: '9.9',
        distance: "778.5",
        orbitalPeriod: '4331',
        meanTemp: '-110',
        moons: '79',
    },
    {
        name: 'Saturn',
        diametr: '120.536',
        rotationPeriod: '10.7',
        distance: "1432.0",
        orbitalPeriod: '10.747',
        meanTemp: '-140',
        moons: '82',
    },
    {
        name: 'Uranus',
        diametr: '51.118',
        rotationPeriod: '-17.2',
        distance: "2867.0",
        orbitalPeriod: '30.589',
        meanTemp: '-195',
        moons: '27',
    },
    {
        name: 'Neptune',
        diametr: '49.528',
        rotationPeriod: '16.1',
        distance: "4515.0",
        orbitalPeriod: '59.800',
        meanTemp: '-200',
        moons: '14',
    }
]

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '05eca59d77msh08269870e87fa7cp18d311jsn203a1d285d2b',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
}

const sendApiRequest = () => {
    fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
        .then(response => response.json())
        .then(response => {
            data = response;
            console.log(data);
            addDescription();
            addDetails();
        })
}

const groupBy = (arr, property) => {
    return arr.reduce((acc, obj) => {
        const key = obj[property];
        acc[key - 1] = obj;
        return acc;
    }, []);
}

const addDescription = () => {
    const result = groupBy(data, "id")
    let i = 1;
    descriptions.forEach(d => {
        d.textContent = result[i++][0].description;
    })
}

const addDetails = () => {
    let j = 0;
    details.forEach(d => {
        d.innerHTML = `
            <ul>
            <li>Diameter (km): <span>${PLANETS_DETAILS[j].diametr}</span></li>
            <li>Rotation Period (hours): <span>${PLANETS_DETAILS[j].rotationPeriod}</span></li>
            <li>Distance from Sun (10^6 km): <span>${PLANETS_DETAILS[j].distance}</span></li>
            <li>Orbital Period (days): <span>${PLANETS_DETAILS[j].orbitalPeriod}</span></li>
            <li>Mean Temperature (C): <span>${PLANETS_DETAILS[j].meanTemp}</span></li>
            <li>Number of Moons: <span>${PLANETS_DETAILS[j].moons}</span></li>
            </ul>
            `
        j++
    })
}

sendApiRequest()