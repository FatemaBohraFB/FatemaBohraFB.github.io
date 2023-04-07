//hamburger for the mobile version
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('visible');
});

const menuItems = menu.querySelectorAll('a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('visible');
    });
});

// For the Java data structure image
function alertMessage() {
    let result = alert('This will take you to another website.');
    console.log(result);
}

// pop-ups
const errorMessage = document.getElementById('error');
function emailAddress(event) {
    const myEmail = document.getElementById('myEmail').pattern;
    let messages = []
    if (!myEmail.match(pattern)) {
        messages.push('First name and last name are required');
    }
    // Cancel form submission if not checked
    if (messages.length > 0) {
        event.preventDefault();
    }
}

// active links
let links = document.querySelectorAll('.links a');
let bodyId = document.querySelector('body').id;

for (let link of links) {
    if (link.dataset.active == bodyId) {
        link.classList.add("active");
    }
}

// Part 4: Notifications
function fun() {
    alert("Hello There!");
}

// Part 4: conditional implementation (if-else) ---Clock---
const container = document.querySelector('.container');
const time = document.querySelector('#time');

function updateTime() {
    const now = new Date();
    const hour = now.getHours();

    // using 24 hours clock
    if (hour >= 6 && hour < 18) {
        container.classList.add('daytime');
        container.classList.remove('nighttime');
    } else {
        container.classList.add('nighttime');
        container.classList.remove('daytime');
    }

    time.textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000); // update time every second

// Part 4: color changer buttons
const colorChangerButton = document.getElementById('color-changer1');
const body = document.body;
const header = document.querySelector('header');

colorChangerButton.addEventListener('click', function () {
    // Toggle body class
    body.classList.toggle('body-new1');

    // Toggle header class
    header.classList.toggle('header-new1');
});
const colorChangerButton2 = document.getElementById('color-changer2');
const body2 = document.body;
const header2 = document.querySelector('header');

colorChangerButton2.addEventListener('click', function () {
    // Toggle body class
    body2.classList.toggle('body-new2');

    // Toggle header class
    header2.classList.toggle('header-new2');
});

const colorChangerButton3 = document.getElementById('color-changer3');
const body3 = document.body;
const header3 = document.querySelector('header');

colorChangerButton3.addEventListener('click', function () {
    // Toggle body class
    body3.classList.toggle('body-new3');

    // Toggle header class
    header3.classList.toggle('header-new3');
});

// Part 4:Event handler function
function eventHandlerFunc() {
    let userInput = document.querySelector('#userInput');
    let message = document.querySelector('#message');

    message.innerHTML = "Welcome to my webpage " + userInput.value;
}