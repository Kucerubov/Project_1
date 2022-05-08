
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const elementMobileTop = document.querySelector(".dropdown-content");

for (const [key, value] of Object.entries(TOP_MENU)) {
    const testSubmenuMob = `${value.submenu}`;
    const titleTextMobMob = document.createTextNode(value.title);
    const containerElementMob = document.createElement("li");
    const linkElementMob = document.createElement("a");
    const imageElementMob = document.createElement("img");
    const listElementMob = document.createElement("ul");
    if (`${value.url}` === "undefined") {
        linkElementMob.setAttribute("href", "#");
    } else {
        linkElementMob.setAttribute("href", `${value.url}`);
    }
    linkElementMob.classList.add(`${key}`);
    if (!(testSubmenuMob === "undefined")) {
        imageElementMob.setAttribute("src", "image/Vector_1.svg");
        imageElementMob.setAttribute("alt", `${key.toString()}`);
        listElementMob.classList.add("menu-" + `${key.toString()}` + 'mob');
        listElementMob.setAttribute("id", "menu-" + `${key}` + "mob");
    }
    linkElementMob.appendChild(titleTextMobMob);
    linkElementMob.appendChild(imageElementMob);
    containerElementMob.appendChild(linkElementMob);
    containerElementMob.appendChild(listElementMob);
    elementMobileTop.appendChild(containerElementMob);
}

for (const [key, value] of Object.entries(TOP_MENU)) {
    if (`${value.submenu}` !== "undefined") {
        const containerItemsMob = document.querySelector("[class=" + "menu-" + `${key}` + "mob" + "]");
        for (let i = 0; i < `${value.submenu.length}`; i++) {
            const elementLiMob = document.createElement("li");
            const elementAMob = document.createElement("a");
            const text = document.createTextNode(`${value.submenu[i].title}`);
            elementAMob.setAttribute('href', `${value.submenu[i].url}`);
            elementAMob.classList.add("submenu-items");
            elementAMob.appendChild(text);
            elementLiMob.appendChild(elementAMob);
            containerItemsMob.appendChild(elementLiMob);
        }
    }
}

window.addEventListener("click", function (event) {
    for (const [key, value] of Object.entries(TOP_MENU)) {
        if (`${value.submenu}` !== "undefined") {
            let objectWithSubmenu = document.getElementsByClassName(`${key.toString()}`)[0];
            if (objectWithSubmenu === event.target) {
                if (document.getElementById("menu-" + `${key.toString()}` + "mob").style.display === "none") {
                    document.getElementById("menu-" + `${key.toString()}` + "mob").style.display = "block";
                } else {
                    document.getElementById("menu-" + `${key.toString()}` + "mob").style.display = "none";
                }
            }
            if (!(objectWithSubmenu === event.target)) {
                document.getElementById("menu-" + `${key.toString()}` + "mob").style.display = "none";
            }
        }
    }
});