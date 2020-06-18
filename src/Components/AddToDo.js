import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ToDoItem from './ToDoItem';

export class AddToDo extends Component {

    state = {
        title: ''
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title:''});
    }


    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="title" 
                style={{flex: '10', padding: 10}}
                placeholder="Add ToDo ..."
                value={this.state.title}
                onChange={this.onChange} />

                <input
                    type= "submit" value="Submit"
                    className="btn"
                    onClick={this.add}
                    style={{flex: '1'}} 
                    />
            </form>
        )
    }
}

AddToDo.propType = {
    addToDo: PropTypes.func.isRequired
}

export default AddToDo
