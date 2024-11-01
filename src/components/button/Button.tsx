"use client";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    onClick: () => void;
    title: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
