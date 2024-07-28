import React, { useEffect, useState } from "react";
import {
  FormProps,
  Modal,
  Input,
  Form,
  Select,
  Tag,
  Descriptions,
  Popconfirm,
} from "antd";
import { ModalProps } from "@/types";
import UseTaskOperations from "./use-task-operation";
import { OperationTaskProps, TaskProps } from "@/types/tasks";
import { TaskStatus, PriorityType, CrudOperation } from "@/utils/Enums";
import Button from "../ui/button";
import { CiTrash } from "react-icons/ci";
const { TextArea } = Input;

export interface TasksOperationModalProps extends ModalProps {
  updateTasks: ({
    task,
    operation,
  }: {
    task: TaskProps;
    operation: CrudOperation;
  }) => void;
  defaultStatus: number;
  currentTask?: null | TaskProps;
  isEdit?: boolean;
}

const mapEnumToOptions = (enumObj: any) =>
  Object.entries(enumObj)
    .filter(([key, value]) => isNaN(Number(key)))
    .map(([key, value]) => ({
      value: value,
      label: key,
    }));
const priorityOptions = mapEnumToOptions(PriorityType);
const statusOptions = mapEnumToOptions(TaskStatus);

const TaskOperationModal: React.FC<TasksOperationModalProps> = ({
  open,
  showModal,
  closeModal,
  updateTasks,
  defaultStatus,
  currentTask,
  isEdit,
  // clearTask,
}) => {
  const [form] = Form.useForm();
  const { handleCreateTask, handleUpdateTask, handleDeleteTask, loading } =
    UseTaskOperations({
      taskId: currentTask?._id,
    });

  const resetFields = () => {
    form.resetFields();
  };
  const handleSubmit = async (values: OperationTaskProps) => {
    let response;
    if (isEdit) {
      response = await handleUpdateTask(values);
    } else {
      response = await handleCreateTask(values);
    }

    if (!response) return;
    resetFields();
    updateTasks({
      task: response.task,
      operation: isEdit ? CrudOperation.UPDATE : CrudOperation.CREATE,
    });
    closeModal();
  };
  const handleDelete = async () => {
    if (!currentTask) return;
    const taskId = currentTask?._id;
    const response = await handleDeleteTask(taskId);
    if (!response) return;

    updateTasks({
      task: currentTask,
      operation: CrudOperation.DELETE,
    });
    closeModal();
  };

  useEffect(() => {
    setTimeout(() => {
      resetFields();
    }, 200);
  }, [open]);

  const title = isEdit ? "Edit task" : "Create new task";
  return (
    <Modal
      title={title}
      open={open}
      onCancel={closeModal}
      onOk={() => form.submit()}
      okButtonProps={{ loading }}
      cancelButtonProps={{ disabled: loading }}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className="flex flex-col gap-4 pb-14 pt-4"
        initialValues={{
          priority: currentTask?.priority || PriorityType.LOW,
          status: currentTask?.status || defaultStatus,
          title: currentTask?.title,
          description: currentTask?.description,
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input placeholder="Write a title" disabled={loading} />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <TextArea
            showCount
            maxLength={100}
            placeholder="Write a description"
            disabled={loading}
          />
        </Form.Item>
        <div className="flex items-center gap-10">
          <Form.Item
            name="priority"
            label="Priority"
            rules={[{ required: true, message: "Please enter a priority" }]}
          >
            <Select
              defaultValue={PriorityType.LOW}
              style={{ width: 120 }}
              options={priorityOptions}
              disabled={loading}
            />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please enter a status" }]}
          >
            <Select
              defaultValue={defaultStatus}
              style={{ width: 120 }}
              options={statusOptions}
              disabled={loading}
            />
          </Form.Item>
          {isEdit ? (
            <Popconfirm
              title="Delete the project"
              description="Are you sure to delete this project?"
              onConfirm={handleDelete}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button type="text" className="mt-2 px-0" icon={<CiTrash />}>
                Delete task
              </Button>
            </Popconfirm>
          ) : null}
        </div>
      </Form>
    </Modal>
  );
};

export default TaskOperationModal;
