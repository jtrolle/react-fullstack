import React from 'react';

export default class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Sign in' };
  }

  render() {
    return <h1>{this.state.someKey}</h1>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Sign up' });
  }
}