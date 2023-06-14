import { signal, computed } from "@preact/signals";

const createStepState = () => {
    const steps = signal([]);

    const numSteps = computed(() => steps.value.length);

    return { steps, numSteps };
}

export default createStepState;