import React, { useState } from "react";
import { FormProps, Modal, Input, Form } from "antd";
import { ModalProps, SigninProps } from "@/types";
import { CreateProjectProps, Project } from "@/types/projects";
import Logo from "../ui/logo";
import useSignin from "./use-signin";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/routes";

export interface AuthModalProps extends ModalProps {}

const SigninModal: React.FC<AuthModalProps> = ({
  open,
  showModal,
  closeModal,
}) => {
  const { handleSignin, loading } = useSignin();
  const router = useRouter();

  const [form] = Form.useForm();

  const resetFields = () => {
    form.resetFields();
  };
  const navigateProjects = () => {
    router.push(ROUTES.PROJECTS);
  };
  const handleSubmit = async (values: SigninProps) => {
    const response = await handleSignin(values);

    if (!response) return;

    closeModal();
    resetFields();
    setTimeout(() => {
      navigateProjects();
    }, 300);
  };

  return (
    <Modal
      title="Sigin With Email&Password"
      className="text-center text-4xl"
      open={open}
      onCancel={closeModal}
      onOk={() => form.submit()}
      okText="Submit"
      okButtonProps={{ loading }}
      cancelButtonProps={{ disabled: loading }}
    >
      <div className="flex justify-center">
        <Logo />
      </div>

      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className="flex flex-col gap-4 pb-14 pt-4"
        // onFinish={onFinish}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter an email" }]}
        >
          <Input placeholder="Write a email" type="email" disabled={loading} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter a password" }]}
        >
          <Input.Password placeholder="input password" disabled={loading} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SigninModal;
