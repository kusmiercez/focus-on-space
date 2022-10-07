require('./db/mongoose')
const axios = require('axios').default;
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

app.use(express.json())

const planetsRouter = require('./routes/planets')
app.use('/planets', planetsRouter)

const newsRouter = require('./routes/news')
app.use('/news', newsRouter)

app.listen(3000)
