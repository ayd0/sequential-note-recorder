import createStepsState from "./components/workspace/steps/stepsSlice";
import createTimerState from "./components/workspace/timer/timerSlice";
import createRequestCache from "./utilities/requestCache";

const createStore = () => ({
    steps: createStepsState(),
    timer: createTimerState(),
    requestCache: createRequestCache(),
});

export default createStore;