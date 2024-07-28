export type Project = {
  _id: string;
  name?: string;
  image?: string;
  description?: string;
};

export type CreateProjectProps = {
  title: string;
  description: string;
};

export type ProjectResponse = {
  data?: Project[];
  count?: number;
};
