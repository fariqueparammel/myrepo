let number = '';
let operator = '';
let num1 = 0;
let num2 = 0;
let flag = 0;
let result = 0;
let flag1 = 0;
let flag2 = 0;
let flagNextNumber = 0;
let intermediateDisplayString = '';
let flagToSetNumber2 = 0;
let resultFlag = 0;
let sameOperatorFlag = 0;
let operatorSign = ''; 

function getNumber(id) {
    if (resultFlag == 1) {
        intermediateDisplayString = String(result);
        resultFlag = 0;
    }

    intermediateDisplayString = intermediateDisplayString.concat(document.getElementById(id).value);
    console.log(intermediateDisplayString);
    document.getElementById('finalstring').innerText = intermediateDisplayString;
    number = number.concat(document.getElementById(id).value);
    if (flagToSetNumber2 == 1) {
        debugger
        let number2 = Number(number);

        num2 = number2;
        console.log(num2);
        intermediateResult();
        console.log(result);
        $(document).ready(function () {
            debugger
            // equals must be checked only when #equals is clicked
            $("#equals").on(click(equals()));
            $(".numbers").click(number2NewResult());
            $(".operator").click(number1ToResult());
        });





    }


}




const form = document.getElementById('calculator');
form.addEventListener('onclick', (event) => {
    debugger
    event.preventDefault();

    getNumber();

});
function getOperator(id) {
    if (resultFlag == 1) {
        intermediateDisplayString = String(result);
        resultFlag = 0;
    }
    debugger
    // if(intermediateDisplayString.slice(-1) == id && intermediateDisplayString.charAt(intermediateDisplayString.length-2 =='+' || '/' ||'-'||'*' ||'%'))
    //     {
    intermediateDisplayString = intermediateDisplayString.concat(document.getElementById(id).value);
    if (
        intermediateDisplayString.slice(-1) === id &&
        ['+', '/', '-', '*', '%'].includes(intermediateDisplayString.charAt(intermediateDisplayString.length - 2))
    ) {
        sameOperatorFlag = 1;
        intermediateDisplayString = intermediateDisplayString.slice(0, intermediateDisplayString.length - 2);
        console.log(intermediateDisplayString.length - 1);
        operatorSign = document.getElementById(id).value;
        console.log(intermediateDisplayString);
        intermediateDisplayString = intermediateDisplayString.concat(operatorSign);
        console.log(intermediateDisplayString);
        document.getElementById('finalstring').innerText = intermediateDisplayString;
    } else {

        console.log(intermediateDisplayString);
        document.getElementById('finalstring').innerText = intermediateDisplayString;

    }
    flag = 1;
    if (result != 0) {

        num1 = result;
        operator = document.getElementById(id).value;



        number = '';


    }
    else {
        if (flag1 == 1) {

            num1 = 0;
            number = '';
            //   intermediateDisplayString='0';
            let number2 = Number(number);

            num2 = number2;
            if (sameOperatorFlag == 1) {
                operator = operatorSign;
                operatorSign = '';
                sameOperatorFlag = 0;
            }
            else {
                operator = document.getElementById(id).value;

            }
        }



        else {
            let number1 = Number(number);
            num1 = number1;
            console.log(num1);



 
            
            number = '';

            operator = document.getElementById(id).value;

            flagToSetNumber2 = 1;
            console.log(operator);

        }
    }
}




function clearScreen() {
    document.getElementById('result').innerText = "";
    document.getElementById('finalstring').innerText = "";
    intermediateDisplayString = '';
    number = '';
    num1 = '';
    num2 = '';
    result = '';
    flag = 0;
    flag1 = 0;
    flagToSetNumber2 = 0;
    sameOperatorFlag = 0;
}


function intermediateResult() {

    switch (operator) {
        case "+":
            result = num1 + num2;

            break;
        case "-":
            result = num1 - num2;

            break;
        case "*":
            result = num1 * num2;

            break;
        case "/":
            if (num2 != 0) {
                result = num1 / num2;

            }
            else {
                document.getElementById('result').innerText = "= error";
                alert("division by zero no possible");
                clearScreen();
            }
            break;

        case "%":
            result = num1 % num2;

            break;


    }


}



function number1ToResult() {
    num1 = result;
    console.log(num1);
    num2 = '';
    number = '';
}
function number2NewResult() {
    let number2 = Number(number);

    num2 = number2;
    console.log(num2);
}


function equals() {
    resultFlag = 1;
    // if( document.getElementById('equals').value=='=')
    switch (operator) {
        case "+":

            document.getElementById('finalstring').innerText = "= " + result;
            break;
        case "-":

            document.getElementById('finalstring').innerText = "= " + result;
            break;
        case "*":

            document.getElementById('finalstring').innerText = "= " + result;
            break;
        case "/":
            if (num2 != 0) {
                document.getElementById('finalstring').innerText = "= " + result;

            }
            else {
                document.getElementById('finalstring').innerText = "= error";
                alert("division by zero no possible");

                clearScreen();
            }
            break;

        case "%":

            document.getElementById('finalstring').innerText = "= " + result;
            break;


    }
    intermediateDisplayString = '';


    flag2 = 1;
    console.log(result);
    if (result == 0) {

        flag1 = 1;
        console.log(flag1);
    }

}