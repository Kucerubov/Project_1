
const elementUl = document.querySelector(".directory");

if(window.screen.width > 1440){

for (const [key, value] of Object.entries(TOP_MENU)) {
    let testSubmenu = `${value.submenu}`;
    let titleText = document.createTextNode(value.title);
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
        imageElement.setAttribute("src", "image/Vector_1.svg");
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

for (const [key, value] of Object.entries(TOP_MENU)) {
    if (`${value.submenu}` !== "undefined") {
        let containerItems = document.querySelector("[class=" + "menu-" + `${key}` + "]");
        for (let i = 0; i < `${value.submenu.length}`; i++) {
            let elementLi = document.createElement("li");
            let elementA = document.createElement("a");
            let text = document.createTextNode(`${value.submenu[i].title}`);
            elementA.setAttribute('href', `${value.submenu[i].url}`);
            elementA.classList.add("submenu-items");
            elementA.appendChild(text);
            elementLi.appendChild(elementA);
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
                if (!(objectWithSubmenu === event.target)) {
                    document.getElementById("menu-" + `${key.toString()}`).style.display = "none";
                }
            }
        }
    });
}
