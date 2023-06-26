import { signal, computed } from "@preact/signals";
import StepOpen from "./StepOpen";
import StepClosed from "./StepClosed";
import config from "../../../../config";

const stepUrl = `${config.baseUrl}/step/`;

const getStep = async (stepName) => {
    let step = await fetch(stepUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: stepName }),
    })
        .then((response) => response.json())
        .then((response) => (step = response))
        .catch((err) => console.error(err));

    return step;
};

const createStep = async (stepName, stepList) => {
    if (stepList.value.length > 0) {
        let step = stepList.value[stepList.value.length - 1];
        if (step.status === "open") {
            step.status = "closed";
            step.component.value = <StepClosed />;
        }
    }

    const step = {...(await getStep(stepName)), component: signal(<StepOpen />)};
    return step;
};

const updateStep = () => {}; // TODO: Handle saving form data

const toggleEditStep = (stepId, stepList) => {
    const step = stepList.value.find((step) => step.id === stepId);
    console.log(stepList.value);
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
// issue: deleting matching named steps will remove newly created step
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

    const addStep = async (stepName) =>
        (stepList.value = [...stepList.value, createStep(stepName, stepList)]);
    const toggleStep = (stepId) => toggleEditStep(stepId, stepList);
    const deleteStep = (stepId) => removeStep(stepId, stepList);

    return { stepList, numSteps, addStep, toggleStep, deleteStep };
};

export default createStepsState;
