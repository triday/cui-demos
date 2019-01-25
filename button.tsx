import React from "react";
import * as cui from ".."

export class ButtonDemo extends React.Component<{}, {}>{
    render() {
        return (
            <ul>
                <li>
                    <cui.Button text="测试" click={() => cui.Dialog.showInfo('测试1')} ></cui.Button>
                </li>
                <li>
                    <cui.Button text="测试2" click={() => alert(2)} ></cui.Button>
                </li>
            </ul>
        )
    }
}


