
const sliderTrack1 = document.querySelector(".slider_track_1");
const sliderTrack2 = document.querySelector(".slider_track_2");
const sliderTrack3 = document.querySelector(".slider_track_3");
let countDataId = 0;

let filterArray = (function(){

    let noveltyArray = [];
    let recommendedArray = [];
    let saleArray = [];
    for (let i = 0; i < ITEMS.length; i++) {
        if (ITEMS[i].type === 'new') {
            noveltyArray.push(ITEMS[i]);
        }
        if (ITEMS[i].type === 'recommended') {
            recommendedArray.push(ITEMS[i]);
        }
        if (ITEMS[i].type === 'sale') {
            saleArray.push(ITEMS[i]);
        }
    }

    for (let i = 0; i < noveltyArray.length - 1; i++) {
        for (let j = i + 1; j < noveltyArray.length; j++) {
            if (noveltyArray[i].date > noveltyArray[j].date) {
                let x = noveltyArray[i];
                noveltyArray[i] = noveltyArray[j];
                noveltyArray[j] = x;
            }
        }
    }
    for (let i = 0; i < recommendedArray.length-1; i++) {
        for (let j = i + 1; j < recommendedArray.length; j++) {
            if (recommendedArray[i].price > recommendedArray[j].price) {
                let x = recommendedArray[i];
                recommendedArray[i] = recommendedArray[j];
                recommendedArray[j] = x;
            }
        }
    }
    for (let i = 0; i < saleArray.length-1; i++) {
        for (let j = i + 1; j < saleArray.length; j++) {
            if ((saleArray[i].oldPrice - saleArray[i].price) < (saleArray[j].oldPrice - saleArray[j].price)) {
                let x = saleArray[i];
                saleArray[i] = saleArray[j];
                saleArray[j] = x;
            }
        }
    }

    return {
        novelty: noveltyArray,
        recommended: recommendedArray,
        sale: saleArray
    }
})();

//ОСНОВНЫЕ МАССИВЫ ТУТ!!!!
const noveltyArray = filterArray.novelty;
const recommendedArray = filterArray.recommended;
const saleArray = filterArray.sale;

let createElement = (array) => {
    for (let i = 0; i < array.length; i++) {
        let elementForSlider = document.createElement('div');
        elementForSlider.classList.add('slider_item');

        let topBanner = document.createElement('div');
        topBanner.classList.add('top_banner');

        let imageBanner = document.createElement("img");

        if (array[i].type.toString() === 'new')
            imageBanner.setAttribute('src', "image/Vector47.svg");
        if (array[i].type.toString() === 'sale')
            imageBanner.setAttribute('src', "image/blue_banner.svg");

        if (array[i].type.toString() !== 'recommended') {
            let typeBanner = document.createElement('p');
            let typeBannerText = document.createTextNode(array[i].type.toUpperCase());
            typeBanner.appendChild(typeBannerText);
            topBanner.appendChild(typeBanner);
        } else if (array[i].type.toString() === 'recommended') {
            imageBanner.setAttribute('src', "image/orange_banner.svg");
            let like = document.createElement('img');
            like.classList.add('like_banner');
            like.setAttribute('src', 'image/like.svg');
            topBanner.appendChild(like);
        }
        topBanner.appendChild(imageBanner);

        if (array[i].img === '' || array[i].img === undefined) {
            array[i].img = 'image/full.jpg';
        }

        let productImage = document.createElement('img');
        productImage.classList.add("main_img_product");
        productImage.setAttribute('src', array[i].img);

        let productTitle = document.createElement('a');
        productTitle.classList.add('title');
        productTitle.setAttribute('href', '#');
        let productTitleText = document.createTextNode(array[i].description);
        productTitle.appendChild(productTitleText);

        let productPrice = document.createElement('div');
        productPrice.classList.add('price');

        let txt = document.createTextNode('Цена: ');
        let productCurrentPrice = document.createElement('span');
        productCurrentPrice.classList.add('current_price');
        let currentPrice = document.createElement('b');
        let productCurrentPriceText;
        if (Object.keys(array[i]).includes('price') && (array[i].price !== undefined || array[i].price !== '')) {
            let elems = array[i].price;
            const elemsCur = array[i].currency;
            if(elemsCur === "UAH"){
                elems *=  CURRENCY_EXCHANGE.UAH;
            }
            if(elemsCur === "USD"){
                elems *= CURRENCY_EXCHANGE.USD;
            }
            if(elemsCur === "RUB"){
                elems *= CURRENCY_EXCHANGE.RUB;
            }
            if(elemsCur === "EUR"){
                elems *= CURRENCY_EXCHANGE.EUR;
            }
            productCurrentPriceText = document.createTextNode(Math.round(elems).toString() + ' ' + CURRENCY);
        } else productCurrentPriceText = document.createTextNode('Нет в наличии');

        currentPrice.appendChild(productCurrentPriceText);
        productCurrentPrice.appendChild(currentPrice);

        productPrice.appendChild(txt);
        productPrice.appendChild(productCurrentPrice);

        if (Object.keys(array[i]).includes('oldPrice')) {
            let productOldPrice = document.createElement('span');
            productOldPrice.classList.add('previous_price');
            let elems = array[i].oldPrice;
            const elemsCur = array[i].currency;
            if(elemsCur === "UAH"){
                elems *=  CURRENCY_EXCHANGE.UAH;
            }
            if(elemsCur === "USD"){
                elems *= CURRENCY_EXCHANGE.USD;
            }
            if(elemsCur === "RUB"){
                elems *= CURRENCY_EXCHANGE.RUB;
            }
            if(elemsCur === "EUR"){
                elems *= CURRENCY_EXCHANGE.EUR;
            }
            let productOldPriceText = document.createTextNode(Math.round(elems).toString());
            productOldPrice.appendChild(productOldPriceText)
            productPrice.appendChild(productOldPrice);
        }

        let buyAndMore = document.createElement('div');
        buyAndMore.classList.add('buy_and_more');
        let number = Math.random();
        number.toString(36);
        let id = number.toString(36).substr(2, 9);

        if (!Object.keys(array[i]).includes('price') ||
            array[i].price.toString() === undefined ||
            array[i].price.toString() === '') {
            let nonPrice = document.createElement('button');
            nonPrice.classList.add('button');
            let nonPriceText = document.createTextNode('Нет в наличии')
            nonPrice.appendChild(nonPriceText);
            buyAndMore.appendChild(nonPriceText);
        } else {
            let buyBtn = document.createElement('button');
            buyBtn.classList.add('btn_shop');
            buyBtn.setAttribute('id', id);
            buyBtn.setAttribute('onClick', "reply_click(this.id)");
            buyBtn.setAttribute('data-id', countDataId.toString());
            countDataId++;

            let buyImage = document.createElement('img');
            buyImage.classList.add('cart_icon');
            buyImage.setAttribute('src', 'image/Cart_icon.svg');
            buyImage.setAttribute('alt', 'cart-icon');

            let buyButtonText = document.createTextNode('Купить');

            buyBtn.appendChild(buyImage);
            buyBtn.appendChild(buyButtonText);

            buyAndMore.appendChild(buyBtn);
        }

        let more = document.createElement('a');
        more.classList.add('link_to_something');
        more.setAttribute("href", '#');
        let moreTxt = document.createTextNode("Подробнее");
        more.appendChild(moreTxt);
        buyAndMore.appendChild(more);

        elementForSlider.appendChild(topBanner);
        elementForSlider.appendChild(productImage);
        elementForSlider.appendChild(productTitle);
        elementForSlider.appendChild(productPrice);
        elementForSlider.appendChild(buyAndMore);

        if(array[i].type.toString() === 'new') {
            sliderTrack1.appendChild(elementForSlider);
        }
        if(array[i].type.toString() === 'recommended') {
            sliderTrack2.appendChild(elementForSlider);
        }
        if(array[i].type.toString() === 'sale') {
            sliderTrack3.appendChild(elementForSlider);
        }
    }
}

createElement(noveltyArray);
createElement(recommendedArray);
createElement(saleArray);

