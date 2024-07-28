import { FindOptionsDto } from "entities/dtos";

export const buildGetProjectsUseCase = ({ projectDb }) => {
  return async ({ search, page, pageSize, sort }: FindOptionsDto) => {
    const { items, count } = await projectDb.find({
      search,
      page,
      pageSize,
      sort,
    });
    return { items, count };
  };
};
