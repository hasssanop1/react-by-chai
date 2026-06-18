function customRender(reactElement, container) {
    //    -->version 1 of code <--
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    //  <-- version 2 of code  -->
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

// how react sees the element you created how it checks i mean to say when it compiles how he sees it
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "click me to visit google",
};
//prop stand for properties it is an object and it is your wish how much properties you wanna add

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
