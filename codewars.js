
//funksiyda agar toq son bolsa Toq deb chiqarilsin agar Juft bolsa juf deb chiqsin

function evenOrOdd(number) {
    if(number % 2 === 0 ){
      return "Even"
    }else{
      return "Odd"
    }
  }


//   sonlar ichidan eng kichigini chiqaradigan funksiya

  function findSmallestInt(arr) {
    return Math.min(...arr);
  }
//Stringni Numberda chiqaring

  const stringToNumber = function(str){
    return +Number(str);
  }


// 1dan 10 gacha bolgan sonlarni yigindisni chiqaring
  var summation = function (num) {
    let sum = 0
    for(let i = 1; i<= num; i++){
      sum += i;
    }
    return sum;
  }


  // Write a function "greet" that returns "hello world!"
function greet() {
    return "hello world!";
}

console.log(greet()); 