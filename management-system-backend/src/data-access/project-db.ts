import { ProjectDto, FindOptionsDto } from "../entities/dtos";
import Project, { IProject } from "./schema/project";
import { Db } from "../entities/dtos";

// CRUD operations for a project
export const makeProjectDb = ({
  makeDb,
}: {
  makeDb: () => Promise<void>;
}): Db<IProject> => {
  const create = async ({
    id: _id,
    ...data
  }: ProjectDto): Promise<IProject> => {
    await makeDb();
    const task = new Project({ _id, ...data });
    return await task.save();
  };

  const update = async ({
    id: _id,
    ...data
  }: ProjectDto): Promise<IProject> => {
    await makeDb();
    const updatedProject = await Project.findOneAndUpdate(
      { _id },
      {
        ...data,
      },
      { new: true }
    );
    return updatedProject;
  };

  const findById = async ({ id }: { id: string }): Promise<IProject | null> => {
    await makeDb();
    return await Project.findOne({ _id: id });
  };
  const deleteById = async ({
    id,
  }: {
    id: string;
  }): Promise<IProject | null> => {
    await makeDb();
    return await Project.findOneAndDelete({ _id: id });
  };
  const findByTitle = async ({
    title,
  }: {
    title: string;
  }): Promise<IProject> => {
    await makeDb();
    return await Project.findOne({ title: title });
  };
  const find = async ({
    search = "",
    page,
    pageSize = 10,
    sort = "desc",
  }: FindOptionsDto): Promise<{ items: IProject[]; count: number }> => {
    await makeDb();

    const _filters = {
      $expr: {
        $regexMatch: {
          input: "$name",
          regex: search,
          options: "i",
        },
      },
    };

    const query = Project.find(
      _filters,
      {},
      {
        sort: { createdAt: sort },
        limit: pageSize,
        skip: (page - 1) * pageSize,
      }
    );
    const count = await Project.countDocuments(_filters);

    const items = await query.lean();
    return {
      items,
      count: count,
    };
  };

  return Object.freeze({
    deleteById,
    create,
    findById,
    update,
    find,
    findByTitle,
  });
};
