import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message, Select } from "antd";

const roles = ["admin", "editor"];

const users = [
  {
    email: "admin@admin.com",
    password: "123456",
    role: "admin",
  },
  {
    email: "editor@gmail.com",
    password: "123456",
    role: "editor",
  },
];

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = ({
    username,
    password,
    role,
  }: {
    username: string;
    password: string;
    role: string;
  }) => {
    setLoading(true);

    setTimeout(() => {
      const user = users.find((u) => u.email === username && u.role === role);

      if (!user) {
        alert("User not found");
      } else if (user.password !== password) {
        alert("Invalid password");
      } else {
        localStorage.setItem("token", "fake-jwt-token");
        localStorage.setItem("role", user.role);
        message.success("Login successful!");
        navigate("/dashboard");
      }

      setLoading(false);
    }, 800);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="backdrop-blur-sm bg-white/60 p-8 rounded shadow-md w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            username: "editor@gmail.com",
            password: "123456",
            role: "editor",
          }}
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="e.g. admin@admin.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Select your role" }]}
          >
            <Select placeholder="Select a role">
              {roles.map((role) => (
                <Select.Option key={role} value={role}>
                  {role}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Log in
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center text-sm border p-3 rounded-sm text-gray-600 mt-4">
          <p className="font-semibold">Admin Login:</p>
          <p>
            Email: <code>admin@admin.com</code>
          </p>
          <p>
            Password: <code>123456</code>
          </p>

          <p className="mt-2 font-semibold">Editor Login (default):</p>
          <p>
            Email: <code>editor@gmail.com</code>
          </p>
          <p>
            Password: <code>123456</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
