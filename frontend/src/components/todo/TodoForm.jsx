import React, { Component } from 'react';
//redux 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//redux-actions
import { changeDescription, search,searchDescription, add, clearDescription } from '../../store/actions/todoAction'

//templates
import IconButton from '../template/IconButton';
import Grid from '../template/Grid';

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler = e => {
        const { add, clearDescription,description,searchDescription } = this.props
        if (e.key === 'Enter')
            e.shiftKey ? searchDescription(description) : add(description)
        else
            if (e.key === 'Escape')
                clearDescription()
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { description, changeDescription, clearDescription, add,searchDescription } = this.props
        return (
            <div role='form' className='todoForm' >
                <div className='row'>
                    <Grid cols='12 10' extra='mb-1'>
                        <input type="text" name="" id="" className='form-control' placeholder='Tarefa...'
                            value={description} onChange={changeDescription}
                            onKeyUp={this.keyHandler}
                        />
                    </Grid>
                    <Grid cols='12 2' >
                        <IconButton type='primary' icon='plus' onClick={() => add(description)} />
                        <IconButton type='info' icon='search' onClick={_=>searchDescription(description)} />
                        <IconButton type='danger' icon='close' onClick={clearDescription} />
                    </Grid>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({ description: state.todo.description })
const mapDispatchToProps = (dispatch) => bindActionCreators({ searchDescription,changeDescription, search, add, clearDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)