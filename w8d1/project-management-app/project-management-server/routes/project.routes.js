const router = require("express").Router(); 
const mongoose = require('mongoose');
 
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');
 
//  GET /api/projects  -  Send all projects 
router.get('/projects', (req, res) =>{
    Project.find()
        .populate('tasks')
        .then(projects => res.json(projects))
        .catch(err => console.log(err))
})

//  POST /api/projects  -  Creates a new project
router.post('/projects', (req, res, next) => {
  const { title, description } = req.body;
 
  Project.create({ title, description, tasks: [] })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

// GET /api/projects/:projectId - Send a specific project

router.get('/projects/:projectId', (req, res) => {
    const { projectId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }

    Project.findById(projectId)
          .populate('tasks')
        .then(project => res.json(project))
        .catch(err => console.log(err))
})

// PUT /api/projects/:projectId - Edit/Update a specific project

router.put('/projects/:projectId', (req, res) =>{
    const { projectId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }
    const { title, description } = req.body;

    Project.findByIdAndUpdate(projectId, {title, description}, {new: true}) // {new: true} is so we get the updated data returned from the query
        .then(project => res.json(project))
        .catch(err => console.log(err))
})

// DELETE /api/projects/:projectId = Delete a specific project

router.delete('/projects/:projectId', (req, res) => {
    const { projectId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }
    // Project.findByIdAndDelete(projectId)
    //     .then(()=> res.json({message: 'Project was successfully deleted'}))
    //     .catch(err => console.log(err))

    Project.findByIdAndRemove(projectId)
        .then(project => res.json({message: `Project with the id ${project._id} was successfully deleted`}))
        .catch(err => console.log(err))
})
 
module.exports = router;