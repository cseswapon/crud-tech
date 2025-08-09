import React from "react";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    message.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <Button danger onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
