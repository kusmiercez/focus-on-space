const express = require('express')
const port = 3000
const app = express()

app.use(express.static('src'));

// app.set('view engine', 'hbs')

// app.get('/', (req, res) => {
//     res.render('index')
// })

app.listen(port)