const buyingRightTrack = document.querySelector(".buying_right_track");
const buyingCount = BUYING_RIGHT_NOW.length;

for (let i = 0; i < buyingCount; i++){
    const divForImg = document.createElement("div");
    divForImg.classList.add("buying_item");
    const img = document.createElement("img");

    if (!Object.keys(BUYING_RIGHT_NOW[i]).includes('img') ||
        BUYING_RIGHT_NOW[i].img.toString() === undefined ||
        BUYING_RIGHT_NOW[i].img.toString() === '') {
        img.setAttribute("src", 'image/full.jpg')
    } else{
        img.setAttribute("src", BUYING_RIGHT_NOW[i].img);
    }
    img.classList.add("img_buying");
    divForImg.appendChild(img);
    let more = document.createElement('a');
    more.classList.add('link_to_something');
    more.setAttribute("href", BUYING_RIGHT_NOW[i].title);
    let moreTxt = document.createTextNode(BUYING_RIGHT_NOW[i].url);
    more.appendChild(moreTxt);
    divForImg.appendChild(more);
    buyingRightTrack.appendChild(divForImg);
}

let positionBuying = 0;

const trackBuying = document.querySelector(".buying_right_track");
const containerBuying = document.querySelector(".buying_right_container");
const itemBuying = document.querySelector(".buying_item");
const itemsBuying = document.querySelectorAll(".buying_item");
const btn_backBuying = document.querySelector(".btn_backBuying");
const btn_nextBuying = document.querySelector(".btn_nextBuying");
const btn_back_circleBuying = document.querySelector(".btn_back_circleBuying");
const btn_next_circleBuying = document.querySelector(".btn_next_circleBuying");
let itemWidthBuying = itemBuying.clientWidth + adaptWithScreen();
let movePositionBuying = slidesToScroll * itemWidthBuying;
let widthItemsForContainerBuying =  itemWidthBuying * slidesToShow;

containerBuying.style.width = `${widthItemsForContainerBuying}px`;

itemsBuying.forEach((itemsBuying) => {
    itemsBuying.style.marginRight = `${adaptWithScreen()}px`;
});

function widthContainerBuying(){
    itemWidthBuying = itemBuying.clientWidth + adaptWithScreen();
    movePositionBuying = slidesToScroll * itemWidthBuying;
    widthItemsForContainerBuying =  itemWidthBuying * slidesToShow;
    containerBuying.style.width = `${widthItemsForContainerBuying}px`;
    itemsBuying.forEach((itemsBuying) => {
        itemsBuying.style.marginRight = `${adaptWithScreen()}px`;
    });
}
window.addEventListener('resize',widthContainerBuying);

btn_next_circleBuying.addEventListener('click',function (){slideNextBuying(btn_next_circleBuying, btn_back_circleBuying)});
btn_nextBuying.addEventListener('click',function (){slideNextBuying(btn_nextBuying, btn_backBuying)});
btn_back_circleBuying.addEventListener('click', function (){slideBackBuying(btn_next_circleBuying, btn_back_circleBuying)});
btn_backBuying.addEventListener('click', function (){slideBackBuying(btn_nextBuying, btn_backBuying)});

function slideNextBuying(btnN, btnB){
    const itemsLeft = buyingCount -  (Math.abs(positionBuying) + slidesToShow * itemWidthBuying) / itemWidthBuying;
    positionBuying -= itemsLeft > slidesToScroll ? movePositionBuying : itemsLeft * itemWidthBuying;
    checkButtonsBuying(btnN, btnB);
    setPositionBuying();
}
function slideBackBuying(btnN, btnB){
    const itemsLeft = Math.abs(positionBuying) / itemWidthBuying;
    positionBuying += itemsLeft > slidesToScroll ? movePositionBuying : itemsLeft * itemWidthBuying;
    checkButtonsBuying(btnN, btnB);
    setPositionBuying();
}

const setPositionBuying = () =>{
    trackBuying.style.transform = `translateX(${positionBuying}px)`
}

const checkButtonsBuying = (btnN, btnB) =>{
    if(positionBuying === 0){
        btn_backBuying.style.visibility = `hidden`;
    }else {btn_backBuying.style.visibility = `visible`;}

    if(positionBuying <=  -(buyingCount - slidesToShow) * itemWidthBuying){
        btn_nextBuying.style.visibility = `hidden`;
    }else{btn_nextBuying.style.visibility = `visible`;}


    btnB.disabled = positionBuying === 0;
    btnN.disabled = positionBuying <=  -(buyingCount - slidesToShow) * itemWidthBuying;
}


checkButtonsBuying(btn_nextBuying, btn_backBuying);