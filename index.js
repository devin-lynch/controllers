const express = require('express')
const ejsExpressLayouts = require('express-ejs-layouts')
const app = express()

const PORT = 3000

app.set('view engine', 'ejs')
app.use(ejsExpressLayouts)

app.use('/loveit', require('./controllers/loveit'))
app.use('/leaveit', require('./controllers/leaveit'))


// ROUTE
app.get('/', (req, res) => {
    res.render('home')
})

// ROUTE is a url pattern, something you can type in a browser and see a page
// CONTROLLER organizes similary named routers; groups similar routes
// ROUTER is a method that express provides to us to create controllers





app.listen(PORT, () => {
    console.log(`Smooth sounds of jazz on port${PORT}`)
})

