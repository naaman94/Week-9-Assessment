import React, { Component } from 'react'

export class UserOutput extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.out}</h1>
            </div>
        )
    }
}

export default UserOutput
