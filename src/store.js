import createStepsState from "./components/workspace/steps/stepsSlice";
import createTimerState from "./components/workspace/timer/timerSlice";

const createStore = () => ({
    steps: createStepsState(),
    timer: createTimerState()
});

export default createStore;