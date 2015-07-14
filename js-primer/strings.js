var str = '       nonempty     ';
console.log('Before: ', str);
console.log('After: ', str.replace(/^\s+|\s+$/g, ''));

var anotherStr = 'this is string';
var anotherStrWithSpace = ' ' + anotherStr;

console.log(anotherStrWithSpace);

var toRepeat = 'a';
console.log(toRepeat.repeat(10));

// var hello = prompt('Please enter string');
{}
