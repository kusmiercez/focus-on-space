import { PLANETS_DESCRIPTION } from "./planetsDescription.js";
const descriptions = document.querySelectorAll('p')
const detailsTemp = document.querySelector('.details-temp');
const details = document.querySelectorAll('.details');


const addDescription = () => {
    let i = 0, j = 0;
    descriptions.forEach(description => {
        description.textContent = PLANETS_DESCRIPTION[i++].description;
    })
    details.forEach(details => {
        const newDetails = detailsTemp.content.cloneNode(true)
        const allDetails = PLANETS_DESCRIPTION[j++].details
        newDetails.querySelector('#diametr').textContent = allDetails.diametr;
        newDetails.querySelector('#rot-period').textContent = allDetails.rotationPeriod;
        newDetails.querySelector('#distance').textContent = allDetails.distance;
        newDetails.querySelector('#orb-period').textContent = allDetails.orbitalPeriod;
        newDetails.querySelector('#temp').textContent = allDetails.meanTemp;
        newDetails.querySelector('#moons').textContent = allDetails.moons;
        details.appendChild(newDetails)
    })
}

addDescription()
