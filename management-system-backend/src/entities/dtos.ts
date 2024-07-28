import { IProject } from "data-access/schema/project";

export interface ProjectDto {
  id?: string;
  name: string;
  description?: string;
  createdAt?: Date;
}

export interface FindOptionsDto {
  search?: string;
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  projectId?: string;
  sortBy?: string;
  filters?: object;
}

export interface TaskDto {
  id?: string;
  title: string;
  description: string;
  projectId: string;
  status: number;
  priority: number;
  createdAt?: Date;
}

export interface UpdateTaskInput extends TaskDto {
  taskId: string;
}
export interface Db<T> {
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  findById({ id }: { id: string }): Promise<T | null>;
  deleteById({ id }: { id: string }): Promise<T | null>;
  find(params: FindOptionsDto): Promise<{ items: T[]; count: number }>;
}
