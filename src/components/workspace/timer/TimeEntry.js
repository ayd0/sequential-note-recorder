import { Component } from "preact";
import { ReactSVG } from "react-svg";

export default function TimeEntry(props) {
    return (
        <p style="display: flex; align-items: center;">
            Study: 26:00
            <icon-l style="margin-inline: .2ch; font-size: 2em; fill: green;">
                <ReactSVG src="../assets/icons/plus.svg" />
            </icon-l>
            <span style="border-bottom: 1px solid green">1:00</span>
        </p>
    );
}
