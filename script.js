const messages = [
    "Are you sure?",
    "Really sure??😢",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!૮(˶ ╥﹏╥) ა",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
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

const restartBtns = document.querySelectorAll(".restart-btn")

// restart button functionality
restartBtns.forEach((button) => {
  button.addEventListener("click", () => {
    heartLoader.style.display = "inherit";
    yesResultContainer.style.display = "none";
    noResultContainer.style.display = "none";

    const timeoutId = setTimeout(() => {
      questionContainer.style.display = "inherit";
      heartLoader.style.display = "none";
    }, 3000);
  });
});
