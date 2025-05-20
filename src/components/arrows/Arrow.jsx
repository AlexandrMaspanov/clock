import React from "react";
import styles from './Arrows.module.css';

const Arrow = ({ thickness, length, color, angle }) => {
    return (
        <div
            className={styles.arrow}
            style={{
                width: `${thickness}px`,
                height: `${length}%`,
                backgroundColor: color,
                transform: `rotate(${angle}deg)`,
            }}
        />
    );
}

export default Arrow;
