import React from "react";
import * as cui from ".."

export class ButtonDemo extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <h2>大按钮</h2>
                <cui.ButtonList>
                    <cui.Button text="测试" click={() => cui.Dialog.showInfo('测试1')} ></cui.Button>
                    <cui.Button text="测试2" click={() => alert(2)} ></cui.Button>
                </cui.ButtonList>
                <h2>中等按钮</h2>
                <cui.ButtonList>
                    <cui.Button text="测试" click={() => cui.Dialog.showInfo('测试1')} ></cui.Button>
                    <cui.Button text="测试2" click={() => alert(2)} ></cui.Button>
                </cui.ButtonList>
                <h2>小按钮</h2>
                <cui.ButtonList>
                    <cui.Button text="测试" click={() => cui.Dialog.showInfo('测试1')} ></cui.Button>
                    <cui.Button text="测试2" click={() => alert(2)} ></cui.Button>
                </cui.ButtonList>
            </div>

        )
    }
}


