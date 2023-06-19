import { signal, computed } from "@preact/signals";

const createStepState = () => {
    const stepList = signal([]);

    const numSteps = computed(() => stepList.value.length);

    return { stepList, numSteps };
}

export default createStepState;