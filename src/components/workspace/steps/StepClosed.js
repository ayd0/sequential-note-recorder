import { ReactSVG } from "react-svg";

export default function stepClosed(props) {
    return (
        <div class="step-entry:closed">
            <p class="step-header">
                {props.name}
                <icon-l style="margin-inline-start: var(--s0); padding-block-start: var(--s-5);">
                    <ReactSVG
                        style="font-size: 2em;"
                        src="../assets/icons/edit.svg"
                        onClick = {() => props.ops.toggleStep(props._id, [])}
                    />
                </icon-l>
                <icon-l>
                    <ReactSVG
                        style="font-size: 2em"
                        src="../assets/icons/delete.svg"
                        onClick = {() => props.ops.deleteStep(props._id)}
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
    );
}
