import type { FC, HTMLAttributes } from "react";
import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    type="button"
    className={`${styles.button} ${className ?? ""}`}
    {...props}
  >
    {children}
  </button>
);
