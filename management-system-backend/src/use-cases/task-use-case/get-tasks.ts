import { FindOptionsDto } from "entities/dtos";

export const buildGetTasksUseCase = ({ taskDb }) => {
  return async ({
    search,
    page,
    pageSize,
    sort,
    sortBy,
    projectId,
  }: FindOptionsDto) => {
    const filters: FindOptionsDto = {};
    if (projectId) {
      filters.projectId = projectId;
    }
    const { items, count } = await taskDb.find({
      search,
      page,
      pageSize,
      sort,
      sortBy,
      filters,
    });
    return { items, count };
  };
};
