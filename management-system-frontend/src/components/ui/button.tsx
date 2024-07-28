import React from "react";
import { Button as AntButton, Tooltip } from "antd";

type ButtonProps = {
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  size?: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  toolTip?: string | null;
  icon?: React.ReactNode;
  type?: "text" | "primary" | "link" | "default" | "dashed" | undefined;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  children,
  disabled = false,
  loading = false,
  toolTip = null,
  type = "default",
  icon,
  className,
  ...props
}) => {
  return (
    <div className="flex-1">
      <Tooltip title={toolTip}>
        <AntButton
          color={color}
          onClick={onClick}
          disabled={disabled || loading}
          className={className}
          icon={icon}
          //@ts-ignore
          type={type}
          {...props}
        >
          {!loading ? children : null}
        </AntButton>
      </Tooltip>
    </div>
  );
};

export default Button;
