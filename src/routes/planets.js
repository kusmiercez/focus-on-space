const express = require('express')
const router = express.Router()
const Planet = require('../models/planet')

//GET BACK ALL THE PLANETS
router.get('/', async(req, res) => {
    try{
        const planets = await Planet.find()
        res.json(planets)
    }catch(err){
        res.json({message: err})
    }
})

//SUBMITS A PLANET
router.post('/', async(req, res) => {
    const planet = new Planet({
        name: req.body.name,
        description: req.body.description,
        details: req.body.details
    })
    try{
        const savePlanet = await planet.save()
        res.json(savePlanet)
    }catch(err){
        res.json({message: err})
    }
})

//SPECIFIC PLANET
// router.get('/:planetId', async(req, res) => {
//     try{
//         const planet = await Planet.findById(req.params.planetId)
//         res.json(planet)
//     }catch (err){
//         res.json({message: err})
//     }
// })

module.exports = router