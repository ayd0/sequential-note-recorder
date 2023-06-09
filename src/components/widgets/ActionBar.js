import { ReactSVG } from "react-svg";

const ActionBar = () => {
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
                ></input>
                <ReactSVG src="../assets/icons/play.svg" />
                <ReactSVG src="../assets/icons/pause.svg" />
                <ReactSVG src="../assets/icons/stop.svg" />
            </div>
        </box-l>
    );
};

export default ActionBar;