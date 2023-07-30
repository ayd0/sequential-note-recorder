import { Component } from "preact";
import { ReactSVG } from "react-svg";

export default class ActionBar extends Component {
    render(subjects) {
        // subjects state
        const { subjectList, addSubject } = subjects.state;

        // shared state
        const time = subjects.shared.timer.time;

        let subjectName = "";
        
        return (
            <box-l padblock="0" style="display: flex;">
                <div id="action-bar">
                    <div>
                        <h1 style="display: flex;">
                            Study
                            <icon-l>
                                <ReactSVG src="../assets/icons/arrow_drop_down.svg" />
                            </icon-l>
                        </h1>
                    </div>
                    <input
                        class="narrow-input"
                        placeholder="Enter name of subject..."
                        onInput={(e) => (subjectName = e.target.value)}
                    ></input>
                    <ReactSVG
                        src="../assets/icons/play.svg"
                        onClick={() => addSubject(subjectName, time.value)}
                    />
                    <ReactSVG src="../assets/icons/pause.svg" />
                    <ReactSVG src="../assets/icons/stop.svg" />
                </div>
            </box-l>
        );
    }
}
