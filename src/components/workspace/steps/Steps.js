import { Component } from "preact";
import { ReactSVG } from "react-svg";

export default class Steps extends Component {
    stepName = "";

    render(steps, shared) {
        // steps state
        const { stepList, numSteps, addStep, toggleStep, deleteStep } =
            steps.state;
        const stepOperations = {
            toggleStep,
            deleteStep,
        };

        // shared state
        const timer = shared.timer;

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
                                    this.stepName || `Step ${numSteps.value}`
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
                        .map((step, index) => { 
                            step.component.value.props = { ...step, ops: stepOperations };
                            return step.component.value;
                        })}
                </>
            </box-l>
        );
    }
}
