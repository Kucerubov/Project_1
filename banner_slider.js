const sliderLine = document.querySelector(".slider_line");
const btnBottomBanner = document.querySelector(".btn_or_right_bottom");

const  unSelectedButton  = "image/Rectangle101.svg";
const  selectedButton = "image/Rectangle99.svg";

let count = 0;

for (let i = 1; i <= BANNER.length; i++){
    let findElementForBanner = BANNER.find(e=> e.order === i);
    let element = document.createElement("img");
    element.classList.add('slider_img');
    element.setAttribute('src', findElementForBanner.img.toString());
    sliderLine.appendChild(element);

    let imgElement = document.createElement("img");
    imgElement.setAttribute('data-id', i.toString());
    imgElement.setAttribute('src', unSelectedButton);
    imgElement.onclick = function (){
        count = i - 1;
        rollSlider();
    };
    btnBottomBanner.appendChild(imgElement);
}

const images = document.querySelectorAll('.slider_img_or_news .slider_line img');


let widthBanner;

function init(){
    widthBanner = document.querySelector('.slider_img_or_news').offsetWidth;
    sliderLine.style.width = widthBanner * images.length + ' px';
    images.forEach( item => {
        item.style.width = widthBanner + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector(".slider_back").addEventListener("click", function (){
    count--;
    if(count < 0){
        count = images.length - 1;
    }
    rollSlider();
})

document.querySelector(".slider_next").addEventListener("click", function (){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
})

function rollSliderInTime(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
}

function rollSlider(){
    sliderLine.style.transform = "translate(-"+count*widthBanner+"px)";
    unLightsButtons();
    lightButton(count);
}

function lightButton(count){
    let searchingElement = document.querySelector("[data-id=" + CSS.escape(count+1) + "]");
    searchingElement.setAttribute('src', selectedButton);
}

function unLightsButtons(){
    for (let i = 0; i < BANNER.length; i++){
        unLightButton(i);
    }
}

function unLightButton(a){
    let searchLightElement = document.querySelector("[data-id=" + CSS.escape(a+1) + "]");
    searchLightElement.setAttribute('src', unSelectedButton);
}

timer = setInterval(rollSliderInTime, 10000);

let div = document.querySelector(".slider_img_or_news");

div.addEventListener("mouseover", function () {
    clearInterval(timer);
});
div.addEventListener("mouseout", function () {
    timer = setInterval(rollSliderInTime, 10000);
});
