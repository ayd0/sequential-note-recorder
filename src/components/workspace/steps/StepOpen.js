import { ReactSVG } from "react-svg";

export default function StepOpen(props) {
        return (
            <div class="step-entry:open">
                <switcher-l
                    style="align-items: center"
                    threshold="1rem"
                    space="var(--border-thin)"
                >
                    <p class="step-header">
                        {props.name}
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
                    value={props.code}
                ></textarea>
            </div>
        );
}