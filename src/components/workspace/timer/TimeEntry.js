import { Component } from "preact";
import { ReactSVG } from "react-svg";

export default function TimeEntry(props) {
    // studyLength and breakLength will be reduced to targetTime as prop

    let splitTime;
    let statusColor;
    let icon;

    if (props.time < props.targetTime) {
        icon = props.icons.minus;
        splitTime = props.targetTime - props.time;
    } else if (props.time > props.targetTime) {
        icon = props.icons.plus;
        splitTime = props.time - props.targetTime;
    } else {
        icon = props.icons.plusMinus;
        splitTime = 0;
    }

    splitTime > props.minMaxVal
        ? (statusColor = "red")
        : splitTime < props.minMaxVal &&
          splitTime > props.minMaxVal - props.buffer
        ? (statusColor = "yellow")
        : (statusColor = "green");

    return (
        <p style="display: flex; align-items: center;">
            {props.status}: {props.ops.renderTimer(props.time)}
            <icon-l
                style={`margin-inline: .2ch; font-size: 2em; fill: ${statusColor};`}
            >
                {icon}
            </icon-l>
            <span style={`border-bottom: 1px solid ${statusColor}`}>
                {props.ops.renderTimer(splitTime)}
            </span>
        </p>
    );
}
