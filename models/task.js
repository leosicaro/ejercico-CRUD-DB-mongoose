const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    tittle : String,
    completed : String,
    
},{timestamps:true});

const Task = mongoose.model('user', TaskSchema);

module.exports = Task;