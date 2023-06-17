//CRUD operations for ToDo items


const ToDoModel = require('../models/ToDoModel')

//Retrieves all ToDo items.
module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find()
    res.send(todo);
}

//Saves a new ToDo item.
module.exports.saveToDo = (req, res) => {
    const { text } = req.body

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data)
        })
        .catch((err) => console.log(err))
}

//Updates an existing ToDo item.
module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Update Successful..."))
        .catch((err) => console.log(err))
}


//Deletes a ToDo item.
module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Delete Successful..."))
        .catch((err) => console.log(err))
}