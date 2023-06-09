import { Component } from "preact";
import { ReactSVG } from "react-svg";

export default class Steps extends Component {
    stepName = "";

    render(steps) {
        // steps state
        const { stepList, numSteps, addStep, toggleStep, deleteStep } =
            steps.state;

        // shared state
       const renderTimer = steps.shared.timer.renderTimer;
       const time = steps.shared.timer.time;

        // localstate
        const stepOperations = {
            toggleStep,
            deleteStep,
            renderTimer
        };

        return (
            <box-l id="step-container" padBlock="0" padding="0">
                <div id="step-action-bar">
                    <h1>Steps</h1>
                    <div style="display: flex; align-items: center;">
                        <input
                            id="step-name-input"
                            class="narrow-input"
                            placeholder={`Step ${numSteps.value}`}
                            value={this.stepName}
                            onInput={(e) => (this.stepName = e.target.value)}
                        ></input>
                        <ReactSVG
                            style="padding-block-start: var(--s-3)"
                            src="../assets/icons/next-step.svg"
                            onClick={() => {
                                addStep(
                                    this.stepName || `Step ${numSteps.value}`,
                                    time.value
                                );
                                this.stepName = "";
                                document.querySelector(
                                    "#step-name-input"
                                ).value = "";
                            }}
                        />
                    </div>
                </div>
                <>
                    {stepList.value
                        .slice()
                        .reverse()
                        .map((step) => { 
                            step.component.value.props = { ...step, ops: stepOperations };
                            return step.component.value;
                        })}
                </>
            </box-l>
        );
    }
}
