import { Component } from "preact";
import { ReactSVG } from "react-svg";
import { useSignal } from "@preact/signals";

export default class Timer extends Component {
    // TODO: add modifiable timer status properties (sequence, min, max, buffer) and add buttons to interface
    render(timer) {
        // timer state
        const {timerId, timerList, time, addTime, renderTimer} = timer.state;

        // local state
        const isRunning = useSignal(false);
        const timeInterval = useSignal(null);
        
        const toggleTimer = (value) => {
            value !== undefined 
                ? isRunning.value = value
                : isRunning.value = !isRunning.value;

            if (isRunning.value) {
                timeInterval.value = setInterval(() => ++time.value, 1000);
            } else {
                clearInterval(timeInterval.value);
            }
        }

        const reset = () => {
            addTime(time.value);
            console.log(timerList.value)
            time.value = 0;
            if (!isRunning.value) toggleTimer();
            console.log(timerId.value)
        }

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
                                Break{" "}
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
                                {renderTimer()} / 15:00{" "}
                                <icon-l>
                                    <ReactSVG
                                        style="font-size: 1.6em; padding-inline: var(--s-1); padding-block-start: var(--s-3);"
                                        src="../assets/icons/plus-minus.svg"
                                    />
                                </icon-l>
                                2:00
                            </p>
                        </div>
                        <p style="display: flex; align-items: center;">
                            Study: 26:00
                            <icon-l style="margin-inline: .2ch; font-size: 2em; fill: green;">
                                <ReactSVG src="../assets/icons/plus.svg" />
                            </icon-l>
                            <span style="border-bottom: 1px solid green">
                                1:00
                            </span>
                        </p>
                        <p style="display: flex; align-items: center">
                            Break: 12:00
                            <icon-l style="margin-inline: .2ch; font-size: 2em; fill: red;">
                                <ReactSVG src="../assets/icons/minus.svg" />
                            </icon-l>
                            <span style="border-bottom: 1px solid red">
                                3:00
                            </span>
                        </p>
                        <p style="display: flex; align-items: center;">
                            Study: 22:50
                            <icon-l style="margin-inline: .2ch; font-size: 2em; fill: orange;">
                                <ReactSVG src="../assets/icons/minus.svg" />
                            </icon-l>
                            <span style="border-bottom: 1px solid orange">
                                2:10
                            </span>
                        </p>
                    </stack-l>
                </center-l>
            </box-l>
        );
    }
}
