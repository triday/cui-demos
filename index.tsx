import React, { ClassType } from "react";
import * as ReactDOM from "react-dom";
import { ButtonDemo } from "./button";

const demos: { [key: string]: ClassType<any, any, any> } = {
    "button": ButtonDemo
}
function renderElementToContainer(elementName: string, containerId: string = 'container') {
    let container = document.getElementById(containerId);
    let element = React.createElement(demos[elementName]);
    ReactDOM.render(element, container);
}
function createAElement(text: string): HTMLElement {
    let aNode = document.createElement('a');
    aNode.innerText = text;
    aNode.href = "javascript:;"
    aNode.addEventListener("click", (e) => {
        renderElementToContainer(text);
    })
    return aNode;
}

(function () {
    let commandsNode = document.getElementById('commands') as HTMLElement;
    Object.keys(demos).forEach(p => {
        commandsNode.appendChild(createAElement(p));
    });
})();