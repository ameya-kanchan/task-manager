const { body } = require('express-validator');

// Validation rules for creating and updating tasks
const taskValidationRules = () => {
    return [
        body('title')
            .notEmpty().withMessage('Title is required.'),
        body('description')
            .notEmpty().withMessage('Description is required.'),
        body('completed')
            .isBoolean().optional().withMessage('Completed must be a boolean value.')
    ];
};

module.exports = {
    taskValidationRules,
};