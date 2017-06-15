import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteFlashMessage } from '../../actions';
import FlashMessage from './FlashMessage';

class FlashMessagesList extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => {
          return <FlashMessage 
            deleteFlashMessage={this.props.deleteFlashMessage}
            key={message.id}
            message={message}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.flashMessages
  }
}

FlashMessagesList.propTypes = {
  deleteFlashMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
