export const getPosition = (i, totalCount) => {
    const angle = i * 360 / totalCount;
    const isHourMark = i % 5 === 0;
    const tickHeight = isHourMark ? 15 : 7;

    const radiusPercent = 45;
    const offset = 50;

    const top = offset + radiusPercent * Math.sin((angle - 90) * Math.PI / 180);
    const left = offset + radiusPercent * Math.cos((angle - 90) * Math.PI / 180);

    return {
        top,
        left,
        angle,
        tickHeight,
        isHourMark,
    };
}

export const getNumberPosition = (i, totalCount) => {
    const angle = i * 360 / totalCount;

    const radiusPercent = 37;
    const offset = 50;

    const top = offset + radiusPercent * Math.sin((angle - 90) * Math.PI / 180);
    const left = offset + radiusPercent * Math.cos((angle - 90) * Math.PI / 180);

    return {
        top,
        left,
        number: i,
    }
}

export const getArrowsAngles = (date) => {
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondsAngle = seconds * 6;
    const minutesAngle = minutes * 6 + seconds * 0.1;
    const hoursAngle = (hours % 12) * 30 + minutes * 0.5;

    return { secondsAngle, minutesAngle, hoursAngle };
}
