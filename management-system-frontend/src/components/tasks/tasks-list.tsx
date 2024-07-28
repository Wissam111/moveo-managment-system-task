"use client";
import React, { useState } from "react";
import { CrudOperation, TaskStatus } from "@/utils/Enums";
import TaskColumn from "./task-column";
import { TaskProps } from "@/types/tasks";
import TasksFilter from "./tasks-filter";
import usePagination from "@/hooks/usePagination";
import TasksActions from "@/actions/tasks";
import { Pagination } from "antd";

const PAGE_SIZE = 10;
type TasksProps = {
  tasks?: TaskProps[];
  count?: number;
  projectId?: string;
};

const groupTasksByStatus = (tasks?: TaskProps[]) => {
  const grouped: Record<TaskStatus, TaskProps[]> = {
    [TaskStatus.TODO]: [],
    [TaskStatus.IN_PROGRESS]: [],
    [TaskStatus.DONE]: [],
  };

  tasks?.forEach((task) => {
    grouped[task.status]?.push(task);
  });

  return grouped;
};
const statusColors: Record<TaskStatus, string> = {
  [TaskStatus.TODO]: "#ADD8E6",
  [TaskStatus.IN_PROGRESS]: "#ffA500",
  [TaskStatus.DONE]: "#90EE90",
};

const TasksList: React.FC<TasksProps> = ({ projectId }) => {
  const tasksActions = TasksActions();
  const { data, page, setData, handleFilter, count, setCount, onPageChange } =
    usePagination({
      paginationHandler: tasksActions.getTasks,
      key: "items",
      filters: { projectId },
      pageSize: PAGE_SIZE,
    });

  const groupedTasks = groupTasksByStatus(data);
  const updateTasks = ({
    task,
    operation,
  }: {
    task: TaskProps;
    operation: CrudOperation;
  }) => {
    switch (operation) {
      case CrudOperation.UPDATE:
        updateTask(task);
        break;

      case CrudOperation.CREATE:
        createTask(task);
        break;

      case CrudOperation.DELETE:
        deleteTask(task);
        break;

      default:
        console.error("Unsupported operation");
    }
  };

  const updateTask = (task: TaskProps) => {
    //@ts-ignore
    setData((prevData) =>
      //@ts-ignore
      prevData.map((t) => (t._id === task._id ? task : t))
    );
  };

  const createTask = (task: TaskProps) => {
    //@ts-ignore
    setData((prevData) => [task, ...prevData]);
    setCount((prev) => prev + 1);
  };

  const deleteTask = (task: TaskProps) => {
    //@ts-ignore
    setData((prevData) => prevData.filter((t) => t._id !== task._id));
    setCount((prev) => prev - 1);
  };
  const handleChangeFilters = ({
    sortBy,
    search,
  }: {
    sortBy: string;
    search: string;
  }) => {
    handleFilter({ sortBy, search });
  };
  return (
    <div className="py-6">
      {/* @ts-ignore */}
      <TasksFilter handleChangeFilters={handleChangeFilters} />
      <div className="flex justify-evenly gap-4">
        {Object.keys(TaskStatus)
          .filter((key) => isNaN(Number(key)))
          .map((statusKey) => {
            const statusValue =
              TaskStatus[statusKey as keyof typeof TaskStatus];
            const tasksForStatus = groupedTasks[statusValue];
            return (
              <div key={statusKey} style={{ width: "30%" }}>
                <TaskColumn
                  title={statusKey}
                  tasks={tasksForStatus}
                  statusColor={statusColors[statusValue]}
                  statusValue={statusValue}
                  updateTasks={updateTasks}
                />
              </div>
            );
          })}
      </div>
      <Pagination
        className="py-6"
        align="center"
        defaultCurrent={1}
        total={count}
        onChange={onPageChange}
        current={page}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
};

export default TasksList;
