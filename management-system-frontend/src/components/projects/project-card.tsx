import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";
import cx from "classnames";
import { Project } from "@/types/projects";
import { ROUTES } from "@/utils/routes";
import { Popconfirm } from "antd";
import Button from "../ui/button";
import { CiTrash } from "react-icons/ci";
type Props = {
  project: Project;
  handleDelete?: () => void;
};

const ProjectCard = ({ project, handleDelete }: Props): JSX.Element => {
  return (
    <div className="w-[400px]">
      <Link
        href={{
          pathname: `${ROUTES.PROJECTS}/${ROUTES.DASHBOARD}`,
          query: {
            project: project?._id,
          },
        }}
        className={cx(
          "group flex h-[112px] rounded  text-font shadow-sm outline outline-2 outline-transparent duration-100 ease-linear overflow-hidden",
          "hover:-translate-y-0.5 hover:bg-[rgba(0,0,0,0.1)]  hover:shadow-md "
        )}
      >
        <img
          src={project.image || "/assets/images/default-project.png"}
          alt="Project"
          width="90px"
          height="104px"
          className="h-auto w-[90px] rounded-l object-cover"
        />
        <div className="flex flex-col gap-1 px-3 pb-4 pt-2">
          <h2 className="text-lg">{project.name}</h2>
          <p className="font-primary-light text-sm text-font-subtle text-opacity-100  truncate w-[250px] ">
            {project.description}
          </p>
        </div>
      </Link>
      <Popconfirm
        title="Delete the project"
        description="Are you sure to delete this project?"
        onConfirm={handleDelete}
        // onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button type="text" className="mt-2 px-0" icon={<CiTrash />}>
          Delete project
        </Button>
      </Popconfirm>
    </div>
  );
};
export default ProjectCard;
