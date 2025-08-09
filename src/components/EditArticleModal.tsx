import React, { useEffect } from "react";
import { Modal, Form, Input, Select, message } from "antd";
import type { Article } from "../types/auth";

interface EditArticleModalProps {
  article: Article | null;
  visible: boolean;
  onClose: () => void;
  onSave: (updated: Article) => void;
}

const { TextArea } = Input;

const EditArticleModal: React.FC<EditArticleModalProps> = ({
  article,
  visible,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (article) {
      form.setFieldsValue(article);
    }
  }, [article, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const updated: Article = {
        ...article!,
        ...values,
      };
      onSave(updated);
      message.success("Article saved successfully!");
      onClose();
    } catch (err) {
      console.log("Validation Failed", err);
    }
  };

  return (
    <Modal
      title="Edit Article"
      open={visible}
      onCancel={onClose}
      onOk={handleOk}
      okText="Save"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Content is required" }]}
        >
          <TextArea rows={5} />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Status is required" }]}
        >
          <Select>
            <Select.Option value="Published">Published</Select.Option>
            <Select.Option value="Draft">Draft</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditArticleModal;
