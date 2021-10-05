/*
var a = 2;
var b = "2";
var c = true;
var d = "hallo";
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log("hallo world");
*/

// var x = undefined;
// var y = null;
// console.log(typeof y);
// console.log(typeof x);

// var c = 6;

// Diff between == & ===

// 5 == 5
// console.log(5 === 5)

// console.log( 0 == false)




var d;
var sum = 10 + 20;
var result = 10 + "20";
var result1 = 10 + d;
var result2 = 20 + null;
// console.log(typeof sum, typeof result,
//      typeof result1, typeof result2);


var sub = 10 - 20;
var sub1 = 10 - "20"; // 10 - 20
var sub2 = 10 - "ab"; 
var sub3 = 10 - null;
// console.log(sub, sub1, sub2, sub3);     

// console.log("hello " + "world" - 2); 

// console.log("A" - 1);
// console.log("hello" - "world" + 78) // NaN + 78 = NaN

// console.log( 10 - "30"); // 10 - 30 = -20
// console.log( 10 - "a"); // 10 - "a" = NaN

// console.log( 10 * "3"); // 10 * 3 = 30
// console.log( 10 * "a") // 
// console.log(10 * undefined);
// console.log(10 * null);
// console.log(10 + null);

// console.log(10 / 2 ) // return quotioent // 5 
// console.log(10 % 2 ) // return remender // 0


//Comparison Operator == , ===, >= , <=, > <
// console.log(2 === "2");
// console.log(2 >= "a");

// Logical operator && , ||, !

// console.log(false && false);
// console.log(6 < 10 && 10 > 6); // true && true
// console.log(10 == 20 && 30 === 30) // false && true
// console.log(10 == 10 && 30 === "30") // true && false

console.log(false || false);
console.log(6 < 10 ||  10 > 6); // true || true
console.log(10 == 20 ||  30 === 30) // false && true
console.log(10 == 10 ||  30 === "30") // true && false