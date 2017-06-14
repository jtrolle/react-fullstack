import React from 'react';

import classnames from 'classnames';
import propTypes from 'prop-types';

const TextFieldGroup = ({ error, label, name, onChange, value, type }) => {
    return (
        <div className={classnames('form-group', { 'has-danger': error })}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className={classnames('form-control', { 'form-control-danger': error })}
                aria-describedby={`${name}Help`}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <div className="form-control-feedback">{error}</div>}
        </div>
    );
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

TextFieldGroup.propTypes = {
    error: propTypes.string,
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
}

export default TextFieldGroup;