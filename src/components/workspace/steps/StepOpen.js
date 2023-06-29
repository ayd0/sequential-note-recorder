import { ReactSVG } from "react-svg";
import { useSignal } from "@preact/signals";

export default function StepOpen(props) {
    let headerClass = "step-entry:open";
    let textAreaId = `TA${props._id}`;

    console.log(props.ops.renderTimer(props.time));

    const localState = [
        {
            placeholder: "Write text here...",
            textValue: useSignal(props.text),
        },
        {
            placeholder: "Write code here...",
            textValue: useSignal(props.code),
        },
        {
            placeholder: "Enter links here...",
            textValue: useSignal(props.links),
        },
    ];

    const stateIdx = useSignal(0);

    const placeholder = useSignal(localState[stateIdx.value].placeholder);
    let tempTextValue = localState[stateIdx.value].textValue.value;

    const iconStyles = useSignal(["", "opacity:half", "opacity:half"]);

    const setTextValue = () => {
        localState[stateIdx.value].textValue.value = tempTextValue;
    };

    const updateIconStyles = () => {
        for (let i = 0; i < iconStyles.value.length; ++i) {
            i === stateIdx.value
                ? (iconStyles.value[i] = "")
                : (iconStyles.value[i] = "opacity:half");
        }
    };

    const updateTextarea = (idx) => {
        setTextValue();
        stateIdx.value = idx;
        updateIconStyles();
        placeholder.value = localState[stateIdx.value].placeholder;
    };

    let buttonGroup = [
        <button
            class="step-button-clear"
            onClick={() => {
                document.querySelector(`#${textAreaId}`).value = "";
                tempTextValue = "";
                setTextValue();
            }}
        >
            Clear
        </button>,
        <button
            class="step-button-add"
            onClick={() => {
                setTextValue();
                props.ops.toggleStep(props._id, {
                    text: localState[0].textValue.value,
                    code: localState[1].textValue.value,
                    links: localState[2].textValue.value,
                });
            }}
        >
            Done
        </button>,
    ];

    if (props.status === "edit") {
        headerClass += " step-entry:closed";
        buttonGroup.push(
            <button
                class="step-button-delete"
                onClick={() => props.ops.deleteStep(props._id)}
            >
                Delete
            </button>
        );
    }

    return (
        <div class={headerClass}>
            <switcher-l
                style="align-items: center"
                threshold="1rem"
                space="var(--border-thin)"
            >
                <p class="step-header">
                    {props.name}
                    <icon-l style="margin-inline-start: var(--s2); padding-block-start: var(--s-5);">
                        <ReactSVG
                            class={iconStyles.value[0]}
                            style="font-size: 2.5em;"
                            src="../assets/icons/add-comment.svg"
                            onClick={() => updateTextarea(0)}
                        />
                    </icon-l>
                    <icon-l>
                        <ReactSVG
                            class={iconStyles.value[1]}
                            style="font-size: 2.5em"
                            src="../assets/icons/code-block.svg"
                            onClick={() => updateTextarea(1)}
                        />
                    </icon-l>
                    <icon-l>
                        <ReactSVG
                            class={iconStyles.value[2]}
                            style="font-size: 2.5em;"
                            src="../assets/icons/add-link.svg"
                            onClick={() => updateTextarea(2)}
                        />
                    </icon-l>
                </p>
                <div class="step-button-group">
                    {buttonGroup.map((button) => button)}
                </div>
            </switcher-l>
            <textarea
                id={textAreaId}
                class="step-input"
                placeholder={placeholder.value}
                value={tempTextValue}
                onInput={(e) => {
                    tempTextValue = e.target.value;
                }}
            ></textarea>
        </div>
    );
}
