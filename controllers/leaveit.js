const express = require('express')
const router = express.Router()

router.get('/movies', (req, res) => {
    res.render('leaveit/movies', {movies: ['Morbius', 'Marvel Movies', 'The Last Jedi']})
})  

router.get('/products', (req, res) => {
    res.render('leaveit/products', {products: ['Small Coffee Mugs', 'Ketchup', 'Wallet Chains']})
})  

module.exports = router