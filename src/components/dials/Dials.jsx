import React from "react";
import styles from './Dials.module.css';
import { getPosition } from "../../utils/clockUtils";

const Dials = () => {
    const ticksCount = 60;
    const ticks = [...Array(ticksCount)];

    return (
        <div className={styles.dials}>
            {ticks.map((tick, i) => {
                const {top, left, angle, tickHeight, isHourMark} = getPosition(i, ticksCount);

                return (
                    <div
                        key={i}
                        className={`${styles.tick} ${isHourMark ? styles.hour : styles.minute}`}
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            height: `${tickHeight}px`,
                            transform: `translate(-50%, 0) rotate(${angle}deg)`,
                        }}
                    />
                );
            })}
        </div>
    );
}

export default Dials;
