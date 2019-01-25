import React, { ClassType } from "react";
import * as ReactDOM from "react-dom";
import { ButtonDemo } from "./button";
import { ButtonGroupDemo } from "./buttongroup";
import {LightTipDemo } from "./lighttip";
const demos: { [key: string]: ClassType<any, any, any> } = {
    "按钮": ButtonDemo,
    "按钮组": ButtonGroupDemo,
    "提示":LightTipDemo
};

(function ():void {
    function renderElementToContainer(elementName: string, containerId: string = "container"):void {
        let container:HTMLElement = document.getElementById(containerId) as HTMLElement;
        let element:JSX.Element = React.createElement(demos[elementName]);
        ReactDOM.render(element, container);
    }
    function createAElement(text: string): HTMLElement {
        let aNode:HTMLAnchorElement = document.createElement("a");
        aNode.innerText = text;
        aNode.href = "javascript:;";
        aNode.addEventListener("click", (e) => {
            renderElementToContainer(text);
        });
        return aNode;
    }

    let commandsNode:HTMLElement = document.getElementById("commands") as HTMLElement;
    Object.keys(demos).forEach(p => {
        commandsNode.appendChild(createAElement(p));
    });
})();