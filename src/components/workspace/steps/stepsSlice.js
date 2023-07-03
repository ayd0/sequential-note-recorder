import { signal, computed } from "@preact/signals";
import StepOpen from "./StepOpen";
import StepClosed from "./StepClosed";
import config from "../../../../config";
import createRequestCache from "../../../utilities/requestCache";

const stepUrl = `${config.baseUrl}/step/`;
// TK: This is a hacky implementation of requestCache. In future, refactor for SSoT
const requestCache = createRequestCache();

const createStepState = (step, stepList) => {
    if (stepList.value.length > 0) {
        let step = stepList.value[stepList.value.length - 1];
        if (step.status === "open") {
            step.status = "closed";
            step.component.value = <StepClosed />;
        }
    }

    step = { ...step, component: signal(<StepOpen />) };
    stepList.value = [...stepList.value, step];
};

const postStep = async (stepName, time, stepList) => {
    const request = {
        try: (initial) =>
            fetch(stepUrl, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: stepName, time: time }),
            })
                .then((step) => {
                    if (initial) {
                        step.json().then((step) =>
                            createStepState(step, stepList)
                        );
                    } else {
                        return step;
                    }
                })
                .catch(() => {
                    if (initial) requestCache.cacheRequest(request);
                }),
        resolve: (step) =>
            step.json().then((step) => createStepState(step, stepList)),
    };

    request.try(true);
};

const updateStep = async (step, altProps) => {
    step.text = altProps.text;
    step.code = altProps.code;
    step.links = altProps.links;

    await fetch(stepUrl + step._id, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(step),
    })
        .then((response) => response.json())
        .then((response) => (step = response))
        .catch((err) => console.error(err));
};

const toggleEditStep = (stepId, altProps, stepList) => {
    const step = stepList.value.find((step) => step._id === stepId);
    if (step.status !== "closed") {
        step.status = "closed";
        step.component.value = <StepClosed />;

        if (
            step.text !== altProps.text ||
            step.code !== altProps.code ||
            step.links !== altProps.links
        ) {
            updateStep(step, altProps);
        }
    } else {
        step.status = "edit";
        step.component.value = <StepOpen />;
    }
};

const removeStepState = (stepId, stepList) => {
    const updatedStepList = stepList.value.slice();
    updatedStepList.splice(
        stepList.value.indexOf(
            stepList.value.find((step) => step._id === stepId)
        ),
        1
    );
    stepList.value = updatedStepList;
};

// TODO: Handle renumbering steps, get regex for 'Step #' for conditional trigger AND renumber by index value in list + 1
const removeStep = (stepId, stepList) => {
    const request = {
        try: (initial) =>
            fetch(stepUrl + stepId, {
                method: "DELETE",
            })
                .then((response) => {
                    if (initial) {
                        removeStepState(stepId, stepList);
                    } else {
                        return response;
                    }
                })
                .catch(() => {
                    if (initial) requestCache.cacheRequest(request);
                }),
        resolve: () => removeStepState(stepId, stepList),
    };

    request.try(true);
};

const createStepsState = () => {
    const stepList = signal([]);
    const numSteps = computed(() => stepList.value.length + 1);

    const addStep = (stepName, time) => postStep(stepName, time, stepList);

    const toggleStep = (stepId, altProps) =>
        toggleEditStep(stepId, altProps, stepList);

    const deleteStep = (stepId) => removeStep(stepId, stepList);

    return { stepList, numSteps, addStep, toggleStep, deleteStep };
};

export default createStepsState;
