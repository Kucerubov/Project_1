
const sliderInner = document.querySelector(".slider-inner");

for (let i = 0; i < MENU.length; i++) {

    let menuItem = document.createElement('button');

    if (MENU[i].order.toString() === '1') {
        menuItem.classList.add('orange_btn_start');
    }else if(i === MENU.length - 1){
        menuItem.classList.add('orange_btn_end');
    }else {menuItem.classList.add('orange_btn');}

    let menuItemText = document.createTextNode(MENU[i].title.toString());
    menuItem.appendChild(menuItemText);

    sliderInner.appendChild(menuItem);
}

const elementBtnGroup = document.querySelectorAll(".orange_btn");
let countElems = 1;
let elementMass = [];
elementMass[0] = document.querySelector(".orange_btn_start").clientWidth;
elementMass[MENU.length - 1] = document.querySelector(".orange_btn_end").clientWidth + 4;

elementBtnGroup.forEach((items) => {
    elementMass[countElems] = items.clientWidth + 3;
    countElems++;
});

let numberOfFunctionCalls = 0;
let positionBtnGroup = 0;
const slidesToShowMob = 10;
const containerBtnGroup = document.querySelector(".slider");
const btn_backBtnGroup = document.querySelector(".back_slider");
const btn_nextBtnGroup = document.querySelector(".next_slider");

let widthItemsForContainerBtnGroup = 0;

for(let i = 0; i < 10; i++){
    widthItemsForContainerBtnGroup += elementMass[i];
}

containerBtnGroup.style.width = `${widthItemsForContainerBtnGroup}px`;

btn_nextBtnGroup.addEventListener('click',function (){
    if(elementMass[slidesToShowMob+numberOfFunctionCalls]){
        positionBtnGroup -= elementMass[slidesToShowMob+numberOfFunctionCalls];
        numberOfFunctionCalls++;
    }
    checkButtonsBtnGroup();
    setPositionBtnGroup();
});
btn_backBtnGroup.addEventListener('click', function (){
    if(elementMass[slidesToShowMob + numberOfFunctionCalls -1]){
        positionBtnGroup += elementMass[slidesToShowMob + numberOfFunctionCalls -1];
        numberOfFunctionCalls--;
    }
    checkButtonsBtnGroup();
    setPositionBtnGroup();
});

const setPositionBtnGroup = () =>{
    sliderInner.style.transform = `translateX(${positionBtnGroup}px)`
}

const checkButtonsBtnGroup = () =>{
    if(positionBtnGroup === 0){
        btn_backBtnGroup.style.display = `none`;
    }else {btn_backBtnGroup.style.display = `block`;}

    if((numberOfFunctionCalls + slidesToShowMob) === MENU.length){
        btn_nextBtnGroup.style.display = `none`;
    }else{btn_nextBtnGroup.style.display = `block`;}

    btn_backBtnGroup.disabled = positionBtnGroup === 0;
    btn_nextBtnGroup.disabled = (numberOfFunctionCalls + slidesToShowMob) === MENU.length;

}
checkButtonsBtnGroup();