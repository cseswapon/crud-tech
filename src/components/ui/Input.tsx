import React from "react";
import { Input as AntInput } from "antd";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <>
      <AntInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default Input;
