const mongoose = require('mongoose')

const planetDecription = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    details: {
        diametr: Number,
        rotationPeriod: Number,
        distance: Number,
        orbitalPeriod: Number,
        meanTemp: Number,
        moons: Number,
    }
})

module.exports = mongoose.model("Planet decription", planetDecription)
