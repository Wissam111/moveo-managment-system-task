import { ProjectDto } from "entities/dtos";
import { buildCreateProjectUseCase } from "../create-project";
import { buildGetProjectUseCase } from "../get-project";
import { buildDeleteProjectUseCase } from "../delete-project";
import { buildUpdateProjectUseCase } from "../update-project";

const mockProjectDb = {
  findByTitle: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockResolvedValue({
    id: "1",
    name: "test project",
    description: "project testing",
  }),
  findById: jest.fn().mockResolvedValue({
    id: "1",
    name: "test project",
    description: "project testing",
  }),
  update: jest.fn().mockResolvedValue({
    id: "1",
    name: "updated project",
    description: "updated description",
  }),
  deleteById: jest.fn().mockResolvedValue({}),
};

const createProject = buildCreateProjectUseCase({ projectDb: mockProjectDb });
const getProject = buildGetProjectUseCase({ projectDb: mockProjectDb });
const updateProject = buildUpdateProjectUseCase({ projectDb: mockProjectDb });
const deleteProject = buildDeleteProjectUseCase({ projectDb: mockProjectDb });
describe("project use cases", () => {
  it("should create a project", async () => {
    const projectDto: ProjectDto = {
      name: "test project",
      description: "project testing",
    };

    const project = await createProject(projectDto);

    expect(project).toBeDefined();
    expect(project.name).toBe("test project");
    expect(project.id).toBeDefined();
  });
  it("should get a project", async () => {
    const projectId = "1";

    const project = await getProject({ projectId: projectId });

    expect(project).toBeDefined();
    expect(project.id).toBe(projectId);
    expect(project.name).toBe("test project");
  });

  it("should update a project", async () => {
    const projectDto: ProjectDto = {
      name: "updated project",
      description: "updated description",
    };
    const projectId = "1";

    const updatedProject = await updateProject({
      projectId: projectId,
      ...projectDto,
    });

    expect(updatedProject).toBeDefined();
    expect(updatedProject.id).toBe(projectId);
    expect(updatedProject.name).toBe("updated project");
    expect(updatedProject.description).toBe("updated description");
  });

  it("should delete a project", async () => {
    const projectId = "1";

    await expect(
      deleteProject({ projectId: projectId })
    ).resolves.not.toThrow();

    expect(mockProjectDb.deleteById).toHaveBeenCalledWith({ id: projectId });
  });
});
