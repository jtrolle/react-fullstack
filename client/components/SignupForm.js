import React from 'react';

import timezones from '../data/timezones';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            username: '',
            timezone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    handleSubmit(ev) {
        ev.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Join our community!</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        aria-describedby="passwordHelp"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <input
                        type="password"
                        className="form-control"
                        aria-describedby="passwordConfirmHelp"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="usernameHelp"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="timezone">Timezone</label>
                    <select
                        className="form-control"
                        name="timezone">
                        <option value="">Choose your timezone</option>
                        {Object.keys(timezones).map(key => <option value={timezones[key]}>{key}</option>)}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default SignupForm;
