import React from "react";
import { Button as AntButton } from "antd";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  danger?: boolean;
  htmlType?: "button" | "submit";
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  type = "primary",
  danger = false,
  htmlType = "button",
  className,
}) => {
  return (
    <AntButton
      type={type}
      danger={danger}
      onClick={onClick}
      htmlType={htmlType}
      className={className}
    >
      {children}
    </AntButton>
  );
};

export default Button;
