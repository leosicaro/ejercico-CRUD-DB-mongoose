const express = require("express");
const router = express.Router();
const Task = require('../models/task.js')

router.post('/create',async(req,res)=>{
    try {
        const user = await Task.create(req.body);
        res.status(201).send(task)
    } catch (error) {
        console.error(error);
        res 
        .status(500)
        .send({message:"There was a problem trying to create a task"})
        
    }
})


router.get('/', async(req, res) =>{
    try {
        const tasks = await Task.find();
        res.json(tasks)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"There was a problem trying find all tasks"})
    }
});


router.get('/id/:_id', async (req, res) =>{
    try {
        const idTask = req.params._id
        const task = await Task.findById(idTask);
        if (!task){
            throw new Error('Task not found (UN 404 FEO DE GRANDE)')
        }
        res.json(task)
    } catch (error) {
        console.error(error)
        res.status(404).send({mensaje: "ID doesn't found"})
    }
});


router.put('/markAsCompleted/:_id', async(req, res) =>{
    try {
        const idTask = req.params._id;
        const task = await Task.findByIdAndUpdate(idTask, {completed: true}, {new: true})
        if (!task){
            throw new Error('cannot mark that task')
        }
        res.json(task)
        
    } catch (error) {
        console.error(error);
        res.status(404).json({mensaje: 'cannot mark that task by ID'});        
    }
})


router.put('/id/:_id', async(req, res) =>{
    try {
        const idTask = req.params._id;
        const {title} = req.body;
        const task = await Task.findByIdAndUpdate(idTask, {title}, {new:true});
        if(!task){
            throw new Error('cannot update that task')
        }
        res.json(task);
        
    } catch (error) {
        console.error(error)
        res.status(404).json({mensaje: 'error update by id'});
    }
})

router.delete('/id/:_id', async(req, res) =>{
    try {
        const idTask = req.params._id;
        const task = await Task.findByIdAndDelete(idTask);
        if (!task){
            throw new Error('task not found to delete')
        }
        res.json({mensaje: 'task deleted'});        
    } catch (error) {
        console.error(error)
        res.status(404).json({mensaje: 'error delete by id'});
    }
})

module.exports = router;