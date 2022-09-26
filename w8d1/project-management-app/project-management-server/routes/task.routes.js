const router = require("express").Router();
const mongoose = require('mongoose');
 
const Task = require('../models/Task.model');
const Project = require('../models/Project.model');
 
router.get('/tasks', (req, res) => {
  Task.find()
  .then(tasks => res.json(tasks))
  .catch(err => console.log(err))
})
//  POST /api/tasks  -  Creates a new task
router.post('/tasks', (req, res, next) => {
  const { title, description, projectId } = req.body;
 
  Task.create({ title, description, project: projectId })
    .then(newTask => {
      return Project.findByIdAndUpdate(projectId, { $push: { tasks: newTask._id } }, {new: true} );
    })
    .then(project => res.json(project))
    .catch(err => res.json(err));
});

router.put('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;
  const { title, description, project } = req.body;

  Task.findByIdAndUpdate(taskId, {title, description, project}, {new: true})
    .then(task => res.json(task))
    .catch(err => console.log(err))
})

router.delete('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params;

// Joanna Solution
  Task.findByIdAndRemove(taskId)
    .then((task) => {      
      Project.findByIdAndUpdate(task.project, { $pull: { tasks: taskId } }, {new: true})
        .then((project)=> {
          res.json({message:  `Task ${taskId} was successfully deleted and Project ${project._id} was updated`})        
        })  
      })
    .catch(err => console.log(err))
  // Pavel Solution
//   Task.findByIdAndDelete(taskId)
//   .then(deletedTask => {
//     const projectId = deletedTask.project.toString()
//     return Project.findById(projectId)
//   })
//   .then(selectedProject => {
//     let tasksArray = selectedProject.tasks
//     const selectedProjectId = selectedProject._id.toString()
//     const taskObjectId = mongoose.Types.ObjectId(taskId)
//     tasksArray.splice(tasksArray.indexOf(taskObjectId),1)
// ​
//     return Project.findOneAndUpdate(selectedProjectId, {tasks: tasksArray}, {new:true})
//   })
//   .then(updatedProject => res.json({message: `Sucesffuly updated project ${updatedProject._id}`}))
//   .catch(err=>console.log(err))
 
  // .then(project => res.json({message: `Task with an id ${task._id} was deleted, Project with an id ${project._id} was updated`}))
 
    
})
 
module.exports = router;