/*
// hoisting + variable scope

function greetPerson(name) {

    if(true) {
    const greet;
    
    if(name == 'test') {
          greet = 'test';
         
    }else {
          greet = 'test1';
    }
}
    
    console.log(greet);
}

greetPerson('test2');

*/
/*

// demo

var a = 1;
var b =2;
if(a== 1) {
    var a=10;
    let b =20;
    console.log(a);  // 10
    console.log(b); // 20
}
console.log(a); // 10
console.log(b); // 2


// const

const PI=3.14;
*/
// loop
var arr = [2, 4, 6, 8, 10];
var output1 = arr.map(function (num) {
    return num * 2;
});
console.log(output1);
// datatype
var number1 = '5';
var number2 = '5';
var c = parseInt(number1) + parseInt(number2);
console.log(typeof number2);
//# sourceMappingURL=func.js.map