import React from 'react';
import { createBrowserHistory } from 'history';

import classnames from 'classnames';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import validateInput from '../../server/shared/validations/signup';
import TextFieldGroup from './TextFieldGroup';
import timezones from '../data/timezones';

const history = createBrowserHistory({
    forceRefresh: true
});

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {},
            isLoading: false,
            password: '',
            passwordConfirm: '',
            username: '',
            timezone: ''
        };


        this.formIsValid = this.formIsValid.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    formIsValid() {
        let { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors })
        }

        return isValid;
    }

    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    handleSubmit(ev) {
        ev.preventDefault();
        if (this.formIsValid()) {
            this.setState({ errors: {} })
            this.props.signupRequest(this.state).then(
                () => {
                    this.setState({ isLoading: false });
                    history.push('/');
                },
                err => this.setState({ errors: err.response.data, isLoading: false })
            );
        }
    }

    render() {
        let { errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Join our community!</h1>
                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    type="email"
                />

                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    type="password"
                />

                <TextFieldGroup
                    error={errors.passwordConfirm}
                    label="Confirm password"
                    name="passwordConfirm"
                    onChange={this.handleChange}
                    value={this.state.passwordConfirm}
                    type="password"
                />

                <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                />

                <div className={classnames('form-group', { 'has-danger': errors.timezone })}>
                    <label htmlFor="timezone">Timezone</label>
                    <select
                        className={classnames('form-control', { 'form-control-danger': errors.timezone })}
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

                <button type="submit" disabled={this.state.isLoading} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

SignupForm.propTypes = {
    signupRequest: PropTypes.func.isRequired
}

export default SignupForm;
