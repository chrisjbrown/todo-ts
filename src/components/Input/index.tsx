import * as React from 'react';
import { InputProps, InputState } from './interface';
import './style.css';

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  }

  onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.props.onEnter({
        text: this.state.value,
        completed: false
      });
      this.setState({value: ''});
    }
  }

  render() {
    const { value } = this.state;
    const { placeholder } = this.props;

    return (
      <input
        placeholder={placeholder}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        value={value}
      />
    );
  }
}

export default Input;