const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let defaultResult = "";

for (let btn of buttons) {
    btn.addEventListener('click', e => {
        const buttonText = e.target.innerText;

        if(buttonText == "C"){
            defaultResult = "";
            result.value = defaultResult;
        } else if (buttonText == "CE"){
            defaultResult = defaultResult.slice(0,-1);
            result.value = defaultResult;
        } else if (buttonText == "="){
            result.value = eval(defaultResult);
        } else {
            defaultResult += buttonText;
            result.value = defaultResult;
        }

    });
}