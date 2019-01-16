import React from "react";
import * as cui from ".."

export class ButtonDemo extends React.Component<{}, {}>{
    render() {
        return <div>
            <cui.Button text="测试"></cui.Button>
            <cui.Button text="测试2"></cui.Button>
        </div>
    }
}


