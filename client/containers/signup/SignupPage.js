import React from 'react';

import SignupForm from '../../components/SignupForm';

class SignupPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;