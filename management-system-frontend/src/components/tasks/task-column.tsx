// import { TaskProps } from "@/types/tasks";
// import React from "react";
// import TaskCard from "./task-card";
// import { FaPlus } from "react-icons/fa6";
// import Button from "../ui/button";
// import TaskOperationModal from "./task-operation-modal";
// import useTasksData from "./use-tasks-data";
// import EmptyCategory from "./empty-category";
// type Props = {
//   title: string;
//   tasks?: TaskProps[];
//   statusColor?: string;
// };

// const TaskColumn: React.FC<Props> = ({ title, tasks, statusColor }) => {
//   const { open, setOpen } = useTasksData();

//   const emptyCategory = tasks?.length === 0;
//   return (
//     <>
//       <div className="relative flex h-full w-[260px] max-w-[260px] flex-col rounded-md bg-[##f7f8f9]">
//         <div className="sticky left-0 top-0 flex justify-between px-3 py-2.5 font-light text-sm uppercase text-[#626f86] duration-200 ease-in-out">
//           <span className="flex gap-2">
//             <span>{title}</span>
//             {!emptyCategory && <span>( {tasks?.length} )</span>}
//           </span>

//           <div>
//             <Button
//               icon={<FaPlus color="gray" />}
//               onClick={() => setOpen(true)}
//             />
//           </div>
//         </div>

//         <div className="h-full">
//           <div>
//             <ul className="mt-1 max-w-[260px] px-3 pb-1">
//               {emptyCategory ? (
//                 <EmptyCategory />
//               ) : (
//                 tasks?.map((task, index) => (
//                   <li key={index} className="mb-2">
//                     <TaskCard task={task} statusColor={statusColor} />
//                   </li>
//                 ))
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <TaskOperationModal
//         open={open}
//         showModal={() => setOpen(true)}
//         closeModal={() => setOpen(false)}
//       />
//     </>
//   );
// };

// export default TaskColumn;
import { TaskProps } from "@/types/tasks";
import React, { useEffect, useRef, useState } from "react";
import TaskCard from "./task-card";
import { FaPlus } from "react-icons/fa6";
import Button from "../ui/button";
import TaskOperationModal from "./task-operation-modal";
import useTasksData from "./use-tasks-data";
import EmptyCategory from "./empty-category";
import { ScrollArea } from "../scroll-area";
import { CrudOperation } from "@/utils/Enums";

type Props = {
  title: string;
  tasks?: TaskProps[];
  statusColor?: string;
  statusValue: number;
  updateTasks: ({
    task,
    operation,
  }: {
    task: TaskProps;
    operation: CrudOperation;
  }) => void;
};

const TaskColumn: React.FC<Props> = ({
  title,
  tasks,
  statusColor,
  statusValue,
  updateTasks,
}) => {
  const { open, setOpen, handleChangeTask, currentTask } = useTasksData();
  const [columnHeight, setColumnHeight] = useState<number>(0);
  const columnRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const emptyCategory = tasks?.length === 0;
  useEffect(() => {
    if (columnRef.current) {
      setColumnHeight(columnRef.current.offsetHeight);
    }
  }, []);
  return (
    <>
      <div className="relative flex   w-[260px] max-w-[260px] flex-col rounded-md bg-[#f7f8f9] h-[650px] pb-12">
        <div className="sticky top-0 flex justify-between px-3 py-2.5 font-light text-sm uppercase text-[#626f86] duration-200 ease-in-out bg-[#f7f8f9] z-10">
          <span className="flex gap-2">
            <span>{title}</span>
            {!emptyCategory && <span>( {tasks?.length} )</span>}
          </span>
          <div>
            <Button
              icon={<FaPlus color="gray" />}
              onClick={() => {
                setOpen(true);
                handleChangeTask(null);
              }}
            />
          </div>
        </div>

        <div className="h-full px-1 pb-10">
          <div className="h-full">
            <ScrollArea>
              <ul className="space-y-2">
                {emptyCategory ? (
                  <EmptyCategory />
                ) : (
                  tasks?.map((task, index) => (
                    <li key={index}>
                      <TaskCard
                        key={task?._id}
                        task={task}
                        statusColor={statusColor}
                        onClick={() => handleChangeTask(task)}
                      />
                    </li>
                  ))
                )}
              </ul>
            </ScrollArea>
          </div>
        </div>
      </div>
      <TaskOperationModal
        isEdit={currentTask !== null}
        currentTask={currentTask}
        open={open}
        showModal={() => setOpen(true)}
        closeModal={() => setOpen(false)}
        updateTasks={updateTasks}
        defaultStatus={statusValue}
        // clearTask={() => handleChangeTask(null)}
      />
    </>
  );
};

export default TaskColumn;
