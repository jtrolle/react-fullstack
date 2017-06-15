import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render() {
        const { id, text, type } = this.props.message;
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}>
                <strong>{type === 'success' ? 'Well done!' : 'Oh snap'}</strong> {text}
                <button onClick={this.handleClick} className="close"><span>&times;</span></button>
            </div>
        );
    }
}

FlashMessage.propTypes = {
    deleteFlashMessage: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired
}

export default FlashMessage;
