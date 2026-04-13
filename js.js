let num = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".calc_operator");
let clearButton = document.getElementById("AC/CE");
let inp = document.getElementById("input");
let scr= document.getElementById("screen");
let l = [];
var v = "";
let result;

calculate();
function calculate() {
    operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            c = operator.innerText;
            scr.innerText+= c;
            console.log(scr.innerText);
            l.push(c);
            console.log(l);
            CE();
        });
    });
    num.forEach((number) => {
        number.addEventListener("click", () => {
            n = number.innerText;
            if (n != "=") {
                scr.innerText += n;
                l.push(n);
                console.log(l);
                CE();
            }
            else {
                console.log("ARRAY:", l);
                result = eval(l.join(""));
                // scr.innerText = "";
                console.log(result);
                scr.innerText = result;
                AC(result);
                l = [result];
                
            }

        });

    });

}

function CE() {
    if (scr.innerText != "") {
        clearButton.innerText = "CE";
        clearButton.onclick = () => {
            scr.innerText = scr.innerText.slice(0, -1);
            l.pop();
        };
    }
}

function AC(result) {
    if (scr.innerText == result || scr.innerText == "" ) {
        clearButton.innerText = "AC";
        clearButton.onclick = () => {
            scr.innerText = "";
            l = [];
        };
    }
}