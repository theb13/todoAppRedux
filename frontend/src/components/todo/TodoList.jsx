import React from 'react';
import IconButton from '../template/IconButton';
//redux 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//redux-actions
import { handleMarkAsPeding, handleMarkAsDone,handleRemove } from '../../store/actions/todoAction'


const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(row => (
            <tr key={row._id}>
                <td className={row.done ? 'markAsDone' : ''} >{row.description}</td>
                <td>
                    <IconButton type='success' icon='check' hide={row.done} onClick={() => props.handleMarkAsDone(row)} />
                    <IconButton type='warning' icon='undo' hide={!row.done} onClick={() => props.handleMarkAsPeding(row)} />
                    <IconButton type='danger' icon='trash-o' hide={!row.done} onClick={() => props.handleRemove(row)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table mt-3'>
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Acções</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ handleMarkAsDone,handleMarkAsPeding,handleRemove }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)