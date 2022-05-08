
let newsColumn = document.querySelector(".news_product");
let newsArray = [...NEWS];
let column = [];

const NEWS_NUMBER = 3;
const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
]

let randomNews = (array) => {
    while(column.length !== NEWS_NUMBER) {
        let item = array[Math.floor(Math.random()*array.length)];
        if(!column.includes(item)) {
            column.push(item);
        }
    }
    return column;
}

for (let i = 0; i <= NEWS_NUMBER; i++) {
    let elementForNewsColumn = randomNews(newsArray)[i];

    let newsElement = document.createElement("div");
    newsElement.classList.add("news");


    let newsImageElement = document.createElement("div");
    newsImageElement.classList.add("news_img");


    let newsImage = document.createElement("img");
    newsImage.setAttribute("src", elementForNewsColumn.img.toString());


    let newsDay = document.createElement("p");
    newsDay.classList.add("release_date");
    let newsDayText = document.createTextNode(
        elementForNewsColumn.date.substring(8, 10));
    newsDay.appendChild(newsDayText);

    let newsMonth = document.createElement('p');
    let newsMonthText = document.createTextNode(
        months[+elementForNewsColumn.date.substring(5, 7) - 1]);
    newsMonth.appendChild(newsMonthText);

    newsImageElement.appendChild(newsImage);
    newsImageElement.appendChild(newsDay);
    newsImageElement.appendChild(newsMonth);


    let newsTextElement = document.createElement("div");
    newsTextElement.classList.add("text_for_image");


    let linkElement = document.createElement('p');
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    let linkText = document.createTextNode(elementForNewsColumn.title)
    link.appendChild(linkText);
    linkElement.appendChild(link);

    let textElement = document.createElement('p');
    textElement.classList.toggle('text_new_disble');
    let text = document.createTextNode(elementForNewsColumn.description);

    textElement.appendChild(text);
    newsTextElement.appendChild(linkElement);
    newsTextElement.appendChild(textElement)

    let border = document.createElement('div');
    border.classList.toggle('border_for_news');

    newsElement.appendChild(newsImageElement);
    newsElement.appendChild(newsTextElement);
    newsColumn.appendChild(newsElement);
    if (i === 2) continue;
    newsColumn.appendChild(border);
}