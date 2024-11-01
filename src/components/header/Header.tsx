"use client";
import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <div className={styles.headerContainer}>
            <h1>Pokemon For You!</h1>
        </div>
    );
};

export default Header;
