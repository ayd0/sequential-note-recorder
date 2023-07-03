import { signal } from "@preact/signals";
import createStepsState from "./components/workspace/steps/stepsSlice";
import createTimerState from "./components/workspace/timer/timerSlice";
import createRequestCache from "./utilities/requestCache";

export const requestCache = signal(createRequestCache());

const createStore = () => {
    return {
        requestCache: requestCache,
        steps: createStepsState(requestCache),
        timer: createTimerState(),
    };
};

export default createStore;
