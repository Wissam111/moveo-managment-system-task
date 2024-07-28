import { Db, FindOptionsDto, TaskDto } from "entities/dtos";
import Task, { ITask } from "./schema/task";

// CRUD operation for a task
export const makeTaskDb = ({
  makeDb,
}: {
  makeDb: () => Promise<void>;
}): Db<ITask> => {
  const create = async ({ id: _id, ...data }: TaskDto): Promise<ITask> => {
    await makeDb();
    const task = new Task({ _id, ...data });
    return await task.save();
  };

  const update = async ({ id: _id, ...data }: TaskDto): Promise<ITask> => {
    await makeDb();
    const updatedTask = await Task.findOneAndUpdate(
      { _id },
      {
        ...data,
      },
      { new: true }
    );
    return updatedTask;
  };

  const findById = async ({ id }: { id: string }): Promise<ITask> => {
    await makeDb();
    return await Task.findOne({ _id: id });
  };

  const findByTitle = async ({ title }: { title: string }): Promise<ITask> => {
    await makeDb();
    return await Task.findOne({ title: title });
  };

  const deleteById = async ({ id }: { id: string }): Promise<ITask> => {
    await makeDb();
    return await Task.findOneAndDelete({ _id: id });
  };

  const find = async ({
    search = "",
    page,
    pageSize = 10,
    sort = "desc",
    sortBy = "createdAt",
    filters,
  }: FindOptionsDto): Promise<{ items: ITask[]; count: number }> => {
    await makeDb();
    const sortObject = { [sortBy]: sort === "desc" ? -1 : 1 };
    const _filters = {
      ...filters,
      $expr: {
        $regexMatch: {
          input: "$title",
          regex: search,
          options: "i",
        },
      },
    };

    const query = Task.find(
      _filters,
      {},
      {
        sort: sortObject,
        limit: pageSize,
        skip: (page - 1) * pageSize,
      }
    );
    const count = await Task.countDocuments(_filters);

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
