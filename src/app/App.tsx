import * as React from 'react';
import Input from '../components/Input';
import './App.css';
import { AppState } from './interface.d';
import { ITodo } from '../components/Todo/interface';
import Todo from '../components/Todo';

const logo = require('./logo.svg');

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      todos: []
    };
  }

  onAdd = (todo: ITodo) => {
    const { todos } = this.state;

    todo.id = todos.length;

    todos.push(todo);

    this.setState({todos});
  }

  onRemoveTodo = (todoIndex: number) => {
    const todos = this.state.todos;

    todos.splice(todoIndex, 1);
    this.setState({todos});
  }

  renderTodos() {
    const todos = this.state.todos;

    return todos.map((todo, index) => {
      return (
        <div key={todo.id}>
          <Todo
            todo={todo}
            index={index}
            onRemove={this.onRemoveTodo}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to another todo thing, but w/ typescript :)</h2>
        </div>
        <div>
          {
            this.state.todos.length > 0 ?
              this.renderTodos()
              :
              <div>Add some todos</div>
          }
        </div>
        <Input
          placeholder="Enter a to do"
          onEnter={this.onAdd}
        />
      </div>
    );
  }
}

export default App;
