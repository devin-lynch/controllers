const express = require('express')
const router = express.Router()

// localhost:3000/loveit/foods
router.get('/foods', (req, res) => {
    res.render('loveit/foods', {foods: ['Sushi', 'Margherita Pizza', 'Shepherds Pie']})
})  

// localhost:3000/loveit/animals
router.get('/animals', (req, res) => {
    res.render('loveit/animals', {animals: ['Sand Crab', 'Corny Joke Dog']})
  });

  module.exports = router