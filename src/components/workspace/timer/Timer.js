import { Component } from "preact";
import { ReactSVG } from "react-svg";
import { useSignal } from "@preact/signals";
import TimeEntry from "./TimeEntry";

export default class Timer extends Component {
    // TODO: add modifiable timer status properties (sequence, min, max, buffer) and add buttons to interface
    //       add settings window that brings up modal for min/max/buffer values
    render(timer) {
        // timer state
        const {
            time,
            timeEntryList,
            getTimerParams,
            renderTimer,
            createTimeEntry,
        } = timer.state;

        // local state
        const isRunning = useSignal(false);
        const timeInterval = useSignal(null);
        const timerParams = useSignal(getTimerParams(false));
        const status = timeEntryList.value.length % 2 === 0 ? "Study" : "Break";
        const targetTime =
            status === "Study"
                ? timerParams.value.studyLength
                : timerParams.value.breakLength;

        const timeEntryOperations = {
            renderTimer: renderTimer,
        };

        const timeEntryIcons = {
            plus: <ReactSVG src="../assets/icons/plus.svg" />,
            minus: <ReactSVG src="../assets/icons/minus.svg" />,
            plusMinus: <ReactSVG src="../assets/icons/plus-minus.svg" />,
        };

        const toggleTimer = (value) => {
            value !== undefined
                ? (isRunning.value = value)
                : (isRunning.value = !isRunning.value);

            if (isRunning.value) {
                timeInterval.value = setInterval(() => ++time.value, 1000);
            } else {
                clearInterval(timeInterval.value);
            }
        };

        const reset = () => {
            if (time.value > 0) {
                // TODO: Create signal for overrideParams to pass as second argument
                createTimeEntry(true);
            }
            time.value = 0;
            if (!isRunning.value) toggleTimer();
        };

        return (
            <box-l id="timer-container">
                <center-l andText>
                    <h1>Pomodoro</h1>
                    <stack-l
                        style="padding-inline: var(--s0)"
                        class="scroll:auto"
                        space="var(--s-5)"
                    >
                        <div>
                            <h4 style="display: flex; align-items: center; margin-block: 0;">
                                {status}
                                <icon-l>
                                    <ReactSVG
                                        style="font-size: 2.4em; padding-inline-start: var(--s-3); padding-block-start: var(--s-3);"
                                        src="../assets/icons/timer.svg"
                                        onClick={() => toggleTimer()}
                                    />
                                </icon-l>
                                <icon-l>
                                    <ReactSVG
                                        style="font-size: 2.4em; auto; padding-inline-end: var(--s-1); padding-block-start: var(--s-3);"
                                        src="../assets/icons/skip.svg"
                                        onClick={() => reset()}
                                    />
                                </icon-l>
                            </h4>
                            <p style="display: flex; align-items: center; margin-block-start: 0;">
                                {renderTimer()} / {renderTimer(targetTime)}{" "}
                                <icon-l>
                                    <ReactSVG
                                        style="font-size: 1.6em; padding-inline: var(--s-1); padding-block-start: var(--s-3);"
                                        src="../assets/icons/plus-minus.svg"
                                    />
                                </icon-l>
                                2:00
                            </p>
                        </div>
                        {timeEntryList.value
                            .slice()
                            .reverse()
                            .map((timeEntry) => {
                                const updatedEntry = { ...timeEntry };
                                delete updatedEntry.component;

                                timeEntry.component.props = {
                                    ...updatedEntry,
                                    ops: timeEntryOperations,
                                    icons: timeEntryIcons
                                };

                                return timeEntry.component;
                            })}
                    </stack-l>
                </center-l>
            </box-l>
        );
    }
}
