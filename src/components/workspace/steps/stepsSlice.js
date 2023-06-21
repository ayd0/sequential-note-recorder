import { signal, computed } from "@preact/signals";
import StepOpen from "./StepOpen";
import StepClosed from "./StepClosed";

const createStep = (stepName, stepList) => {
    if (stepList.value.length > 0) {
        let step = stepList.value[stepList.value.length - 1];
        step.status = 'closed';
        step.component.value = <StepClosed />;
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

const updateStep = (stepId, stepList) => {
    const step = stepList.value.find(step => step.id === stepId);
    step.status = "edit";
    step.component.value = <StepOpen />;
}

const createStepsState = () => {
    const stepList = signal([]);
    const numSteps = computed(() => stepList.value.length + 1);

    const addStep = (stepName) => (stepList.value = [...stepList.value, createStep(stepName, stepList)]);
    const editStep = (stepId) => updateStep(stepId, stepList);

    return { stepList, numSteps, addStep, editStep };
};

export default createStepsState;
