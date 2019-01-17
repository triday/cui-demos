import React from "react";
import * as cui from ".."

export class ButtonGroupDemo extends React.Component<{}, {}>{
    render() {
        return <cui.ButtonGroup>
            <cui.Button text="abc"></cui.Button>
            <cui.Button text="bcd"></cui.Button>
            <cui.Button text="cde"></cui.Button>
        </cui.ButtonGroup>
    }
}
