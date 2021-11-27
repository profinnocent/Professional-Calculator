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
let btnPower = document.getElementById('power')
let screen = document.getElementById('screen')

let num1 = 0;
let num2 = 0;
let sum = 0;
let operator=0;
let opPressed = false;
let isEqualTo = false;

//The Power ON - OFF button function
function power() {
    if(screen.innerText === "OFF"){
        num1=0;
        num2=0;
        screen.innerText = 0;
        opPressed=false;
        operator=0;
        isEqualTo =false;
        btnPower.style.backgroundColor = 'green';
    }else{
        screen.innerText = "OFF";
        btnPower.style.backgroundColor = 'red';
    }
}


//Clear screen fucntion
function clearScr(){
    if(screen.innerText == 'OFF'){
        alert('Calculator is OFF, Click the ON/OFF button to switch it ON.')        
    }else{    
        num1=0;
        num2=0;
    screen.innerText = 0;
    opPressed=false;
    operator=0;
    isEqualTo =false;
    }
}

//This function deletes the last entry on the screen
function delFunc(){
    clearScr();
}

//Equal to function that computes the answer
function answer(){
    if(screen.innerText == 'OFF'){
        alert('Calculator is OFF, Click the ON/OFF button to switch it ON.')        
    }else{
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
        isEqualTo = true;
    }
}

//Addition function
function add(){
    if(screen.innerText == 'OFF'){
        alert('Calculator is OFF, Click the ON/OFF button to switch it ON.')        
    }else{
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
        isEqualTo = false; 
    }
}

//Subtraction function
function minus(){
    if(screen.innerText == 'OFF'){
        alert('Calculator is OFF, Click the ON/OFF button to switch it ON.')        
    }else{
        if(opPressed==false){
            num1 = parseFloat(screen.innerText);
            screen.innerText += "-";
            opPressed = true;
            operator = 2; //2 is for subtraction
        
            }else{
                answer();
                screen.innerText += '-';
                operator = 2; //2 is for subtraction
            }
        isEqualTo = false;
    }
}

//Multiplication function
function times(){
    if(screen.innerText == 'OFF'){
        alert('Calculator is OFF, Click the ON/OFF button to switch it ON.')        
    }else{
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
        isEqualTo = false; 
    }
}

//Division function
function divide(){
    if(screen.innerText == 'OFF'){
        alert('Calculator is OFF, Click the ON/OFF button to switch it ON.')        
    }else{
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
    isEqualTo = false;   
    }
}


//below are the 11 call button functions for the number and dot buttons
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
    
function printDot(){
    let number = '.';
    printNum(number)
    }    

//This function prints all numbers and dot on the screen    
function printNum(number){
    if(screen.innerText == 'OFF'){
        alert('Calculator is OFF, Click the ON/OFF button to switch it ON.')        
    }else{
        if(isEqualTo==false){
            if(opPressed==false){
                if (screen.innerText == 0){
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
            
        }else{
            alert('You cant clcik a number after equal to. Please clcik an operator or reset screen')
        }
    }        
};