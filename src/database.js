const { Sequelize } = require('sequelize');

// Create a new Sequelize instance for an in-memory SQLite database
const sequelize = new Sequelize('sqlite::memory:', {
    logging: false // Disable logging; default is console.log
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;