import { signal, computed } from "@preact/signals";
import config from "../../../../config";

const timeUrl = `${config.baseUrl}/time/`;

const createTimestamp = (time, status) =>{ 
    return {
        time: time,
        status: status
    }
}

// TODO: Finish implementing once server model / routes created
const createTimer = async () => {
    let timerId;
    const timer = await fetch(timeUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((response) => (timerId = response._id))
        .catch((err) => console.error(err));

    return timerId;
}

const createTimerState = () => {
    const timerId = signal();
    const timerList = signal([]);
    const time = signal(0);

    // TODO: Fix timerId assignment
    const getTimerId = async () =>
        createTimer()
            .then((id) => (timerId.value = id))
            .catch((err) => console.error(err))();

    const renderTimer = (overrideTime) => {
        const currentTime = overrideTime || time.value;

        let seconds = currentTime % 60;
        let minutes = Math.floor(currentTime / 60);
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        return `${minutes}:${seconds}`;
    };

    const addTime = (time, status) => timerList.value.push(createTimestamp(time, status));

    return { timerId, timerList, time, addTime, renderTimer };
}

export default createTimerState;