import { Component } from "preact";
import { ReactSVG } from "react-svg";

export default function TimeEntry(props) {
    // studyLength and breakLength will be reduced to targetTime as prop

    // TK: Dev
    props.components = {
        minus: () => null,
        plus: () => null,
        plusMinus: () => null,
    };
    
    let component = () => undefined;
    let splitTime;
    let statusColor;

    if (props.time < props.target) {
        component = props.components.minus;
        splitTime = props.targetTime - props.time;
    } else if (props.time > props.target) {
        component = props.components.plus;
        splitTime = props.time - props.targetTime;
    } else {
        component = props.components.plusMinus;
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
            {props.section}: {props.ops.renderTimer(props.time)}
            <icon-l
                style={`margin-inline: .2ch; font-size: 2em; fill: ${statusColor};`}
            >
                {component()}
            </icon-l>
            <span style={`border-bottom: 1px solid ${statusColor}`}>
                {splitTime}
            </span>
        </p>
    );
}
