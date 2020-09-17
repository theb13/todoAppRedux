//ajax
import axios from 'axios'
const Url = 'http://localhost:3003/todo'

export const search = () => {
    const request = axios.get(Url)
    return {
        type: 'TODO_SEARCH',
        payload: request
    }
}

export const searchDescription = (description) => {
    const request = axios.get(`${Url}/${description}`)
    return {
        type: 'TODO_SEARCH',
        payload: request
    }
   
}

export function changeDescription(event) {
    return {
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    }
}

export function clearDescription() {
    return {
        type: 'TODO_CLEAR',
        payload: ''
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(Url, { description })
            .then(resp => dispatch(clearDescription()))
            .then(resp => dispatch(search()))
    }
}

export const handleMarkAsDone = (todo) => {
    return dispatch => {
        axios.put(`${Url}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch({ type: 'TODO_MARK_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}

export const handleMarkAsPeding = (todo) => {
    return dispatch => {
        axios.put(`${Url}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}
export const handleRemove = (todo) => {
    return dispatch => {
        axios.delete(`${Url}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}