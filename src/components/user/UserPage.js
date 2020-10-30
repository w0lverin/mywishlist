import React, {Component} from 'react';
import {UserContext} from "../../context/user/UserContext";

class UserPage extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {value => {
                    const { name, role, isAdmin } = value;
                    return (
                        <React.Fragment>
                            <h1>
                                Current User
                            </h1>
                            <p><b>Name:</b> {name} </p>
                            <p><b>Role:</b> {role} </p>
                            <p><b>isAdmin:</b> {isAdmin? 'true' : 'false'} </p>
                            <br /><br /><br />
                            <button>Update User</button>
                        </React.Fragment>
                    );
                }}
            </UserContext.Consumer>
        );
    }
}

export default UserPage;