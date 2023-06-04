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
                            <input type="text" placeholder="Search"></input>
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
                        <box-l>
                            <stack-l>Test</stack-l>
                        </box-l>
                        <box-l>
                            <stack-l></stack-l>
                        </box-l>
                    </stack-l>
                </div>
                <div id="body-content-container">
                    <sidebar-l
                        side="right"
                        contentMin="0%"
                        space="var(--border-thin)"
                        sideWidth="calc(10rem + 2 * var(--s1))"
                    >
                        <sidebar-l
                            class="scroll:auto rounded-container"
                            side="right"
                            contentMin="47.5%"
                            space="var(--border-thin)"
                            sideWidth="43%"
                        >
                            <stack-l
                                class="stack-style:widget-container rounded-container"
                                space="var(--border-thin)"
                            >
                                <box-l padBlock="0" style="display: flex;">
                                    <h1>Study</h1>
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
                            <box-l padBlock="0" style="flex-grow: 1">
                                <h1>Steps</h1>
                            </box-l>
                        </sidebar-l>
                        <box-l id="timer-container">
                            <center-l andText>
                                <h1>Pomodoro</h1>
                                <stack-l class="scroll:auto"></stack-l>
                            </center-l>
                        </box-l>
                    </sidebar-l>
                </div>
            </sidebar-l>
        </div>
    );
};

export default App;
