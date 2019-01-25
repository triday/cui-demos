import React from "react";
import * as cui from ".."
import * as core from "../core";
export class LightTipDemo extends React.Component<{}, {}>{
    render() {
        return (
            <cui.ButtonGroup>

                <cui.Button text="成功" Kind={core.ButtonKind.Primary}  click={() => cui.LightTip.Success('这是一条成功的消息..')} ></cui.Button>


                <cui.Button text="失败" Kind={core.ButtonKind.Danger} click={() => cui.LightTip.Error('这是一条失败的消息..')} ></cui.Button>

            </cui.ButtonGroup>
        )
    }
}


