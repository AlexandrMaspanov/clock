import React from "react";
import Dials from "../dials/Dials";
import Digits from "../digits/Digits";
import Arrows from "../arrows/Arrows";
import CenterDot from "../centerDot/CenterDot";

const AnalogClock = () => {
    return (
        <div>
            <Dials />
            <Digits />
            <Arrows />
            <CenterDot />
        </div>
    );
}

export default AnalogClock;
