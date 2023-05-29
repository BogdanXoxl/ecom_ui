import type { FC, HTMLAttributes } from "react";
import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  big?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  big,
  className,
  ...props
}) => (
  <button
    type="button"
    className={`${styles.button} ${className ?? styles.big} ${big && "big"}`}
    {...props}
  >
    {children}
  </button>
);
