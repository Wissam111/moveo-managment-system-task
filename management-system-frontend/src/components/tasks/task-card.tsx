import { TaskProps } from "@/types/tasks";
import React from "react";
import { FiClock } from "react-icons/fi";
import moment from "moment";
import cn from "classnames";
import { PriorityType } from "@/utils/Enums";
type Props = {
  task: TaskProps;
  statusColor?: string;
  onClick: () => void;
};

function getPriorityTypeKeyByValue(
  value: number
): keyof typeof PriorityType | undefined {
  return Object.keys(PriorityType).find(
    (key) => PriorityType[key as keyof typeof PriorityType] === value
  ) as keyof typeof PriorityType | undefined;
}

const TaskCard: React.FC<Props> = ({ task, statusColor, onClick }) => {
  return (
    <div
      style={{ minWidth: "200px" }}
      className={cn(
        "flex gap-4 w-full cursor-pointer flex-col rounded border-none bg-elevation-surface-raised p-3 text-left shadow-xs bg-white duration-200 ease-in-out hover:bg-[rgba(0,0,0,0.1)] active:bg-elevation-surface-raised-pressed px-5"
      )}
      onClick={onClick}
    >
      <div>
        <div className="bg-gray-150 w-fit px-4 p-2 rounded-full">
          <h4 style={{ color: statusColor }}>{task?.title}</h4>
        </div>
        <p className="text-xs text-gray-400 pt-2 truncate w-[200px]">
          {task?.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center text-xs text-gray-400">
          <FiClock />
          {moment(task?.createdAt).calendar()}
        </div>
        <span className="text-xs bg-gray-300 p-1 rounded-md">
          {task?.priority !== undefined
            ? getPriorityTypeKeyByValue(task?.priority)
            : ""}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
