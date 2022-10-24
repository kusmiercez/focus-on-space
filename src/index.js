require('./db/mongoose')
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

app.use(express.json())

const newsRouter = require('./routes/news')
app.use('/news', newsRouter)

app.use(express.static('./src/static'));

app.listen(3000)