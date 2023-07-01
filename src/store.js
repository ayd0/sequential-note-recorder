import { signal } from "@preact/signals";
import createStepsState from "./components/workspace/steps/stepsSlice";
import createTimerState from "./components/workspace/timer/timerSlice";
import createRequestCache from "./utilities/requestCache";

const createStore = () => {
    const requestCache = signal(createRequestCache());
    return {
        requestCache: requestCache,
        steps: createStepsState(requestCache),
        timer: createTimerState(),
    };
};

export default createStore;
