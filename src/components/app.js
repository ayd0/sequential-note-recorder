import { Router } from "preact-router";

import {} from "./web-components/layout-components";

const App = () => {
    return (
        <div id="app">
            <switcher-l space="var(--border-thin);">
                <box-l class="box-style:nav" padding="var(--s-5)">
                    <h2>1</h2>
                </box-l>
                <box-l class="box-style:nav" padding="var(--s-5)">
                    <h2>2</h2>
                </box-l>
            </switcher-l>
            <sidebar-l contentMin="0%" space="0" class="sidebar-style:main">
                <div id="nav-drawer-container">
                    <stack-l
                        class="stack-style:nav-drawer"
                        space="var(--border-thin)"
                    >
                        <box-l>
                            <stack-l>
                                <h4>Test</h4>
                            </stack-l>
                        </box-l>
                        <box-l>
                            <stack-l>
                                <h4>Test</h4>
                            </stack-l>
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
                            class="scroll:auto"
                            side="right"
                            contentMin="47.5%"
                            space="var(--border-thin)"
                            sideWidth="43%"
                        >
                            <stack-l
                                class="stack-style:widget-container"
                                space="var(--border-thin)"
                            >
                                <box-l></box-l>
                                <box-l></box-l>
                                <box-l></box-l>
                            </stack-l>
                            <box-l style="padding-block: 0; flex-grow: 1">
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
