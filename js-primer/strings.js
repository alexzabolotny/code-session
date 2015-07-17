var str = '       nonempty     ';
console.log('Before: ', str);
console.log('After: ', str.replace(/^\s+|\s+$/g, ''));

var anotherStr = 'this is string';
var anotherStrWithSpace = ' ' + anotherStr;

console.log(anotherStrWithSpace);

var toRepeat = 'a';
console.log(toRepeat.repeat(10));

// var hello = prompt('Please enter string');


var a = 'string';
// [0; 5]
console.log(a[3]); // > i

for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

var stringOne = 'hello';
var stringTwo = 'hello';

if (stringOne == stringTwo) {
  console.log('They are equal.');
}

// function areStringsEqual(s1, s2) {
//   if (!s1 || !s2) {
//     return false;
//   }
//
//   if (s1.length != s2.length) {
//     return false;
//   }
//
//   for (var k = 0; k < s1.length; k++) {
//     if (s1[k] != s2[k]) {
//       return false;
//     }
//   }
//
//   return true;
// }

console.log("Hello world");
var stringThree = "Hello " + "world"; // "Hello world"
var placeAt = stringThree.indexOf("world"); // 6
var anotherPlaceAt = stringThree.indexOf("Earth"); // -1
