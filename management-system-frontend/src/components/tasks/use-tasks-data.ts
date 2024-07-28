import { TaskProps } from "@/types/tasks";
import { useState } from "react";

const useTasksData = () => {
  const [currentTask, setCurrentTask] = useState<TaskProps | null>(null);
  const [open, setOpen] = useState(false);

  const handleChangeTask = (task: TaskProps | null) => {
    setCurrentTask(task);
    if (!task) return;
    setOpen(true);
  };
  return { open, setOpen, currentTask, handleChangeTask };
};

export default useTasksData;
