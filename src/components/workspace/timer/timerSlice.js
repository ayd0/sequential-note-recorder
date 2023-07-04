import { signal } from "@preact/signals";
import config from "../../../../config";
import TimeEntry from "./TimeEntry";

const timeUrl = `${config.baseUrl}/time/`;

const createTimerState = () => {
    const time = signal(0);
    const timeEntryList = signal([]);

    const getTimerParams = (overrideParams) => {
        return {
            studyLength: overrideParams.studyLength || 1500,
            breakLength: overrideParams.breakLength || 900,
            minMaxVal: overrideParams.minMaxVal || 120,
            bufferVal: overrideParams.bufferVal || 60,
        };
    };

    const renderTimer = (overrideTime) => {
        const currentTime = overrideTime || time.value;

        let seconds = currentTime % 60;
        let minutes = Math.floor(currentTime / 60);
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        return `${minutes}:${seconds}`;
    };

    const createTimeEntry = (regular) => {
        let status = !regular
            ? "Paused"
            : timeEntryList.value.length % 2 === 1
            ? "Break"
            : "Study";

        timeEntryList.value.push({
            time: time.value,
            status: status,
            component: <TimeEntry />
        });
    };

    return {
        time,
        timeEntryList,
        getTimerParams,
        renderTimer,
        createTimeEntry,
    };
};

export default createTimerState;
