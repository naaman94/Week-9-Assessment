import React, { Component } from 'react'

export class UserInput extends Component {
    state = {
        todos: ""
    };
    onChange = (e) => this.setState({ todos: e.target.value });
    onSubmit = () => {
        this.props.add.bind(this, this.state.title); this.setState({ todos: '' });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        name="title"
                        value={this.state.todos}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UserInput
