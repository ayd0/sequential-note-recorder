import { Component } from "preact";
import { ReactSVG } from "react-svg";

export default class Navbar extends Component {
    render() {
        return (
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
        );
    }
}
