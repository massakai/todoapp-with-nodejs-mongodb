const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({});
        res.status(200).json(allTasks);
    } catch (err) {
        res.status(500).json(err);
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json(`_id:${req.params.id}は存在しません`)
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if (!task) {
            return res.status(404).json(`_id:${req.params.id}は存在しません`)
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteTask = (req, res) => {
    res.send("ある特定のタスクを削除しました");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
}
