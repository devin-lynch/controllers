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

// HTTP method = GET
// URL pattern = '/animals'
// localhost:3000/animals



app.listen(PORT, () => {
    console.log(`Smooth sounds of jazz on port${PORT}`)
})

