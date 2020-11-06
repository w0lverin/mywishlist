import React, {Component} from 'react';
import {UserContext} from "../../context/user/UserContext";
import TextInputGroup from "../layout/TextInputGroup";

class UserPage extends Component {

    goBack = e => { this.props.history.push('/'); };

    render() {
        return (
            <UserContext.Consumer>
                {value => {
                    const { name, role, privileges } = value;
                    return (
                        <React.Fragment>
                            <div className="card text-dark mb-3">
                                <div className="card-header text-light bg-secondary"><b>USER PROFILE</b></div>
                                <div className="card-body">
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder=""
                                        value={name}
                                        disabled={true}
                                    />
                                    <TextInputGroup
                                        label="Role"
                                        name="role"
                                        placeholder=""
                                        value={role}
                                        disabled={true}
                                    />
                                    <TextInputGroup
                                        label="Privileges"
                                        name="privileges"
                                        placeholder=""
                                        value={privileges}
                                        disabled={true}
                                    />
                                    <div align={'right'}>
                                        <input
                                            type="button"
                                            value="Return to Home Page"
                                            className="btn btn-outline-danger btn-group-lg"
                                            onClick={this.goBack}
                                        />
                                        <br/><br/>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </UserContext.Consumer>
        );
    }
}

export default UserPage;