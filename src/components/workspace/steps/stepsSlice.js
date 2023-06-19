import { signal, computed } from "@preact/signals";
// @ts-ignore
import StepOpen from "./StepOpen";

const createStep = (stepName) => {
    return {
        status: "open",
        name: stepName,
        text: "",
        code: "",
        links: [],
        component: <StepOpen />,
    };
};

const createStepsState = () => {
    const stepList = signal([]);
    const numSteps = computed(() => stepList.value.length + 1);

    const addStep = (stepName) => (stepList.value = [...stepList.value, createStep(stepName)]);

    return { stepList, numSteps, addStep };
};

export default createStepsState;
