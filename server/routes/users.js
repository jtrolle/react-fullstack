import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

const router = express.Router();

const validateInput = data => {
    let errors = {};

    if (validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }

    if (validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = 'This field is required';
    }

    if (!validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = 'PAsswords must match';
    }

    if (validator.isEmpty(data.timezone)) {
        errors.timezone = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/', (req, res) => {
    let { errors, isValid } = validateInput(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    }
});

export default router;