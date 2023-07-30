import { signal } from "@preact/signals";
import createStepsState from "./components/workspace/steps/stepsSlice";
import createTimerState from "./components/workspace/timer/timerSlice";
import createRequestCache from "./utilities/requestCache";
import createSessionState from "./components/workspace/session/sessionSlice";
import createSubjectsState from "./components/workspace/subjects/subjectsSlice";

export const requestCache = signal(createRequestCache());

const createStore = () => {
    return {
        requestCache: requestCache,
        steps: createStepsState(requestCache),
        timer: createTimerState(),
        session: createSessionState(),
        subjects: createSubjectsState()
    };
};

export default createStore;
