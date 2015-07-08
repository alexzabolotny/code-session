var integer = 1;
var float = 3.1415926;
var str = "string";
var arr = [1, 2, 3];

console.log('Before change:');
console.log(integer, float, str, arr);

integer = "string";
float = [1, 2, 3];
str = 1;
arr = 3.1415926;

console.log('After change:');
console.log(integer, float, str, arr);
