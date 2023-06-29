import { signal, computed } from "@preact/signals";
import StepOpen from "./StepOpen";
import StepClosed from "./StepClosed";
import config from "../../../../config";

const stepUrl = `${config.baseUrl}/step/`;

const postStep = async (stepName, time) => {
    let step = await fetch(stepUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: stepName, time: time }),
    })
        .then((response) => response.json())
        .then((response) => (step = response))
        .catch((err) => console.error(err));

    return step;
};

const createStep = async (stepName, time, stepList) => {
    if (stepList.value.length > 0) {
        let step = stepList.value[stepList.value.length - 1];
        if (step.status === "open") {
            step.status = "closed";
            step.component.value = <StepClosed />;
        }
    }

    const step = await postStep(stepName, time)
        .then((step) => (step = { ...step, component: signal(<StepOpen />) }))
        .catch((err) => console.error(err));

    return step;
};

const updateStep = async (step, altProps) => {
    step.text = altProps.text;
    step.code = altProps.code;
    step.links = altProps.links;

    await fetch(stepUrl + step._id, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(step),
    })
        .then((response) => response.json())
        .then((response) => (step = response))
        .catch((err) => console.error(err));
};

const toggleEditStep = (stepId, altProps, stepList) => {
    const step = stepList.value.find((step) => step._id === stepId);
    if (step.status !== "closed") {
        step.status = "closed";
        step.component.value = <StepClosed />;

        if (
            step.text !== altProps.text ||
            step.code !== altProps.code ||
            step.links !== altProps.links
        ) {
            updateStep(step, altProps);
        }

    } else {
        step.status = "edit";
        step.component.value = <StepOpen />;
    }
};

// TODO: Handle renumbering steps, get regex for 'Step #' for conditional trigger AND renumber by index value in list + 1
// issue: deleting matching named steps will remove newly created step
const removeStep = async (stepId, stepList) => {
    await fetch(`${stepUrl}${stepId}`, {
        method: "DELETE",
    })
        .then(() => {
            const updatedStepList = stepList.value.slice();
            updatedStepList.splice(
                stepList.value.indexOf(
                    stepList.value.find((step) => step._id === stepId)
                ),
                1
            );
            stepList.value = updatedStepList; // have to assign value directly to trigger rerender, splice will not trigger
        })
        .catch((err) => console.error(err));
};

const createStepsState = () => {
    const stepList = signal([]);
    const numSteps = computed(() => stepList.value.length + 1);

    const addStep = async (stepName, time) => {
        const step = await createStep(stepName, time, stepList)
            .then((step) => (stepList.value = [...stepList.value, step]))
            .catch((err) => console.error(err));
    };

    const toggleStep = (stepId, altProps) =>
        toggleEditStep(stepId, altProps, stepList);
    const deleteStep = (stepId) => removeStep(stepId, stepList);

    return { stepList, numSteps, addStep, toggleStep, deleteStep };
};

export default createStepsState;
