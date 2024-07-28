import Breadcrumb from "@/components/breadcrumb";
import Container from "@/components/containers/container";

import TasksList from "@/components/tasks/tasks-list";

type Props = {
  searchParams: {
    project?: string;
  };
};

const Dashboard: React.FC<Props> = async ({ searchParams }) => {
  const projectId = searchParams?.project;
  return (
    <Container clean>
      <div className="px-4 pt-6">
        <Breadcrumb
          homeElement="Home"
          separator={<span>/</span>}
          containerClasses="ant-breadcrumb"
          listClasses="ant-breadcrumb-link"
          activeClasses="ant-breadcrumb-active"
          capitalizeLinks
        />
      </div>
      <TasksList projectId={projectId} />
    </Container>
  );
};

export default Dashboard;
