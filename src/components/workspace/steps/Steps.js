import { Component } from "preact";
import { ReactSVG } from "react-svg";

export default class Steps extends Component {
    stepName = "";

    render(steps) {
        const { stepList, numSteps, addStep } = steps.state;

        return (
            <box-l id="step-container" padBlock="0" padding="0">
                <div id="step-action-bar">
                    <h1>Steps</h1>
                    <div style="display: flex; align-items: center;">
                        <input
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
                            }}
                        />
                    </div>
                </div>
                <>
                    {stepList.value
                        .slice()
                        .reverse()
                        .map((step) => {
                            step.component.props = {
                                status: step.status,
                                name: step.name,
                                text: step.text,
                                code: step.code,
                                links: step.links,
                            };
                            return step.component;
                        })}
                </>
            </box-l>
        );
    }
}
