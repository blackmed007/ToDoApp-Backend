// sets up an Express router for handling routes related to ToDo items

const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

// Create a new router instance
const router = Router()


router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;