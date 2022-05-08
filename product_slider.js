function adaptWithScreen(){
   let widthAdapt = window.screen.width;
   let width = 0;
   if(widthAdapt > 1440){
       width = 50;
   }
   if(widthAdapt <= 1440){
       width = 20;
   }
   if(widthAdapt <= 1110){
       width = 1;
   }
   return width;

}

window.addEventListener('resize',adaptWithScreen);

let position = 0;
let slidesToShow = 4;
const slidesToScroll = 1;

window.addEventListener('resize', resizeSlidesToShow);

function resizeSlidesToShow (){
    const widthProdSlide = window.screen.width;
    if(widthProdSlide < 980){
        slidesToShow = 3;
    }
    if(widthProdSlide < 750){
        slidesToShow = 1;
    }
    if (widthProdSlide > 980){
        slidesToShow = 4;
    }
}
resizeSlidesToShow();

window.addEventListener('resize', resizeSlidesToShow);

const track1 = document.querySelector(".slider_track_1");
const track2 = document.querySelector(".slider_track_2");
const track3 = document.querySelector(".slider_track_3");

const container = document.querySelector(".slider_container");
const container2 = document.querySelector(".slider_container_2");
const container3 = document.querySelector(".slider_container_3");
const item = document.querySelector(".slider_item");
const items = document.querySelectorAll(".slider_item");

const btn_back = document.querySelector(".btn_back");
const btn_next = document.querySelector(".btn_next");
const btn_back_circle = document.querySelector(".btn_back_circle");
const btn_next_circle = document.querySelector(".btn_next_circle");

const btn_back_1 = document.querySelector(".btn_back_1");
const btn_next_1 = document.querySelector(".btn_next_1");
const btn_back_circle_1 = document.querySelector(".btn_back_circle_1");
const btn_next_circle_1 = document.querySelector(".btn_next_circle_1");

const btn_back_2 = document.querySelector(".btn_back_2");
const btn_next_2 = document.querySelector(".btn_next_2");
const btn_back_circle_2 = document.querySelector(".btn_back_circle_2");
const btn_next_circle_2 = document.querySelector(".btn_next_circle_2");

let itemWidth = item.clientWidth + adaptWithScreen() + 4;
let widthItemsForContainer = itemWidth * slidesToShow;

let movePosition = slidesToScroll * itemWidth;
const itemsCount1 = noveltyArray.length;
const itemsCount2 = recommendedArray.length;
const itemsCount3 = saleArray.length;

container.style.width = `${widthItemsForContainer}px`;
container2.style.width = `${widthItemsForContainer}px`;
container3.style.width = `${widthItemsForContainer}px`;

items.forEach((items) => {
    items.style.marginRight = `${adaptWithScreen()}px`;
});

function widthContainer(){
    itemWidth = item.clientWidth + adaptWithScreen() + 4;
    movePosition = slidesToScroll * itemWidth;
    widthItemsForContainer = itemWidth * slidesToShow;
    container.style.width = `${widthItemsForContainer}px`;
    container2.style.width = `${widthItemsForContainer}px`;
    container3.style.width = `${widthItemsForContainer}px`;

    document.querySelector(".red-block").style.marginRight = `${adaptWithScreen()}px`;

        items.forEach((items) => {
        items.style.marginRight = `${adaptWithScreen()}px`;
    });
    if(window.screen.width < 1114){
        items.forEach((items) => {
            items.style.padding = `${29}px`;
        });
    }
}


window.addEventListener('resize',widthContainer );

btn_next_circle.addEventListener('click',function (){slideNext(itemsCount1, track1, btn_next_circle, btn_back_circle)});
btn_next.addEventListener('click',function (){slideNext(itemsCount1, track1, btn_next, btn_back)});
btn_back_circle.addEventListener('click', function (){slideBack(itemsCount1, track1, btn_next_circle, btn_back_circle)});
btn_back.addEventListener('click', function (){slideBack(itemsCount1, track1, btn_next, btn_back)});

btn_next_circle_1.addEventListener('click',function (){slideNext(itemsCount2, track2, btn_next_circle_1, btn_back_circle_1)});
btn_next_1.addEventListener('click',function (){slideNext(itemsCount2, track2, btn_next_1, btn_back_1)});
btn_back_circle_1.addEventListener('click', function (){slideBack(itemsCount2, track2, btn_next_circle_1, btn_back_circle_1)});
btn_back_1.addEventListener('click', function (){slideBack(itemsCount2, track2, btn_next_1, btn_back_1)});

btn_next_circle_2.addEventListener('click',function (){slideNext(itemsCount3, track3, btn_next_circle_2, btn_back_circle_2)});
btn_next_2.addEventListener('click',function (){slideNext(itemsCount3, track3, btn_next_2, btn_back_2)});
btn_back_circle_2.addEventListener('click', function (){slideBack(itemsCount3, track3, btn_next_circle_2, btn_back_circle_2)});
btn_back_2.addEventListener('click', function (){slideBack(itemsCount3, track3, btn_next_2, btn_back_2)});


function slideNext(itemsCount, track, btnN, btnB){
    const itemsLeft = itemsCount -  (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft > slidesToScroll ? movePosition : itemsLeft * itemWidth;
    checkButtons(itemsCount, btnN, btnB);
    setPosition(track);
    checkVisibleButtons(itemsCount, btnN, btnB);
}
function slideBack(itemsCount, track, btnN, btnB){
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft > slidesToScroll ? movePosition : itemsLeft * itemWidth;
    checkButtons(itemsCount, btnN, btnB);
    setPosition(track);
    checkVisibleButtons(itemsCount, btnN, btnB);
}

const setPosition = (track) =>{
    track.style.transform = `translateX(${position}px)`
}

const checkButtons = (itemsCount, btnN, btnB) =>{

    btnB.disabled = position === 0;
    btnN.disabled = position <=  -(itemsCount - slidesToShow) * itemWidth;
}

const checkVisibleButtons = (itemsCount, btnN, btnB) => {
    if(position === 0){
        btnB.style.visibility = `hidden`;
    }else {btnB.style.visibility = `visible`;}

    if(position <=  -(itemsCount - slidesToShow) * itemWidth){
        btnN.style.visibility = `hidden`;
    }else{btnN.style.visibility = `visible`;}
}

checkVisibleButtons(itemsCount1, btn_next, btn_back);
checkVisibleButtons(itemsCount2, btn_next_1, btn_back_1);
checkVisibleButtons(itemsCount3, btn_next_2, btn_back_2);