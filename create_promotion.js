let promotionsColumn = document.querySelector('.track-prom');

let toInteger = (str) => {
    return str.replace(/[a-zа-яё]/gi, '');
}

let timerCreation = (str, timerElement) => {
    if (str < 10) {
        let zeroDiv = document.createElement('div');
        let zeroDivText = document.createTextNode('0');
        zeroDiv.appendChild(zeroDivText);

        let numDiv = document.createElement('div');
        let hoursDivText = document.createTextNode(str);
        numDiv.appendChild(hoursDivText);

        timerElement.appendChild(zeroDiv);
        timerElement.appendChild(numDiv);
    } else if (str >= 10) {
        let firstNumDiv = document.createElement('div');
        let firstNumDivText = document.createTextNode(str.substring(0,1));
        firstNumDiv.appendChild(firstNumDivText);

        let secondNumDiv = document.createElement('div');
        let secondNumDivText = document.createTextNode(str.substring(1,2));
        secondNumDiv.appendChild(secondNumDivText);

        timerElement.appendChild(firstNumDiv);
        timerElement.appendChild(secondNumDiv);
    }
}

for (let i = 0; i < PROMOTIONS.length; i++) {
    let promotion = PROMOTIONS[i];
    const promotionItem = document.createElement('div');
    promotionItem.classList.add("promotion_item");
    let promotionTitle = document.createElement('a');
    promotionTitle.classList.toggle("title_promotion");
    let promotionTitleText = document.createTextNode(promotion.title.toString());
    promotionTitle.appendChild(promotionTitleText);
    let promotionImage = document.createElement('img');

    if (!Object.keys(promotion).includes('img') ||
        promotion.img.toString() === undefined ||
        promotion.img.toString() === '') {
        promotionImage.setAttribute('src', 'image/full.jpg');
    } else promotionImage.setAttribute('src', promotion.img.toString());

    let promotionText = document.createElement('p');
    promotionText.classList.toggle('txt_bottom_img');
    let promotionTextText = document.createTextNode(promotion.description);
    promotionText.appendChild(promotionTextText);

    let timerBorder = document.createElement('div');
    timerBorder.classList.add('border_of_timer');

    //childes of timer
    let timerText = document.createElement("div");
    timerText.classList.toggle('text_timer');
    let timerTextText = document.createTextNode("Срок \n действия: ");
    timerText.appendChild(timerTextText);
    timerBorder.appendChild(timerText);

    if (Object.keys(promotion).includes('time_action') ) {

        let textAndTimer = document.createElement('div');
        textAndTimer.classList.add('timer_and_text');
        //childes of textAndTimer
        let timerElement = document.createElement('div');
        timerElement.classList.add('timer');

        let str1 = promotion.time_action.substring(0, 2); // дни
        let str2 = promotion.time_action.substring(3, 5); // часы
        let str3 = promotion.time_action.substring(6, 9); // минуты

        let twoPoints1 = document.createElement('div');
        let twoPoints2 = document.createElement('div');
        twoPoints1.classList.add('two_points');
        twoPoints2.classList.add('two_points');
        let twoPointsText1 = document.createTextNode(':');
        let twoPointsText2 = document.createTextNode(':');
        twoPoints1.appendChild(twoPointsText1);
        twoPoints2.appendChild(twoPointsText2);

        if (isNaN(+str1)) str1 = toInteger(str1);
        if (isNaN(+str2)) str2 = toInteger(str2);
        if (isNaN(+str3)) str3 = toInteger(str3);

        timerCreation(str1, timerElement);
        timerElement.appendChild(twoPoints1);
        timerCreation(str2, timerElement);
        timerElement.appendChild(twoPoints2);
        timerCreation(str3, timerElement);

        let timerBottomText = document.createElement('div');
        timerBottomText.classList.add('text_bottom_timer');
        let dayDiv = document.createElement('div');
        let hourDiv = document.createElement('div');
        let minutesDiv = document.createElement('div');
        let dayDivText = document.createTextNode('дней');
        let hoursDivText = document.createTextNode('часов');
        let minutesDivText = document.createTextNode('минут');

        dayDiv.appendChild(dayDivText);
        hourDiv.appendChild(hoursDivText);
        minutesDiv.appendChild(minutesDivText);

        timerBottomText.appendChild(dayDiv);
        timerBottomText.appendChild(hourDiv);
        timerBottomText.appendChild(minutesDiv);

        textAndTimer.appendChild(timerElement);
        textAndTimer.appendChild(timerBottomText);
        timerBorder.appendChild(textAndTimer);
    } else {
        let rightText = document.createElement('div');
        rightText.classList.add('text_right');
        let bText = document.createElement('b');
        let bTextText = document.createTextNode('БЕССРОЧНО');

        bText.appendChild(bTextText);
        rightText.appendChild(bText);

        timerBorder.appendChild(rightText);
    }


    let moreInfoElement = document.createElement('a');
    moreInfoElement.classList.toggle('more_info');
    moreInfoElement.setAttribute('href', promotion.url.toString());
    let moreInfoElementText = document.createTextNode('Подробнее');
    moreInfoElement.appendChild(moreInfoElementText);

    promotionItem.appendChild(promotionTitle);
    promotionItem.appendChild(promotionImage);
    promotionItem.appendChild(promotionText);
    promotionItem.appendChild(timerBorder);
    promotionItem.appendChild(moreInfoElement);

    promotionsColumn.appendChild(promotionItem);
}
