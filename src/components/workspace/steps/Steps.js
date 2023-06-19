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
                                console.log(stepList.value);
                            }}
                        />
                    </div>
                </div>
                <>
                    {stepList.value.map((step) => {
                        step.component.props = {
                            name: step.name,
                            text: step.text,
                            code: step.code,
                            links: step.links,
                        };
                        return step.component;
                    })}
                </>
                <div class="step-entry:open">
                    <switcher-l
                        style="align-items: center"
                        threshold="1rem"
                        space="var(--border-thin)"
                    >
                        <p class="step-header">
                            Step 4
                            <icon-l style="margin-inline-start: var(--s2); padding-block-start: var(--s-5);">
                                <ReactSVG
                                    style="font-size: 2.5em; opacity: 50%;"
                                    src="../assets/icons/add-comment.svg"
                                />
                            </icon-l>
                            <icon-l>
                                <ReactSVG
                                    style="font-size: 2.5em"
                                    src="../assets/icons/code-block.svg"
                                />
                            </icon-l>
                            <icon-l>
                                <ReactSVG
                                    style="font-size: 2.5em; opacity: 50%;"
                                    src="../assets/icons/add-link.svg"
                                />
                            </icon-l>
                        </p>
                        <div class="step-button-group">
                            <button class="step-button-clear">Clear</button>
                            <button class="step-button-add">Done</button>
                        </div>
                    </switcher-l>
                    <textarea
                        class="step-input"
                        placeholder="Write code here..."
                    ></textarea>
                </div>
                <div class="step-entry:closed">
                    <p class="step-header">
                        Step 3
                        <icon-l style="margin-inline-start: var(--s0); padding-block-start: var(--s-5);">
                            <ReactSVG
                                style="font-size: 2em;"
                                src="../assets/icons/edit.svg"
                            />
                        </icon-l>
                        <icon-l>
                            <ReactSVG
                                style="font-size: 2em"
                                src="../assets/icons/delete.svg"
                            />
                        </icon-l>
                        <icon-l>
                            <ReactSVG
                                style="font-size: 2em;"
                                src="../assets/icons/link.svg"
                            />
                        </icon-l>
                    </p>
                </div>
                <div class="step-entry:closed">
                    <p class="step-header">
                        Step 2
                        <icon-l style="margin-inline-start: var(--s0); padding-block-start: var(--s-5);">
                            <ReactSVG
                                style="font-size: 2em;"
                                src="../assets/icons/edit.svg"
                            />
                        </icon-l>
                        <icon-l>
                            <ReactSVG
                                style="font-size: 2em"
                                src="../assets/icons/delete.svg"
                            />
                        </icon-l>
                        <icon-l>
                            <ReactSVG
                                style="font-size: 2em;"
                                src="../assets/icons/link.svg"
                            />
                        </icon-l>
                    </p>
                </div>
                <div class="step-entry:open step-entry:edit">
                    <switcher-l
                        style="align-items: center"
                        threshold="1rem"
                        space="var(--border-thin)"
                    >
                        <p class="step-header">
                            Step 1
                            <icon-l style="margin-inline-start: var(--s2); padding-block-start: var(--s-5);">
                                <ReactSVG
                                    style="font-size: 2.5em; opacity: 50%;"
                                    src="../assets/icons/add-comment.svg"
                                />
                            </icon-l>
                            <icon-l>
                                <ReactSVG
                                    style="font-size: 2.5em"
                                    src="../assets/icons/code-block.svg"
                                />
                            </icon-l>
                            <icon-l>
                                <ReactSVG
                                    style="font-size: 2.5em; opacity: 50%;"
                                    src="../assets/icons/add-link.svg"
                                />
                            </icon-l>
                        </p>
                        <div class="step-button-group">
                            <button class="step-button-delete">Delete</button>
                            <button class="step-button-clear">Clear</button>
                            <button class="step-button-add">Done</button>
                        </div>
                    </switcher-l>
                    <textarea
                        class="step-input"
                        placeholder="Write code here..."
                    ></textarea>
                </div>
            </box-l>
        );
    }
}
