const { taskService } = require("../use-cases");
import { Request, Response, NextFunction } from "express";
import { FindOptionsDto, TaskDto } from "entities/dtos";


// create a new task
const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, projectId, status, priority }: TaskDto =
      req.body;
    const task = await taskService.createTask({
      title,
      description,
      projectId,
      status,
      priority,
    });
    res.status(201).json({
      message: "Task created successfull",
      task,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};


// update a task
const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, projectId, status, priority }: TaskDto =
      req.body;
    const { id } = req.params;
    const task = await taskService.updateTask({
      taskId: id,
      title,
      description,
      projectId,
      status,
      priority,
    });
    res.status(200).json({
      message: "Task updated successfull",
      task,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};


// delete a task
const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const task = await taskService.deleteTask({
      taskId: id,
    });
    res.status(200).json({
      message: "Task deleted successfull",
      task,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const task = await taskService.getTask({
      taskId: id,
    });
    res.status(200).json({
      message: "Task fetched successfull",
      task,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { search, sort, sortBy, page, pageSize, projectId }: FindOptionsDto =
      req.body;

    const data = await taskService.getTasks({
      search,
      sort,
      page,
      pageSize,
      projectId,
      sortBy,
    });
    res.status(200).json({
      message: "Fetched tasks successfull",
      data,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  updateTask,
  createTask,
  deleteTask,
  getTask,
  getTasks,
};
