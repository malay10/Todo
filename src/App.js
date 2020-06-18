import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './Components/ToDos';
import Header from './Components/Layout/Header';
import AddToDo from './Components/AddToDo';
import About from './Components/Pages/About';
import {uuid} from 'uuidv4';

import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState( {todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
  });
  }

  //Delete Todo
 delTodo = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
 }

  addToDo = (title) =>{
   console.log("aa");
   try{
    axios.post('http://jsonplaceholder.typicode.com/todos', {id: uuid(),title,
     completed:false
  }).then(res => {this.setState({todos: [...this.state.todos, res.data]})
  console.log(res);
} )
}catch(erro){
  console.log(erro);
}
  

  }
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=9').then(res => {this.setState({todos: res.data});
    // console.log(this.state.todos);
  });
  }

  render(){
    console.log(this.state.todos);
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" render={ (props) => {
          return(
            <React.Fragment>
             <AddToDo addToDo={this.addToDo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
           </React.Fragment>
          );
        }} />
        <Route path="/about" component={About}/>
      </div>
    </div>
    </Router>
  );
  }
}

export default App;
