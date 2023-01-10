const operationList = [];

/* button */

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

function addZero() {
 operationList.push(0);
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
 operationList.push("*");
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

function addDivide() {
 operationList.push("/");
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
}

/* clear list */

function clearList() {
 while (operationList.length > 0) {
  operationList.pop();
 }
 console.log(operationList.join(""));
 document.getElementById("output").innerHTML = operationList.join("");
 console.log("cleared");
}

/* sum */

function sum() {
  noError = false;
  for (let i = 0; i < operationList.length; i++) {
    if (operationList[i] == "+" || operationList[i] == "-" || operationList[i] == "*" || operationList[i] == "/") {
      if (operationList[i-1] == 1 || operationList[i-1] == 2 || operationList[i-1] == 3 || operationList[i-1] == 4 || operationList[i-1] == 5 || operationList[i-1] == 6 || operationList[i-1] == 7 || operationList[i-1] == 8 || operationList[i-1] == 9 || operationList[i-1] == 0) {
        noError = true;
      } else {
        noError = false;
      }
      if (operationList[i+1] == 1 || operationList[i+1] == 2 || operationList[i+1] == 3 || operationList[i+1] == 4 || operationList[i+1] == 5 || operationList[i+1] == 6 || operationList[i+1] == 7 || operationList[i+1] == 8 || operationList[i+1] == 9 || operationList[i+1] == 0) {
        noError = true;
      } else {
        noError = false;
      }
    }
  }
  /* filter list */
  console.log(noError);
  const trueList = [];
  if (noError == true) {
    console.log("proceed");
    const tempList = [];
    for (let i = 0; i < operationList.length; i++) {
      if (operationList[i] == 1 || operationList[i] == 2 || operationList[i] == 3 || operationList[i] == 4 || operationList[i] == 5 || operationList[i] == 6 || operationList[i] == 7 || operationList[i] == 8 || operationList[i] == 9 || operationList[i] == 0) {
        tempList.push(operationList[i]);
      } else {
        trueList.push(tempList.join(""));
        trueList.push(operationList[i]);
        while (tempList.length > 0) {
          tempList.pop();
        }
      }
    }
    trueList.push(tempList.join(""));
  }
  console.log(trueList)
  console.log("end");
  
  let total = parseFloat(trueList[0]);
  for (let i = 1; i < trueList.length; i=i+2) {
    if (trueList[i] == "+") {
      total += parseFloat(trueList[i+1]);
    } else if (trueList[i] == "-") {
      total -= parseFloat(trueList[i+1]);
    } else if (trueList[i] == "*") {
      total *= parseFloat(trueList[i+1]);
    } else {
      total /= parseFloat(trueList[i+1]);
    }
  }
  console.log(total);
  document.getElementById("output").innerHTML = total;
}
