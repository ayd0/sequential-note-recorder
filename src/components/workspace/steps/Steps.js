import { Component } from "preact";
import { ReactSVG } from "react-svg";
import { signal } from "@preact/signals";

export default class Steps extends Component {
    stepName = "";

    render(steps) {
        const { stepList, numSteps, addStep, toggleStep, deleteStep } = steps.state;
        const stepOperations = {
            toggleStep,
            deleteStep,
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
                                    this.stepName || `Step ${numSteps.value}`
                                );
                                this.stepName = "";
                                document.querySelector('#step-name-input').value = "";
                            }}
                        />
                    </div>
                </div>
                <>
                    {stepList.value
                        .slice()
                        .reverse()
                        .map((step, index) => {
                            step.component.value.props = {
                                id: stepList.value.length - index - 1,
                                ops: stepOperations,
                                status: step.status,
                                name: step.name,
                                text: step.text,
                                code: step.code,
                                links: step.links,
                            };
                            return step.component.value;
                        })}
                </>
            </box-l>
        );
    }
}
