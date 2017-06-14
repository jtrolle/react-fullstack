import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';

import timezones from '../data/timezones';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {},
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
        this.setState({ errors: {} })
        this.props.signupRequest(this.state).then(
            () => { },
            err => this.setState({ errors: err.response.data })
        );
    }

    render() {
        let { errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Join our community!</h1>
                <div className={errors.email ? 'form-group has-danger' : 'form-group'}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={errors.email ? 'form-control form-control-danger' : 'form-control'}
                        aria-describedby="emailHelp"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="name@example.com"
                    />
                    {errors.email && <div className="form-control-feedback">{errors.email}</div>}
                </div>

                <div className={errors.password ? 'form-group has-danger' : 'form-group'}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={errors.password ? 'form-control form-control-danger' : 'form-control'}
                        aria-describedby="passwordHelp"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {errors.password && <div className="form-control-feedback">{errors.password}</div>}
                </div>

                <div className={errors.passwordConfirm ? 'form-group has-danger' : 'form-group'}>
                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <input
                        type="password"
                        className={errors.passwordConfirm ? 'form-control form-control-danger' : 'form-control'}
                        aria-describedby="passwordConfirmHelp"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                    />
                    {errors.passwordConfirm && <div className="form-control-feedback">{errors.passwordConfirm}</div>}
                </div>

                <div className={errors.username ? 'form-group has-danger' : 'form-group'}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className={errors.username ? 'form-control form-control-danger' : 'form-control'}
                        aria-describedby="usernameHelp"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.timezone}
                    />
                    {errors.username && <div className="form-control-feedback">{errors.username}</div>}
                </div>

                <div className={errors.timezone ? 'form-group has-danger' : 'form-group'}>
                    <label htmlFor="timezone">Timezone</label>
                    <select
                        className={errors.timezone ? 'form-control form-control-danger' : 'form-control'}
                         aria-describedby="timezoneHelp"
                        name="timezone"
                        onChange={this.handleChange}
                        value={this.state.timezone}
                    >
                        <option value="">Choose your timezone</option>
                        {map(timezones, (val, key) => <option key={val} value={key}>{key}</option>)}
                    </select>
                    {errors.timezone && <div className="form-control-feedback">{errors.timezone}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

SignupForm.propTypes = {
    signupRequest: PropTypes.func.isRequired
}

export default SignupForm;
