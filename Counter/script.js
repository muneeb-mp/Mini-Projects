const counter = document.getElementById("counter");
const buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        const buttonType = e.currentTarget.classList;

        if (buttonType.contains('increase')) {
            count++;
        }
        else if (buttonType.contains('decrease')) {
            count--;
        }
        else {
            count = 0;
        }
        counter.innerText = count;

        if (count > 0) {
            counter.style.color = "green";
        }
        else if (count < 0) {
            counter.style.color = "red";
        }
        else {
            counter.style.color = "gray";
        }

    });
})