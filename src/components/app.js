import { Component } from "preact";
import createStore from "../store";

import {} from "./web-components/layout-components";

import Navbar from "./workspace/Navbar";
import NavDrawer from "./workspace/NavDrawer";
import Timer from "./workspace/timer/Timer";
import Steps from "./workspace/steps/Steps";
import Session from "./workspace/session/session";
import Chart from "./workspace/Chart";
import ActionBar from "./workspace/ActionBar";

export default class App extends Component {
    state = createStore();

    handleNetworkError = () => {
        if (this.state.requestCache.value.networkStatusError !== "") {
            let color = this.state.requestCache.value.networkEncounteredError
                .value
                ? "red"
                : "green";
            return (
                <center-l style={`background-color: ${color}; color: #fff`}>
                    {this.state.requestCache.value.networkStatusError}
                </center-l>
            );
        }
    };

    render() {
        return (
            <div id="app">
                {this.handleNetworkError()}
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
                                    <Session state={this.state.session} />
                                    <Chart />
                                </stack-l>
                                <Steps
                                    state={this.state.steps}
                                    shared={{ timer: this.state.timer }}
                                />
                            </sidebar-l>
                            <Timer state={this.state.timer} />
                        </sidebar-l>
                    </div>
                </sidebar-l>
            </div>
        );
    }
}
