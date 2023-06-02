import { Router } from "preact-router";

import {} from "./web-components/layout-components";

const App = () => {
    return (
        <div id="app" style="display: flex; flex-flow: column;">
            <switcher-l space="var(--border-thin);">
                <box-l padding="var(--s-5)" style="height: var(--nav-height)">
                    <h2>1</h2>
                </box-l>
                <box-l padding="var(--s-5)" style="height: var(--nav-height)">
                    <h2>2</h2>
                </box-l>
            </switcher-l>
            <sidebar-l
                contentMin="0%"
                space="0"
                style="height: calc(100% - var(--nav-height) - .8ch); margin-block-start: var(--border-thin)"
            >
                <div style="height: 100%; display: flex;">
                    <stack-l space="var(--border-thin)">
                        <box-l style="flex-grow: 1; width: 10rem;">
                            <stack-l>
                                <h4>Test</h4>
                            </stack-l>
                        </box-l>
                        <box-l style="flex-grow: 1;">
                            <stack-l>
                                <h4>Test</h4>
                            </stack-l>
                        </box-l>
                    </stack-l>
                </div>
                <div style="height: calc(100% - var(--s1) * 2); margin: var(--s1);">
                    <sidebar-l
                        side="right"
                        contentMin="0%"
                        space="var(--border-thin)"
                        sideWidth="calc(10rem + 2 * var(--s1))"
                        style="height: 100%;"
                    >
                        <sidebar-l
                            side="right"
                            contentMin="47.5%"
                            space="var(--border-thin)"
                            sideWidth="43%"
                            style="height: 100%; overflow-y: auto;"
                        >
                            <stack-l
                                space="var(--border-thin)"
                                style="display: flex; flex-flow: column; overflow: hidden;"
                            >
                                <box-l></box-l>
                                <box-l style="flex-grow: 1"></box-l>
                                <box-l style="flex-grow: 1"></box-l>
                            </stack-l>
                            <box-l style="padding-block: 0; flex-grow: 1">
                                <h1>Steps</h1>
                            </box-l>
                        </sidebar-l>
                        <box-l
                            class="timer-container"
                            style="height: 100%; padding-block: 0; overflow: hidden; padding-inline: 0;"
                        >
                            <center-l andText style="height: 100%">
                                <h1>Pomodoro</h1>
                                <stack-l style="height: 100%; overflow-y: auto;"></stack-l>
                            </center-l>
                        </box-l>
                    </sidebar-l>
                </div>
            </sidebar-l>
        </div>
    );
};

export default App;
