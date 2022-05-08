let positionProm = 0;

const trackProm = document.querySelector(".track-prom");
const containerProm = document.querySelector(".container_prom");
const itemProm = document.querySelector(".promotion_item");
const itemsProm = document.querySelectorAll(".promotion_item");
const btn_backProm = document.querySelector(".btn_backProm");
const btn_nextProm = document.querySelector(".btn_nextProm");
const btn_back_circleProm = document.querySelector(".btn_back_circleProm");
const btn_next_circleProm = document.querySelector(".btn_next_circleProm");
let itemWidthProm = itemProm.clientWidth + adaptWithScreen() + 4;
let movePositionProm = slidesToScroll * itemWidthProm;
const itemsCountProm = PROMOTIONS.length;
let widthItemsForContainerProm =  itemWidthProm * slidesToShow;

containerProm.style.width = `${widthItemsForContainerProm}px`;

itemsProm.forEach((itemsProm) => {
    itemsProm.style.marginRight = `${adaptWithScreen()}px`;
});

function widthContainerProm(){
    itemWidthProm = itemProm.clientWidth + adaptWithScreen() + 4;
    movePositionProm = slidesToScroll * itemWidthProm;
    widthItemsForContainerProm =  itemWidthProm * slidesToShow;
    containerProm.style.width = `${widthItemsForContainerProm}px`;
    itemsProm.forEach((itemsProm) => {
        itemsProm.style.marginRight = `${adaptWithScreen()}px`;
    });
}
window.addEventListener('resize',widthContainerProm);

btn_next_circleProm.addEventListener('click',function (){slideNextProm(btn_next_circleProm, btn_back_circleProm)});
btn_nextProm.addEventListener('click',function (){slideNextProm(btn_nextProm, btn_backProm)});
btn_back_circleProm.addEventListener('click', function (){slideBackProm(btn_next_circleProm, btn_back_circleProm)});
btn_backProm.addEventListener('click', function (){slideBackProm(btn_nextProm, btn_backProm)});

function slideNextProm(btnN, btnB){
    const itemsLeft = itemsCountProm -  (Math.abs(positionProm) + slidesToShow * itemWidthProm) / itemWidthProm;
    positionProm -= itemsLeft > slidesToScroll ? movePositionProm : itemsLeft * itemWidthProm;
    checkButtonsProm(btnN, btnB);
    setPositionProm();
}
function slideBackProm(btnN, btnB){
    const itemsLeft = Math.abs(positionProm) / itemWidthProm;
    positionProm += itemsLeft > slidesToScroll ? movePositionProm : itemsLeft * itemWidthProm;
    checkButtonsProm(btnN, btnB);
    setPositionProm();
}

const setPositionProm = () =>{
    trackProm.style.transform = `translateX(${positionProm}px)`
}

const checkButtonsProm = (btnN, btnB) =>{
    if(positionProm === 0){
        btn_backProm.style.visibility = `hidden`;
    }else {btn_backProm.style.visibility = `visible`;}

    if(positionProm <=  -(itemsCountProm - slidesToShow) * itemWidthProm){
        btn_nextProm.style.visibility = `hidden`;
    }else{btn_nextProm.style.visibility = `visible`;}

    btnB.disabled = positionProm === 0;
    btnN.disabled = positionProm <=  -(itemsCountProm - slidesToShow) * itemWidthProm;
}

checkButtonsProm(btn_nextProm, btn_backProm);