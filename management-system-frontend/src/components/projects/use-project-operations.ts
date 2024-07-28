import ProjectsActions from "@/actions/projects";
import { CreateProjectProps } from "@/types/projects";
import useFetch from "@/hooks/useFetch";
const UseProjectOperations = () => {
  const { fetchData, loading } = useFetch();
  const projectActions = ProjectsActions();
  const handleCreateProject = async (values: CreateProjectProps) => {
    const response = await fetchData(async () =>
      projectActions.createProject(values)
    );

    return response;
  };
  return { handleCreateProject, loading };
};

export default UseProjectOperations;
