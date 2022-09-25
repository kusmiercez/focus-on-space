const MERCURY = document.querySelector('#mercury');
const VENUS = document.querySelector('#venus');
const EARTH = document.querySelector('#earth');
const MARS = document.querySelector('#mars');
const JUPITER = document.querySelector('#jupiter');
const SATURN = document.querySelector('#saturn');
const URANUS = document.querySelector('#uranus');
const NEPTUNE = document.querySelector('#neptune');
const MOON = document.querySelector('#moon');
const MOON_ORBIT = document.querySelector('.o-moon')

class Planet {
    constructor(el, v, r) {
        this.el = el
        this.v = v;
        this.r = r;
        this.rad = 0;
    }
}

const mercury = new Planet(MERCURY, .047, 50)
const venus = new Planet(VENUS, .035, 70)
const earth = new Planet(EARTH, .03, 95)
const mars = new Planet(MARS, .024, 130)
const jupiter = new Planet(JUPITER, .013, 200)
const saturn = new Planet(SATURN, .009, 300)
const uranus = new Planet(URANUS, .007, 350)
const neptune = new Planet(NEPTUNE, .005, 400)
const moonOrbit = new Planet(MOON_ORBIT, .03, 95)
const moon = new Planet(MOON, .2, 14)

const movePlanet = (objects) => {
    objects.forEach(object => {
        object.rad += object.v;
        object.el.style.left = `${Math.cos(object.rad) * object.r + 400}px`;
        object.el.style.top = `${Math.sin(object.rad) * object.r + 400}px`;
    })
}

const moveMoon = () => {
    moon.rad += moon.v;
    moon.el.style.left = `${Math.cos(moon.rad) * moon.r + 13}px`;
    moon.el.style.top = `${Math.sin(moon.rad) * moon.r + 13}px`;
}

setInterval(() => {
    movePlanet([mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, moonOrbit])
    moveMoon()
}, 25)