import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage, userSignupRequest } from '../../actions';

import SignupForm from '../../components/SignupForm';

class SignupPage extends React.Component {
  render() {
    const { addFlashMessage, userSignupRequest } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SignupForm addFlashMessage={addFlashMessage} signupRequest={userSignupRequest} history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  addFlashMessage: PropTypes.func.isRequired,
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { addFlashMessage, userSignupRequest })(SignupPage);