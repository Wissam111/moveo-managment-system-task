import { TaskDto } from "entities/dtos";
import { buildCreateTaskUseCase } from "../create-task";
import { buildGetTaskUseCase } from "../get-task";
import { buildUpdateTaskUseCase } from "../update-task";
import { buildDeleteTaskUseCase } from "../delete-task";

const mockTaskDb = {
  findByTitle: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockResolvedValue({
    id: "1",
    title: "test task",
    description: "task description",
    projectId: "project1",
    status: 0,
    priority: 1,
    createdAt: new Date(),
  }),
  findById: jest.fn().mockResolvedValue({
    id: "1",
    title: "test task",
    description: "task description",
    projectId: "project1",
    status: 0,
    priority: 1,
    createdAt: new Date(),
  }),
  update: jest.fn().mockResolvedValue({
    id: "1",
    title: "updated task",
    description: "updated description",
    projectId: "project1",
    status: 1,
    priority: 2,
    createdAt: new Date(),
  }),
  deleteById: jest.fn().mockResolvedValue({}),
};

const createTask = buildCreateTaskUseCase({ taskDb: mockTaskDb });
const getTask = buildGetTaskUseCase({ taskDb: mockTaskDb });
const updateTask = buildUpdateTaskUseCase({ taskDb: mockTaskDb });
const deleteTask = buildDeleteTaskUseCase({ taskDb: mockTaskDb });

describe("task use cases", () => {
  it("should create a task", async () => {
    const taskDto: TaskDto = {
      title: "test task",
      description: "task description",
      projectId: "project1",
      status: 0,
      priority: 1,
    };

    const task = await createTask(taskDto);

    expect(task).toBeDefined();
    expect(task.title).toBe("test task");
    expect(task.id).toBeDefined();
    expect(task.projectId).toBe("project1");
    expect(task.status).toBe(0);
    expect(task.priority).toBe(1);
  });

  it("should get a task", async () => {
    const taskId = "1";

    const task = await getTask({ taskId: taskId });

    expect(task).toBeDefined();
    expect(task.id).toBe(taskId);
    expect(task.title).toBe("test task");
    expect(task.projectId).toBe("project1");
    expect(task.status).toBe(0);
    expect(task.priority).toBe(1);
  });

  it("should update a task", async () => {
    const taskDto: TaskDto = {
      title: "updated task",
      description: "updated description",
      projectId: "project1",
      status: 1,
      priority: 2,
    };
    const taskId = "1";

    const updatedTask = await updateTask({ taskId: taskId, ...taskDto });

    expect(updatedTask).toBeDefined();
    expect(updatedTask.id).toBe(taskId);
    expect(updatedTask.title).toBe("updated task");
    expect(updatedTask.description).toBe("updated description");
    expect(updatedTask.projectId).toBe("project1");
    expect(updatedTask.status).toBe(1);
    expect(updatedTask.priority).toBe(2);
  });

  it("should delete a task", async () => {
    const taskId = "1";

    await expect(deleteTask({ taskId: taskId })).resolves.not.toThrow();

    // Check if the delete function was called
    expect(mockTaskDb.deleteById).toHaveBeenCalledWith({ id: taskId });
  });
});
