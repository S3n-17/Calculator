let num = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".calc_operator");
let brckts = document.querySelectorAll(".operator");
let ACButton = document.getElementById("AC");
let CEButton = document.getElementById("CE");
let inp = document.getElementById("input");
let scr = document.getElementById("screen");
let l = [];
var v = "";
let result;

calculate();
function calculate() {
    operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            c = operator.innerText;
            scr.innerText += c;
            console.log(scr.innerText);
            l.push(c);
            console.log(l);
            CE();
        });
    });
    brckts.forEach((brckt) => {
        brckt.addEventListener("click", () => {
            b = brckt.innerText;
            if(b == ")" || b == "("){
                scr.innerText += b;
                l.push(b);
                console.log(l);
                CE();
                AC();
            }
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
                AC();
            }
            else {
                console.log("ARRAY:", l);
                if (l.length > 16) {
                    scr.innerText = "Error: Too many characters";
                    AC();
                }
                else {
                    result = eval(l.join(""));
                    // scr.innerText = "";
                    console.log(result);
                    scr.innerText = result;
                    AC();
                    CE();
                    l = [result];
                }

            }

        });

    });

}

function CE() {
    CEButton.onclick = () => {
        scr.innerText = scr.innerText.slice(0, -1);
        l.pop();
    };

}

function AC() {
    ACButton.onclick = () => {
        scr.innerText = "";
        l = [];
    };

}