const port = 3003
const app = require('express')()
const consign = require('consign')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.mongo = mongoose

consign()
    .then('./src/config/middlewares.js')
    .then('./src/config/database.js')
    .then('./src/api/TodoService.js')
    .then('./src/config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log('backend executando...')
})