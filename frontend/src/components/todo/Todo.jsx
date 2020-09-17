
import React, { Component } from 'react';
//ajax
import axios from 'axios'

//components
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Url = 'http://localhost:3003/todo'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsPeding = this.handleMarkAsPeding.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh() {
        axios.get(Url)
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))

    }

    handleAdd() {
        const description = this.state.description
        axios.post(Url, { description })
            .then(res => this.refresh())

    }
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo) {
        axios.delete(`${Url}/${todo._id}`)
            .then(res => this.refresh())
    }

    handleMarkAsDone(todo) {
        axios.put(`${Url}/${todo._id}`, { ...todo, done: true })
            .then(res => this.refresh())
    }

    handleMarkAsPeding(todo) {
        axios.put(`${Url}/${todo._id}`, { ...todo, done: false })
            .then(res => this.refresh())
    }
    handleClear(){
        this.setState({ ...this.state, description: '' })
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <hr />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd}
                    handleChange={this.handleChange} 
                    handleClear={this.handleClear} />
               
                <TodoList  handleRemove={this.handleRemove}
                    handleMarkAsPeding={this.handleMarkAsPeding}
                    handleMarkAsDone={this.handleMarkAsDone} />
            </div>
        )
    }
}