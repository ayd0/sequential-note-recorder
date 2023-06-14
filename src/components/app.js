import { Component } from "preact";
import { createContext } from "preact";
import { useContext } from "preact/hooks";

import {} from "./web-components/layout-components";

import Navbar from "./workspace/Navbar";
import NavDrawer from "./workspace/NavDrawer";
// @ts-ignore
import Timer from "./workspace/Timer";
import Steps from "./workspace/steps/Steps";
import Session from "./workspace/Session";
import Chart from "./workspace/Chart";
import ActionBar from "./workspace/ActionBar";

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Navbar />
                <sidebar-l contentMin="0%" space="0" class="sidebar-style:main">
                    <div id="nav-drawer-container">
                        <NavDrawer />
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
                                    <ActionBar />
                                    <Session />
                                    <Chart />
                                </stack-l>
                                <Steps />
                            </sidebar-l>
                            <Timer />
                        </sidebar-l>
                    </div>
                </sidebar-l>
            </div>
        );
    }
}
