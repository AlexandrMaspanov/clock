import React, { useEffect, useState } from "react";
import styles from './Arrows.module.css';
import Arrow from "./Arrow";
import { getArrowsAngles } from "../../utils/clockUtils";

const Arrows = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { secondsAngle, minutesAngle, hoursAngle } = getArrowsAngles(now);

    return (
        <div className={styles.arrows}>
            <Arrow
                thickness={4}
                length={30}
                color="#091921"
                angle={hoursAngle}
            />
            <Arrow
                thickness={3}
                length={40}
                color="#091921"
                angle={minutesAngle}
            />
            <Arrow
                thickness={1}
                length={45}
                color="red"
                angle={secondsAngle}
            />
        </div>
    );
}

export default Arrows;
