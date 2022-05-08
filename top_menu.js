let elementUl = document.querySelector('.directory');

//generation top main menu
for (const [key, value] of Object.entries(TOP_MENU)) {
    let testSubmenu = `${value.submenu}`;
    let elementTitle = `${value.title}`;
    let titleText = document.createTextNode(elementTitle);
    let containerElement = document.createElement("li");
    let linkElement = document.createElement("a");
    let imageElement = document.createElement("img");
    let listElement = document.createElement("ul");
    if (`${value.url}` === "undefined") {
        linkElement.setAttribute("href", "#");
    } else {
        linkElement.setAttribute("href", `${value.url}`);
    }
    linkElement.classList.add(`${key}`);
    if (!(testSubmenu === "undefined")) {
        imageElement.setAttribute("src", "img/Vector%201.svg");
        imageElement.setAttribute("alt", `${key.toString()}`);
        listElement.classList.add("menu-" + `${key.toString()}`);
        listElement.setAttribute("id", "menu-" + `${key}`);
    }
    linkElement.appendChild(titleText);
    linkElement.appendChild(imageElement);
    containerElement.appendChild(linkElement);
    containerElement.appendChild(listElement);
    elementUl.appendChild(containerElement);
}

//generation submenu
for (const [key, value] of Object.entries(TOP_MENU)) {
    if (`${value.submenu}` !== "undefined") {
        let containerItems = document.querySelector("[class=" + "menu-" + `${key}` + "]");
        for (let i = 0; i < `${value.submenu.length}`; i++) {
            let elementLi = document.createElement("li");
            let submenuLinkElement = document.createElement("a");
            let text = document.createTextNode(`${value.submenu[i].title}`);
            submenuLinkElement.setAttribute('href', `${value.submenu[i].url}`);
            submenuLinkElement.classList.add("submenuItems");
            submenuLinkElement.appendChild(text);
            elementLi.appendChild(submenuLinkElement);
            containerItems.appendChild(elementLi);
        }

    }
}

window.addEventListener("click", function (event) {
    for (const [key, value] of Object.entries(TOP_MENU)) {
        if (`${value.submenu}` !== "undefined") {
            let objectWithSubmenu = document.getElementsByClassName(`${key.toString()}`)[0];
            if (objectWithSubmenu === event.target) {
                if (document.getElementById("menu-" + `${key.toString()}`).style.display === "none") {
                    document.getElementById("menu-" + `${key.toString()}`).style.display = "block";
                } else {
                    document.getElementById("menu-" + `${key.toString()}`).style.display = "none";
                }

            }
            if (!(objectWithSubmenu === e.target)) {
                document.getElementById("menu-" + `${key.toString()}`).style.display = "none";
            }
        }
    }
});

let submenuItemsOnMouseChangingColor = document.querySelector(".directory");
submenuItemsOnMouseChangingColor.onmouseover = submenuItemsOnMouseChangingColor.onmouseout = submenuItemsOnMouseChangingColor.onmousemove = handler;

//change color of element via click
function handler(event) {
    if (event.target.getAttribute("class") === "submenuItems" && event.type === "mousemove"){
        event.target.style.color = "#FE5815";
    }else if(event.target.getAttribute("class") === "submenuItems" && event.type === "mouseout"){
        event.target.style.color = "#FFFFFF";
    }
}