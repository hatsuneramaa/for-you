const messages = [
    "Are you sure?",
    "Really sure??😢",
    "Are you really sure?",
    "Sweet Heart please...",
    "Just think about it!૮(˶ ╥﹏╥) ა",
    "If you say it, I will be really sad...",
    "I'll give you my world",
    "You'll be fine with me",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}


function handleYesClick() {
    window.location.href = "yes_page.html";

}
