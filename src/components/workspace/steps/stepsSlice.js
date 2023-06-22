import { signal, computed } from "@preact/signals";
import StepOpen from "./StepOpen";
import StepClosed from "./StepClosed";

const createStep = (stepName, stepList) => {
    if (stepList.value.length > 0) {
        let step = stepList.value[stepList.value.length - 1];
        if (step.status === "open") {
            step.status = "closed";
            step.component.value = <StepClosed />;
        }
    }
    return {
        id: stepList.value.length,
        status: "open",
        name: stepName,
        text: "",
        code: "",
        links: [],
        component: signal(<StepOpen />),
    };
};

const updateStep = () => {}; // TODO: Handle saving form data

const toggleEditStep = (stepId, stepList) => {
    const step = stepList.value.find((step) => step.id === stepId);
    if (step.status !== "closed") {
        step.status = "closed";
        step.component.value = <StepClosed />;
        updateStep();
    } else {
        step.status = "edit";
        step.component.value = <StepOpen />;
    }
};

// TODO: Handle renumbering steps, get regex for 'Step #' for conditional trigger AND renumber by index value in list + 1
const removeStep = (stepId, stepList) => {
    const updatedStepList = stepList.value.slice();
    updatedStepList.splice(
        stepList.value.indexOf(
            stepList.value.find((step) => step.id === stepId)
        ),
        1
    );
    stepList.value = updatedStepList; // have to assign value directly to trigger rerender, splice will not trigger
};

const createStepsState = () => {
    const stepList = signal([]);
    const numSteps = computed(() => stepList.value.length + 1);

    const addStep = (stepName) =>
        (stepList.value = [...stepList.value, createStep(stepName, stepList)]);
    const toggleStep = (stepId) => toggleEditStep(stepId, stepList);
    const deleteStep = (stepId) => removeStep(stepId, stepList);

    return { stepList, numSteps, addStep, toggleStep, deleteStep };
};

export default createStepsState;
