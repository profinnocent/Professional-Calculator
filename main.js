let btnC = document.getElementById('reset')
let btn0 = document.getElementById('zero')
let btnMinus = document.getElementById('minus')
let btnDivide = document.getElementById('divide')
let btn7 = document.getElementById('seven')
let btn8 = document.getElementById('eight')
let btn9 = document.getElementById('nine')
let btnTimes = document.getElementById('times')
let btn4 = document.getElementById('four')
let btn5 = document.getElementById('five')
let btn6 = document.getElementById('six')
let btnPlus = document.getElementById('plus')
let btn1 = document.getElementById('one')
let btn2 = document.getElementById('two')
let btn3 = document.getElementById('three')
let btnEqual = document.getElementById('equal')
let btnNum = document.getElementById('num')
let btnOp = document.getElementById('op')
let screen = document.getElementById('screen')

let num1 = 0;
let num2 = 0;
let sum = 0;
let operator=0;
let opPressed = false;


function clearscr(){
    num1=0;
    num2=0;
   screen.innerText = 0;
   opPressed=false;
}

function answer(){
    if(operator == 1){
        num2 = parseFloat(num2);
        num1 += num2;
        screen.innerText = num1;
        num2 = 0;
        operator=0;
    }else if(operator == 2){
        num2 = parseFloat(num2);
        num1 -= num2;
        screen.innerText = num1;
        num2 = 0;
        operator=0;
    }else if(operator == 3){
        num2 = parseFloat(num2);
        num1 *= num2;
        screen.innerText = num1;
        num2 = 0;
        operator=0;
    }else if(operator == 4){
        num2 = parseFloat(num2);
        num1 /= num2;
        screen.innerText = num1;
        num2 = 0;
        operator=0;
    }
}

//Addition function
function add(){
    if(opPressed==false){
    num1 = parseFloat(screen.innerText);
    screen.innerText += '+';
    opPressed = true;
    operator = 1; //1 is for addition
    }else{
        answer();
        screen.innerText += '+';
        operator = 1; //1 is for addition
    }
}

//Subtraction function
function minus(){
    if(opPressed==false){
    num1 = parseFloat(screen.innerText);
    screen.innerText += '-';
    opPressed = true;
    operator = 2; //2 is for subtraction

    }else{
        answer();
        screen.innerText += '-';
        operator = 2; //2 is for subtraction
    }
}

//Multiplication function
function times(){
    if(opPressed==false){
    num1 = parseFloat(screen.innerText);
    screen.innerText += 'x';
    opPressed = true;
    operator = 3; //3 is for multiplicationtion
    }else{
        answer();
        screen.innerText += 'x';
        operator = 3; //3 is for mulplication
    }
}

//Division function
function divide(){
    if(opPressed==false){
    num1 = parseFloat(screen.innerText);
    screen.innerText += '/';
    opPressed = true;
    operator = 4; //1 is for division

    }else{
        answer();
        screen.innerText += '/';
        operator = 4; //4 is for division
    }
}

function print(){
    if(opPressed==false){
        if (screen.innerText == 0){
            num1 = '1';
            screen.innerText = '1';
        }else{
            num1 += '1';
            screen.innerText += '1';
        }
    }else{
        if (num2 == 0){
            num2 = '1';
            screen.innerText += '1';
        }else{
            num2 += '1';
            screen.innerText += '1';

        }
    }    
    
};

function print1(){
let number = '1';
printNum(number)
}

function print2(){
    let number = '2';
    printNum(number)
    }

function print3(){
    let number = '3';
    printNum(number)
    }       

function print4(){
    let number = '4';
    printNum(number)
    } 

function print5(){
    let number = '5';
    printNum(number)
    }
    
function print6(){
    let number = '6';
    printNum(number)
    }
        
function print7(){
    let number = '7';
    printNum(number)
    }
        
function print8(){
    let number = '8';
    printNum(number)
    }       
        
function print9(){
    let number = '9';
    printNum(number)
    } 
        
function print0(){
    let number = '0';
    printNum(number)
    } 

function printNum(number){
    if(opPressed==false){
        if (screen.innerText == 0){
            num1 = '1';
            screen.innerText = number;
        }else{
            num1 += number;
            screen.innerText += number;
        }
    }else{
        if (num2 == 0){
            num2 = number;
            screen.innerText += number;
        }else{
            num2 += number;
            screen.innerText += number;

        }
    }    
    
};