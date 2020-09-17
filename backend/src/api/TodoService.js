const { Schema } = require("mongoose")

module.exports = app => {
    const schema = new Schema(
        {
            description: { type: String, require: true },
            done: { type: Boolean, require: true, default: false },
            createdAt: { type: Date, default: Date.now }
        }
    )
    const Todo = app.mongo.model('Todo', schema)

    const post = (req, res) => {
        const todo = new Todo({
            description: req.body.description,
            done: req.body.done
        })
        todo.save().then(_ => res.status(200).send('Gravado'))
    }

    const put = async (req, res) => {
        Todo.findByIdAndUpdate(req.params.id, {
            description: req.body.description,
            done: req.body.done
        })
            .then(_ => res.send('Sucesso'))
            .catch(err => res.status(404).send('Nao encontrado'))
    }

    const del = async (req, res) => {
        Todo.findByIdAndDelete(req.params.id)
            .then(_ => res.send('Sucesso'))
            .catch(err => res.status(404).send('Nao encontrado'))

    }

    const get = async (req, res) => {
        await Todo.find({}, {}, { sort: { 'createdAt': -1 } })
            .then(todo => {
                res.json(todo)
            }).catch(er => res.status(404).send(er))
    }

    const getSearch = async (req, res) => {
        const name = "John"
        await Todo.find({ description: { $regex: req.params.id, $options: 'i' } })
        // .limit(5)
        // await Todo.find({ description: `${}` }, {}, { sort: { 'createdAt': -1 } })
            .then(todo => {
                res.json(todo)
            }).catch(er => res.status(404).send(er))

        // await Todo.find({ description: /john/i }, 'name friends') .then(todo => {
        //     res.json(todo)
        // }).catch(er => res.status(404).send(er))
    }
    return { get, post, put, del, getSearch }
}