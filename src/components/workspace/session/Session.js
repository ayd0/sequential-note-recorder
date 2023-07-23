import { Component } from "preact";
import SessionCanvas from "./sessionCanvas";

export default class Session extends Component {
    render() {
        const sessionCanvas = SessionCanvas();
        return (
            <box-l padBlock="0">
                <h1 style="margin-block-end: var(--s-5);">Session</h1>
                {sessionCanvas}
            </box-l>
        );
    }
}
