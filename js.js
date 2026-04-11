let num = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".calc_operator");
let clearButton = document.getElementById("AC/CE");
let inp = document.getElementById("input");
let numl1 = [];
let fl1 = [];
let fl2 = [];
let numl2 = [];
let opl = [];
let l = [];
let result;

calculate();
function calculate() {
    num.forEach((number) => {
        number.addEventListener("click", () => {
            var v = inp.value += number.innerText;
            console.log(inp.value);
            l.push(v);
        });
    });
    operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            var v = inp.value += operator.innerText;
            console.log(inp.value);
            if (v[v.length - 1] === "=") {
                result = eval(inp.value.slice(0, -1));   
                inp.value = result;
                console.log(result);
            }
        });

    });
    l = [];
}
