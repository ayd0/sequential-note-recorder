import { signal, computed } from "@preact/signals";
import StepOpen from "./StepOpen";
import StepClosed from "./StepClosed";

const createStep = (stepName, stepList) => {
    console.log(stepList.value);
    if (stepList.value.length > 0) {
        let step = stepList.value[stepList.value.length - 1];
        step.status = 'closed';
        step.component = <StepClosed />;
    }
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

    const addStep = (stepName) => (stepList.value = [...stepList.value, createStep(stepName, stepList)]);

    return { stepList, numSteps, addStep };
};

export default createStepsState;
