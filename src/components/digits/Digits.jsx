import React from "react";
import styles from './Digits.module.css';
import { getNumberPosition } from "../../utils/clockUtils";

const Digits = () => {
    const digitsCount = 12;
    const digits = [...Array(digitsCount)];

    return (
        <div className={styles.digits}>
            {digits.map((digit, i) => {
                const {top, left, number} = getNumberPosition(i + 1, digitsCount);

                return (
                    <div
                        key={i}
                        className={styles.digit}
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                        }}
                    >
                        {number}
                    </div>
                );
            })}
        </div>
    );
}

export default Digits;
