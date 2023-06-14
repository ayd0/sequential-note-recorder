import createStepState from "./components/workspace/steps/stepsSlice";

const store = () => ({
    steps: createStepState,
});

export default store;