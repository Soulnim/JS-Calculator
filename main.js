const operationList = [];

function addOne() {
 operationList.push(1);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addTwo() {
 operationList.push(2);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addThree() {
 operationList.push(3);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addFour() {
 operationList.push(4);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addFive() {
 operationList.push(5);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addSix() {
 operationList.push(6);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addSeven() {
 operationList.push(7);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addEight() {
 operationList.push(8);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addNine() {
 operationList.push(9);
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addPlus() {
 operationList.push("+");
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addMinus() {
 operationList.push("-");
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addTimes() {
 operationList.push("X");
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addDivide() {
 operationList.push("/");
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function clearList() {
 while (operationList.length > 0) {
  operationList.pop();
 }
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
 console.log("cleared");
}
