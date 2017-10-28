import * as React from 'react';
import { ITodoProps } from './interface';
import './style.css';

class Todo extends React.PureComponent<ITodoProps> {
  constructor(props: ITodoProps) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    const { todo, index, onRemove } = this.props;

    return (
      <span>
        {todo.text}
        <button onClick={() => onRemove(index)}>X</button>
      </span>
    );
  }
}

export default Todo;