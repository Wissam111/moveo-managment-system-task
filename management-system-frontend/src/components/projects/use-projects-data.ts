import { Project } from "@/types/projects";
import { useState } from "react";
import ProjectsActions from "@/actions/projects";
import { useDispatch } from "react-redux";
type UseProjectsDataReturn = {
  open: boolean;
  setOpen: (open: boolean) => void;
  updateProjects: (project: Project) => void;
  projects: Project[] | undefined;
  onSelectProject: (project: Project) => void;
  handleDeleteProject: (id: string) => void;
};

const UseProjectsData = ({
  data,
}: {
  data?: Project[];
}): UseProjectsDataReturn => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>(data || []);
  const projectsActions = ProjectsActions();
  const dispatch = useDispatch();

  const updateProjects = (project: Project) => {
    setProjects((prevProjects) => [project, ...prevProjects]);
  };

  const onSelectProject = (project: Project) => {
    dispatch(projectsActions.updateProject(project) as any);
  };

  const filterProjectById = (projectId: string) => {
    const _projects = [...projects].filter((p) => p._id !== projectId);
    setProjects(_projects);
  };
  const handleDeleteProject = async (projectId: string) => {
    const response = await projectsActions.deleteProject(projectId);
    if (!response) return;
    filterProjectById(projectId);
  };

  return {
    open,
    setOpen,
    updateProjects,
    projects,
    onSelectProject,
    handleDeleteProject,
  };
};

export default UseProjectsData;
