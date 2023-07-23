// declare and override canvas modifiers
export const getModifiers = (overrides) => {
    if (overrides === undefined) overrides = {};

    // box sizing modifiers
    const subjectBox = overrides.subjectBox || {
        height: 30,
        width: 70,
    };
    const stepBox = overrides.stepBox || {
        height: 25,
        width: 90,
    };

    // distance modifiers
    const buffer = overrides.buffer || 10;
    const branchLine = overrides.branchLine || buffer;
    const subjectBoxTop = overrides.subjectBoxTop || buffer * 4;
    const subjectBoxLeft = overrides.subjectBoxLeft || buffer * 2;
    const subjectBoxLeftBuffer =
        overrides.subjectBoxLeftBuffer || subjectBox.width + buffer * 4;
    // Used to calculate total width in a complete branch structure: secSub + secStep + secExtStep
    //      -> For calculating top-line extensions
    const sectionSubject = branchLine + subjectBox.width;
    const sectionStep =
        branchLine * 2 + subjectBox.width / 2 + stepBox.width - sectionSubject;
    const sectionExtendedStep = branchLine * 2 + stepBox.width;

    // style modifiers
    const boxShadowOffset = overrides.boxShadowOffset || 2;

    return {
        box: {
            subjectBox: subjectBox,
            stepBox: stepBox,
        },
        distance: {
            buffer: buffer,
            branchLine: branchLine,
            subjectBoxTop: subjectBoxTop,
            subjectBoxLeft: subjectBoxLeft,
            subjectBoxLeftBuffer: subjectBoxLeftBuffer,
            sectionSubject: sectionSubject,
            sectionStep: sectionStep,
            sectionExtendedStep: sectionExtendedStep,
        },
        style: {
            boxShadowOffset: boxShadowOffset,
        },
    };
};
