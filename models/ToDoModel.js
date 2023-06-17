const mongoose = require('mongoose');


// Define the ToDo schema using Mongoose.Schema

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ToDo', todoSchema);