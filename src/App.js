import React, {Component} from 'react';
import './App.css';
import Todos from './Components/ToDos';
import Header from './Components/Layout/header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Take out linnen',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boos',
        completed: false
      }
    ]
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
   this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
 }
  

  render(){
    console.log(this.state.todos);
  return (
    <div className="App">
      <Header />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
    </div>
  );
  }
}

export default App;
