import { signal, computed } from "@preact/signals";

const createTimestamp = (time, status) =>{ 
    return {
        time: time,
        status: status
    }
}

const createTimerState = () => {
    const timerList = signal([]);
    const time = signal(0);

    const renderTimer = (overrideTime) => {
        const currentTime = overrideTime || time.value;

        let seconds = currentTime % 60;
        let minutes = Math.floor(currentTime / 60);
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        return `${minutes}:${seconds}`;
    };

    const addTime = (time, status) => timerList.value.push(createTimestamp(time, status));

    return {timerList, time, addTime, renderTimer };
}

export default createTimerState;