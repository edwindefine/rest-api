const express = require('express')
const cors = require('cors')
const secure = require('ssl-express-www')
const favicon = require('serve-favicon')

const app = express()
const __path = process.cwd()
const PORT = process.env.PORT || 8080
const {color, hexColor, bgColor} = require('./lib/color')

const mainRoutes = require('./routes/main');
const apiRoutes = require('./routes/api');

app.enable('trust proxy');
app.set("json spaces", 2)
app.use(cors())
app.use(secure)
app.use(favicon(__path + '/views/favicon.ico'))
app.use(express.static(__path + '/public'))

app.use('/', mainRoutes)
app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(color("Server running on port "+PORT, 'green'))
})