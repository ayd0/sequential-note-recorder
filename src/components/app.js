import { Router } from "preact-router";
import { ReactSVG } from "react-svg";

import {} from "./web-components/layout-components";

const App = () => {
    return (
        <div id="app">
            <switcher-l space="var(--border-thin);" threshold="30rem">
                <box-l class="box-style:nav" padding="var(--s-5)">
                    <div style="display: flex; align-items: center; width: 100%; height: var(--nav-height)">
                        <ReactSVG
                            src="../assets/icons/step-over.svg"
                            style="opacity: 80%; margin-inline-end: 2ch"
                        />
                        <div id="search-container">
                            <ReactSVG
                                src="../assets/icons/search.svg"
                                style="opacity: 80%;"
                            />
                            <input
                                class="narrow-input"
                                type="text"
                                placeholder="Search"
                            ></input>
                            <button>Search</button>
                        </div>
                        <div style="flex-grow: 1;"></div>
                    </div>
                </box-l>
                <box-l class="box-style:nav" padding="var(--s-5)">
                    <div
                        style="display: flex; justify-content: flex-end; align-items: center; height: 100%;"
                        class="fade-all"
                    >
                        <ReactSVG src="../assets/icons/dark-mode.svg" />
                        <ReactSVG src="../assets/icons/widgets.svg" />
                        <ReactSVG src="../assets/icons/settings.svg" />
                        <ReactSVG src="../assets/icons/account-circle.svg" />
                    </div>
                </box-l>
            </switcher-l>
            <sidebar-l contentMin="0%" space="0" class="sidebar-style:main">
                <div id="nav-drawer-container">
                    <stack-l
                        class="stack-style:nav-drawer"
                        space="var(--border-thin)"
                    >
                        <box-l padBlock="var(--s0)">
                            <stack-l class="nav-drawer">
                                <p>
                                    <icon-l>
                                        <ReactSVG src="../assets/icons/dashboard.svg" />
                                    </icon-l>
                                    Workspace
                                </p>
                                <p style="margin-inline-start: var(--s-4);">
                                    <icon-l>
                                        <ReactSVG src="../assets/icons/overview.svg" />
                                    </icon-l>
                                    Overview
                                </p>
                                <p>
                                    <icon-l>
                                        <ReactSVG src="../assets/icons/chart.svg" />
                                    </icon-l>
                                    Charts
                                </p>
                            </stack-l>
                        </box-l>
                        <box-l>
                            <stack-l class="nav-drawer">
                                <p>
                                    <icon-l>
                                        <ReactSVG src="../assets/icons/documents.svg" />
                                    </icon-l>
                                    Docs
                                </p>
                                <p>
                                    <icon-l>
                                        <ReactSVG src="../assets/icons/forum.svg" />
                                    </icon-l>
                                    Contact
                                </p>
                            </stack-l>
                        </box-l>
                    </stack-l>
                </div>
                <div id="body-content-container">
                    <sidebar-l
                        side="right"
                        contentMin="0%"
                        space="var(--border-thin)"
                        sideWidth="calc(9rem + 2 * var(--s1))"
                    >
                        <sidebar-l
                            class="scroll:auto rounded-container"
                            side="right"
                            contentMin="44.5%"
                            space="var(--border-thin)"
                            sideWidth="55%"
                        >
                            <stack-l
                                class="stack-style:widget-container rounded-container"
                                space="var(--border-thin)"
                            >
                                <box-l padblock="0" style="display: flex;">
                                    <div id="action-bar">
                                        <div>
                                            <h1 style="display: flex;">
                                                Study
                                                <icon-l>
                                                    <ReactSVG src="../assets/icons/arrow_drop_down.svg" />
                                                </icon-l>
                                            </h1>
                                        </div>
                                        <input
                                            class="narrow-input"
                                            placeholder="Enter name of subject..."
                                        ></input>
                                        <ReactSVG src="../assets/icons/play.svg" />
                                        <ReactSVG src="../assets/icons/pause.svg" />
                                        <ReactSVG src="../assets/icons/stop.svg" />
                                    </div>
                                </box-l>
                                <box-l padBlock="0">
                                    <h1 style="margin-block-end: var(--s-5);">
                                        Session
                                    </h1>
                                </box-l>
                                <box-l padBlock="0">
                                    <h1>Chart: Pomodoro</h1>
                                </box-l>
                            </stack-l>
                            <box-l id="step-container" padBlock="0" padding="0">
                                <div id="step-action-bar">
                                    <h1>Steps</h1>
                                    <div style="display: flex; align-items: center;">
                                        <input
                                            class="narrow-input"
                                            placeholder="Enter next step"
                                        ></input>
                                        <ReactSVG
                                            style="padding-block-start: var(--s-3)"
                                            src="../assets/icons/next-step.svg"
                                        />
                                    </div>
                                </div>
                                <div class="step-entry:open">
                                    <switcher-l
                                        style="align-items: center"
                                        threshold="1rem"
                                        space="var(--border-thin)"
                                    >
                                        <p class="step-header">
                                            Step 4
                                            <icon-l style="margin-inline-start: var(--s2); padding-block-start: var(--s-5);">
                                                <ReactSVG
                                                    style="font-size: 2.5em; opacity: 50%;"
                                                    src="../assets/icons/add-comment.svg"
                                                />
                                            </icon-l>
                                            <icon-l>
                                                <ReactSVG
                                                    style="font-size: 2.5em"
                                                    src="../assets/icons/code-block.svg"
                                                />
                                            </icon-l>
                                            <icon-l>
                                                <ReactSVG
                                                    style="font-size: 2.5em; opacity: 50%;"
                                                    src="../assets/icons/add-link.svg"
                                                />
                                            </icon-l>
                                        </p>
                                        <div class="step-button-group">
                                            <button class="step-button-clear">
                                                Clear
                                            </button>
                                            <button class="step-button-add">
                                                Done
                                            </button>
                                        </div>
                                    </switcher-l>
                                    <textarea
                                        class="step-input"
                                        placeholder="Write code here..."
                                    ></textarea>
                                </div>
                                <div class="step-entry:closed">
                                    <p class="step-header">
                                        Step 3
                                        <icon-l style="margin-inline-start: var(--s0); padding-block-start: var(--s-5);">
                                            <ReactSVG
                                                style="font-size: 2em;"
                                                src="../assets/icons/edit.svg"
                                            />
                                        </icon-l>
                                        <icon-l>
                                            <ReactSVG
                                                style="font-size: 2em"
                                                src="../assets/icons/delete.svg"
                                            />
                                        </icon-l>
                                        <icon-l>
                                            <ReactSVG
                                                style="font-size: 2em;"
                                                src="../assets/icons/link.svg"
                                            />
                                        </icon-l>
                                    </p>
                                </div>
                                <div class="step-entry:closed">
                                    <p class="step-header">
                                        Step 2
                                        <icon-l style="margin-inline-start: var(--s0); padding-block-start: var(--s-5);">
                                            <ReactSVG
                                                style="font-size: 2em;"
                                                src="../assets/icons/edit.svg"
                                            />
                                        </icon-l>
                                        <icon-l>
                                            <ReactSVG
                                                style="font-size: 2em"
                                                src="../assets/icons/delete.svg"
                                            />
                                        </icon-l>
                                        <icon-l>
                                            <ReactSVG
                                                style="font-size: 2em;"
                                                src="../assets/icons/link.svg"
                                            />
                                        </icon-l>
                                    </p>
                                </div>
                                <div class="step-entry:open">
                                    <switcher-l
                                        style="align-items: center"
                                        threshold="1rem"
                                        space="var(--border-thin)"
                                    >
                                        <p class="step-header">
                                            Step 1
                                            <icon-l style="margin-inline-start: var(--s2); padding-block-start: var(--s-5);">
                                                <ReactSVG
                                                    style="font-size: 2.5em; opacity: 50%;"
                                                    src="../assets/icons/add-comment.svg"
                                                />
                                            </icon-l>
                                            <icon-l>
                                                <ReactSVG
                                                    style="font-size: 2.5em"
                                                    src="../assets/icons/code-block.svg"
                                                />
                                            </icon-l>
                                            <icon-l>
                                                <ReactSVG
                                                    style="font-size: 2.5em; opacity: 50%;"
                                                    src="../assets/icons/add-link.svg"
                                                />
                                            </icon-l>
                                        </p>
                                        <div class="step-button-group">
                                            <button class="step-button-delete">
                                                Delete
                                            </button>
                                            <button class="step-button-clear">
                                                Clear
                                            </button>
                                            <button class="step-button-add">
                                                Done
                                            </button>
                                        </div>
                                    </switcher-l>
                                    <textarea
                                        class="step-input"
                                        placeholder="Write code here..."
                                    ></textarea>
                                </div>
                            </box-l>
                        </sidebar-l>
                        <box-l id="timer-container">
                            <center-l andText>
                                <h1>Pomodoro</h1>
                                <stack-l
                                    style="padding-inline: var(--s0)"
                                    class="scroll:auto"
                                    space="var(--s-5)"
                                >
                                    <div>
                                        <p style="display: flex; align-items: center; margin-block-end: 0;">
                                            Break{" "}
                                            <icon-l>
                                                <ReactSVG
                                                    style="font-size: 2.4em; padding-inline-start: var(--s-3); padding-block-start: var(--s-3);"
                                                    src="../assets/icons/skip.svg"
                                                />
                                            </icon-l>
                                        </p>
                                        <p style="display: flex; align-items: center; margin-block-start: 0;">
                                            00:25 / 15:00{" "}
                                            <icon-l>
                                                <ReactSVG
                                                    style="font-size: 1.6em; padding-inline: var(--s-1); padding-block-start: var(--s-3);"
                                                    src="../assets/icons/plus-minus.svg"
                                                />
                                            </icon-l>
                                            2:00
                                        </p>
                                    </div>
                                    <p style="display: flex;">
                                        Study: 26:00
                                        <icon-l style="margin-inline: 1ch;">
                                            <ReactSVG src="../assets/icons/plus.svg" />
                                        </icon-l>
                                        1:00
                                    </p>
                                    <p style="display: flex;">
                                        Break: 12:00
                                        <icon-l style="margin-inline: 1ch;">
                                            <ReactSVG src="../assets/icons/minus.svg" />
                                        </icon-l>
                                        3:00
                                    </p>
                                    <p style="display: flex;">
                                        Break: 12:00
                                        <icon-l style="margin-inline: 1ch;">
                                            <ReactSVG src="../assets/icons/minus.svg" />
                                        </icon-l>
                                        3:00
                                    </p>
                                </stack-l>
                            </center-l>
                        </box-l>
                    </sidebar-l>
                </div>
            </sidebar-l>
        </div>
    );
};

export default App;
