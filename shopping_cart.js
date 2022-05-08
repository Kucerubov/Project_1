
const newAllMass = noveltyArray.concat(recommendedArray).concat(saleArray);
const countBuyItems = document.querySelector(".count_buy_items");
const priceItems = document.querySelector(".price_items");
const countItemsMob = document.querySelector(".count_items_top_car");
let countItems = 0;
let sumPrice = 0;
let price = 0;

allPriceItem(price);

function  allPriceItem(price){
    sumPrice += Math.round(price);
    priceItems.innerText = " / " + sumPrice + ' '+ CURRENCY + '.';
}

function buyItems(){
    countItems++;
    countBuyItems.innerText = countItems;
    countItemsMob.innerText = countItems;
}



function reply_click(clicked_id)
{
    const buttonCliked = document.getElementById(clicked_id);
    const dataIdBtn = buttonCliked.dataset.id;
    buyItems();
    for(let i = 0; i < newAllMass.length; i++){
        if(i === +dataIdBtn){
            let elems = newAllMass[i].price;
            const elemsCur = newAllMass[i].currency;
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
            allPriceItem(elems);
        }
    }
}

