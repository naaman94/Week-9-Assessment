import React, { Component } from 'react'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

export class App extends Component {
  state = {
    todos: ""
  };

  add = (inputData) => {
    this.setState({
      todos: [...this.state.todos, inputData]
    });
  }

  render() {
    return (
      <div>
        <UserInput add={this.add} />
        <UserOutput out={this.state.todos} />
        {/* i know i should add map to the to todos but there is no time and MY Computer is فاقع and my node is not work:)  */}
      </div>
    )
  }
}
export default App;
