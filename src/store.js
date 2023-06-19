import createStepsState from "./components/workspace/steps/stepsSlice";

const createStore = () => ({
    steps: createStepsState(),
});

export default createStore;