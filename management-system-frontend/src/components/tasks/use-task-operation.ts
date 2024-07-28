import TasksActions from "@/actions/tasks";
import useFetch from "@/hooks/useFetch";
import { OperationTaskProps } from "@/types/tasks";
import { useSearchParams } from "next/navigation";
const UseTaskOperations = ({ taskId }: { taskId?: string }) => {
  const tasksActions = TasksActions();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project");
  const { loading, fetchData } = useFetch();
  const handleCreateTask = async (values: OperationTaskProps) => {
    const data = { ...values, projectId };
    const response = await fetchData(async () => tasksActions.createTask(data));
    return response;
  };
  const handleUpdateTask = async (values: OperationTaskProps) => {
    const data = { ...values, projectId, taskId };
    const response = await fetchData(async () => tasksActions.updateTask(data));
    return response;
  };
  const handleDeleteTask = async (taskId: string) => {
    const response = await fetchData(async () =>
      tasksActions.deleteTask(taskId)
    );
    return response;
  };
  return { handleCreateTask, loading, handleUpdateTask, handleDeleteTask };
};

export default UseTaskOperations;
