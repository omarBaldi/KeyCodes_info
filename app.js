const container = document.querySelector('.container');
const tableContainer = document.querySelector('.table-container');
let isFirstTime = true;


function createElement(type, attrs = {}, containerToAppend) {
    const element = document.createElement(type);
    for (let attr in attrs) {
        const value = attrs[attr];
        element.setAttribute(attr, value);
    };
    containerToAppend.appendChild(element);
};

function showInitialBar() {
    createElement('div', {class: 'barInfo', data: 'Press any key to get the Javascript event keycode'}, container);
};

function createKeycodeCards() {
    createElement('div', {class: "mainCode"}, container);

    const titles = ['event.key', 'event.which', 'event.code'];
    titles.forEach(title => {
        createElement('div', {class: "tableCode", data: title }, tableContainer);
    });
};

function newButtonPressed(e) {
    const eventCodes = [e.key, e.keyCode, e.code]; 
    const length = document.querySelectorAll('.tableCode').length;

    document.querySelector('.mainCode').innerText = eventCodes.slice(-2)[0];

    for (let i = 0; i < length; i++) {
        if (eventCodes[i] == '') console.log("SpaceBar")
        document.querySelectorAll(`.tableCode:nth-child(${i + 1})`)[0].innerText = eventCodes[i];
    };
   
};



window.onload = () => showInitialBar();

document.onkeydown = (e) => {
    if (isFirstTime) {
        createKeycodeCards();
        document.querySelector('.barInfo').remove();
        isFirstTime = !isFirstTime;
    }
    newButtonPressed(e);
};


