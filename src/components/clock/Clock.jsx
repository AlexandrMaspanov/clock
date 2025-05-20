import React from "react";
import styles from './Clock.module.css';
import DigitalClock from "../digitalClock/DigitalClock";
import AnalogClock from "../analogClock/AnalogClock";

const Clock = () => {
    return (
        <div className={styles.circle}>
            <DigitalClock />
            <AnalogClock />
        </div>
    );
}

export default Clock;
