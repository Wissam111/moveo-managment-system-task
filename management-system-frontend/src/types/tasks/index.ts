import moment from "moment";
import { PriorityType, TaskStatus } from "@/utils/Enums";
export type TaskProps = {
  _id: string;
  title?: string;
  description?: string;
  createdAt?: moment.Moment;
  priority?: PriorityType;
  status: TaskStatus;
};

export type OperationTaskProps = {
  title: string;
  description: string;
  status: number;
  priority: number;
  projectId: string;
  taskId?: string;
};
export type GetTasksResponseData = {
  tasks: TaskProps[] | undefined;
  count: number | undefined;
};
