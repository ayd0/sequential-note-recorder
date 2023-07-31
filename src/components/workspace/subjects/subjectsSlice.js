import { signal } from "@preact/signals";
import config from "../../../../config";
import { requestCache } from "../../../store";

const subjectUrl = `${config.baseUrl}/subject/`;

const getBoxStyles = () => {
    return {
        color: "color here",
        font: "font here",
    };
};

const createSubjectState = (subject, subjectList) => {
    subjectList.value.push({
        ...subject,
        styles: getBoxStyles(),
    });
};

const postSubject = async (subjectName, time, subjectList) => {
    const request = {
        try: (initial) =>
            fetch(subjectUrl, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: subjectName, time: time }),
            })
                .then((subject) => {
                    if (initial) {
                        subject
                            .json()
                            .then((subject) =>
                                createSubjectState(subject, subjectList)
                            )
                            .then(() => console.log(subjectList.value));
                    } else {
                        return subject;
                    }
                })
                .catch(() => {
                    if (initial) requestCache.value.cacheRequest(request);
                }),
        // resolve is not calling createSubjectState
        resolve: (subject) => {
            console.log("in resolve");
            subject
                .json()
                .then((subject) => createsubjectState(subject, subjectList))
                .then(() => console.log(subjectList.value));
        },
    };

    request.try(true);
};

const putSubject = (subject) => {
    // step will have already been pushed into subject's steps
    // Should handle step subject assignment in posts to step url serverside
    const request = {
        try: (initial) =>
            fetch(subjectUrl + subject._id, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: subject.name,
                    steps: subject.steps,
                }),
            })
                .then((response) => {
                    if (initial) {
                        // HANDLE
                    } else {
                        return response;
                    }
                })
                .catch((err) => {
                    console.error(err);
                    if (initial) requestCache.value.cacheRequest(request);
                }),
        resolve: () => {
            // HANDLE
        },
    };

    request.try(true).then(() => {
        // HANDLE
    });
};

// GET requests must handle step data

const createSubjectsState = () => {
    const subjectList = signal([]);
    const selectedSubjectIndex = signal(undefined);

    const addSubject = (subjectName, time) => {
        postSubject(subjectName, time, subjectList);
        selectedSubjectIndex.value = subjectList.value.length;
    }

    const selectSubject = (index) => selectedSubjectIndex.value = index;
    const getSelectedSubject = () => subjectList.value[selectedSubjectIndex.value];
    const updateSubjectSteps = () => putSubject(subject);

    return { subjectList, addSubject, selectSubject, getSelectedSubject };
};

export default createSubjectsState;
