import { ReactSVG } from "react-svg";

const NavDrawer = () => {
    return (
        <stack-l class="stack-style:nav-drawer" space="var(--border-thin)">
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
    );
};

export default NavDrawer;