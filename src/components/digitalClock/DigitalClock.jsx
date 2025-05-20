import React, { useEffect, useState } from "react";
import styles from './DigitalClock.module.css';

const DigitalClock = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.digitalClock}>
            <div className={styles.digitalText}>
                <div className={styles.time}>{now.toLocaleTimeString()}</div>
                <div className={styles.date}>{now.toLocaleDateString()}</div>
            </div>
        </div>
    );
}

export default DigitalClock;
