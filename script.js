let op1 = "0";
let op = "+";
let op2 = "";
let out = document.querySelector("#outputDiv");
function add(operand1 , operand2){
    return operand1 +operand2;
}
function subtract(operand1 , operand2){
    return operand1 - operand2;
}
function multiply(operand1 , operand2){
    return operand1 * operand2;
}
function divide(operand1 , operand2){
    return operand1 / operand2;
}
function operate(operand1 , operator, operand2){
    if(operator == '+'){
        return add(operand1, operand2);
    }
    else if(operator == '-'){
        return subtract(operand1, operand2);
    }
    else if(operator == '*'){
        return multiply(operand1 , operand2);
    }
    else if(operator == '/'){
        return divide(operand1, operand2);
    }
}


function makeButtons(rows, columns , bigDiv){

    for(let i = 1 ; i <= rows ; i++){
        let parentDiv = document.createElement("div");
        parentDiv.setAttribute("class", "row");
        bigDiv.appendChild(parentDiv);
        for(let j = 1; j <= columns ; j++){
            let childDiv = document.createElement("button");
            childDiv.setAttribute("class" , "square");
            childDiv.setAttribute("id", "button" + i + j);
            parentDiv.appendChild(childDiv);
        }
    }
}
function addButtonStyle(){
    for(let i = 2; i <= 4 ; i++){
        for(let j = 1 ; j <= 3 ; j++){
            let btn = document.querySelector("#button" + i + j);
            btn.classList.add("operands");
        }
    }
    let btn = document.querySelector("#button52");
    btn.classList.add("operands");


    for(let i = 1; i <= 5 ; i++){
        for(let j = 4 ; j <= 4 ; j++){
            let btn = document.querySelector("#button" + i + j);
            btn.classList.add("operators");
        }
    }


    btn = document.querySelector("#button11");
    btn.innerHTML= "AC";
    btn = document.querySelector("#button12");
    btn = document.querySelector("#button13");
    btn = document.querySelector("#button14");
    btn.innerHTML= "/";

    btn = document.querySelector("#button21");
    btn.innerHTML= "7";
    btn = document.querySelector("#button22");
    btn.innerHTML= "8";
    btn = document.querySelector("#button23");
    btn.innerHTML= "9";
    btn = document.querySelector("#button24");
    btn.innerHTML = "X";

    btn = document.querySelector("#button31");
    btn.innerHTML= "4";
    btn = document.querySelector("#button32");
    btn.innerHTML= "5";
    btn = document.querySelector("#button33");
    btn.innerHTML= "6";
    btn = document.querySelector("#button34");
    btn.innerHTML = "-";


    btn = document.querySelector("#button41");
    btn.innerHTML= "1";
    btn = document.querySelector("#button42");
    btn.innerHTML= "2";
    btn = document.querySelector("#button43");
    btn.innerHTML= "3";
    btn = document.querySelector("#button44");
    btn.innerHTML = "+";


    btn = document.querySelector("#button51");
    btn = document.querySelector("#button52");
    btn.innerHTML= "0";
    btn = document.querySelector("#button53");
    btn.innerHTML= ".";
    btn = document.querySelector("#button54");
    btn.innerHTML= "=";






}

function appendCharacter(character){
    // console.log("innn");
    op2 += character;
    
    out.innerHTML = op2;
}

function doOperation(operator){
    op1 = string(operate(op1 , op, op2));
    out.innerHTML = op1;
    op2 = "";
    op = operator

    if(op == "="){
        op = "+";
        op2 = op1;
        op1 = "0";
        
    }
    
}



makeButtons(5 , 4, document.querySelector("#buttonDiv"));
addButtonStyle();

let operands = document.querySelectorAll(".operands");
// console.log(operands);
operands.forEach((operand) =>{
    //  console.log("in here");
    operand.addEventListener("click", () =>{
        appendCharacter(operand.innerHTML);
    });
});


let operators = document.querySelectorAll(".operators");
// console.log(operands);
operators.forEach((operator) =>{
    //  console.log("in here");
    operator.addEventListener("click", () =>{
        doOperation(operator.innerHTML);
    });
});