const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/db_todo', { useNewUrlParser: true })
    .catch(e => {
        const msg = "Falha na conexao com mongodb"
        console.log('\x1b[41m%s', msg, '\x1b[0m')
    })