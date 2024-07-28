import React, { useState } from "react";
import { FormProps, Modal, Input, Form } from "antd";
import { ModalProps } from "@/types";
import UseProjectOperations from "./use-project-operations";
import { CreateProjectProps, Project } from "@/types/projects";

const { TextArea } = Input;

export interface ProjectOperationModalProps extends ModalProps {
  updateProjects: (project: Project) => void;
}

const ProjectOperationModal: React.FC<ProjectOperationModalProps> = ({
  open,
  showModal,
  closeModal,
  updateProjects,
}) => {
  const [form] = Form.useForm();
  const { handleCreateProject, loading } = UseProjectOperations();

  const resetFields = () => {
    form.resetFields();
  };
  const handleSubmit = async (values: CreateProjectProps) => {
    const response = await handleCreateProject(values);
    if (!response) return;
    closeModal();
    resetFields();
    updateProjects(response.project);
  };

  return (
    <Modal
      title="Create new project"
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
        // onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input placeholder="Write a name" disabled={loading} />
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
      </Form>
    </Modal>
  );
};

export default ProjectOperationModal;
