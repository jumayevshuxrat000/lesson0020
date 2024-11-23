{
    let a = 3, b = 8;
    let result = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0){

            result.push(i);
        }
    }
    console.log(result);
}

function evenNumbers(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }    
    }
    return result;
}
console.log(evenNumbers(3, 8)); 

{
    let a = 45;
    let sum = [];
    for (let i = 10; i < a; i += 10) {
        sum.push(i);
    }
    console.log(sum); 
    
}

function sumTen(a) {
    let  sum = [];
    for (let i = 10; i < a; i += 10) {
        sum.push(i);
    }
    return sum;
}
console.log(sumTen(45)); 




{
    let a = 5;
    let squares = [];
    for (let i = 1; i <= a; i++) {
        squares.push(i * i);
    }
    console.log(squares);
    
}


function squares(a) {
    let squares = [];
    for (let i = 1; i <= a; i++) {
        squares.push(i * i);
    }
    return squares;
}
console.log(squares(5));


{
    let num = 23761;
    let order = parseInt(num.toString().split('').reverse().join(''));
    console.log(order); 
    
}

function orderNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(orderNumber(23761));

{
    let str = "whats your name?";
    if (str.endsWith("?")) {
        str = str.slice(0, -1);
    }
    console.log(str); 
    
}


function removeQuestionMark(str) {
     if (str.endsWith("?")) {
        str = str.slice(0, -1);
    }
    return str
}
console.log(removeQuestionMark("whats your name?"));

{
    let a = 5;
    let array = [];
    for (let i = 0; i < a; i++) {
        array.push(a);
    }
    console.log(array); 
    
}


function repeatNumber(a) {
    let array = [];
    for (let i = 0; i < a; i++) {
        array.push(a);
    }
    return array;
}
console.log(repeatNumber(5)); 


{
    let value = 0;
    let result;
    
    if (value) {
        result = true;
    } else {
        result = false; 
    }
    
    console.log(result); 
    
}

function isTruthy(value) {
    if (value) {
        return true; 
    } else {
        return false; 
    }
}

console.log(isTruthy(0));       
console.log(isTruthy("salom"));





