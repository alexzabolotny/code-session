var emptyArrayOne = [];
console.log(emptyArrayOne.length);

var emptyArrayTwo = new Array();
console.log(emptyArrayTwo.length);

emptyArrayOne.push(1);
console.log(emptyArrayOne);

emptyArrayOne.push(2);
emptyArrayOne.push(3);
emptyArrayOne.push(4);
console.log(emptyArrayOne);

console.log(emptyArrayOne.pop());
console.log(emptyArrayOne);

emptyArrayOne.unshift(5);
emptyArrayOne.unshift(6);
console.log(emptyArrayOne);

console.log(emptyArrayOne.shift());
console.log(emptyArrayOne);

var nonemptyArrayOne = [1, 2, 5, 4, 3];
var nonemptyArrayTwo = ["one", "two", "three", "four", "five", "six"];
var monthsEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsUkr = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
for (var i = 0; i < monthsEng.length; i++) {
  console.log(monthsEng[i] + ' - ' + monthsUkr[i]);
}

nonemptyArrayOne[0] = 10;
console.log(nonemptyArrayOne);

for (var k = 0; k < nonemptyArrayOne.length; k++) {
  nonemptyArrayOne[k] = nonemptyArrayOne[k] + 1;
}
console.log(nonemptyArrayOne);
