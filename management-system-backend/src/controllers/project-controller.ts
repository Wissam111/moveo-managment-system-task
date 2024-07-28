import { ProjectDto, FindOptionsDto } from "../entities/dtos";
import { Request, Response, NextFunction } from "express";
const { projectService } = require("../use-cases");

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description }: ProjectDto = req.body;
    const project = await projectService.createProject({
      name,
      description,
    });
    res.status(201).json({
      message: "Project created successfull",
      project,
    });
  } catch (e) {
    console.error("Error creating project:", e.message);
    next(e);
  }
};

const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;
    const project = await projectService.updateProject({
      projectId: id,
      name,
      description,
    });
    res.status(201).json({
      message: "Project updated successfull",
      project,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const project = await projectService.deleteProject({
      projectId: id,
    });
    res.status(200).json({
      message: "Project deleted successfull",
      project,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const project = await projectService.getProject({
      projectId: id,
    });
    res.status(200).json({
      message: "Project fetched successfull",
      project,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { search, sort, page, pageSize }: FindOptionsDto = req.body;

    const data = await projectService.getProjects({
      search,
      sort,
      page,
      pageSize,
    });
    res.status(200).json({
      message: "Fetched projects successfull",
      data,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  updateProject,
  createProject,
  deleteProject,
  getProject,
  getProjects,
};
