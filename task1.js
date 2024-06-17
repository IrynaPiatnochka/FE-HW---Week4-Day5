import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Alex',
            hobbies: ['Photography', 'Cooking', 'Art']
        };

        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <p>Hobbies:</p>
                <ul>
                    {this.state.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;
