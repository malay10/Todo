import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends Component {

    render() {
        // console.log(this.props.todos);
        return this.props.todos.map(todo => ( <
            ToDoItem key = { todo.id }
            todo = { todo }
            markComplete = { this.props.markComplete }
            delTodo = { this.props.delTodo }
            />
        ));
    }
}

ToDos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default ToDos;