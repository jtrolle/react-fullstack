import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

import SignupForm from '../../components/SignupForm';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SignupForm signupRequest={userSignupRequest}/>
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);