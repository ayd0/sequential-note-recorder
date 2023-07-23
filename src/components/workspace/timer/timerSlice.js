import { signal } from "@preact/signals";
import config from "../../../../config";
import TimeEntry from "./TimeEntry";

const timeUrl = `${config.baseUrl}/time/`;

const createTimerState = () => {
    const time = signal(0);
    const timeEntryList = signal([]);

    const getTimerParams = (overrideParams) => {
        // Dev: Defaults respectively as: 1500, 900, 120, 60
        // From Timer state, overrideParams should be passed through createTimeEntry's call via a signal
        // so user can customize values for all session requests.
        return {
            studyLength: overrideParams.studyLength || 1500,
            breakLength: overrideParams.breakLength || 900,
            minMaxVal: overrideParams.minMaxVal || 120,
            bufferVal: overrideParams.bufferVal || 60,
        };
    };

    const renderTimer = (overrideTime) => {
        let currentTime = overrideTime || time.value;
        if (overrideTime === 0) currentTime = 0;

        let seconds = currentTime % 60;
        let minutes = Math.floor(currentTime / 60);
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        return `${minutes}:${seconds}`;
    };

    const createTimeEntry = (regular, overrideParams) => {
        const timerParams = getTimerParams(overrideParams || false);

        const status = !regular
            ? "Paused"
            : timeEntryList.value.length % 2 === 1
            ? "Break"
            : "Study";
        
        const targetTime = 
            status === "Study"
            ? timerParams.studyLength
            : timerParams.breakLength;

        timeEntryList.value.push({
            time: time.value,
            status: status,
            targetTime: targetTime,
            minMaxVal: timerParams.minMaxVal,
            bufferVal: timerParams.bufferVal,
            component: <TimeEntry />
        });

        console.log(timeEntryList.value)
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
