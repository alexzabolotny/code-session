var cat = {
    'name': 'Alf',
    'breed': 'Maine Coon',
    'age': 0.5
};

for (var r in cat) {
    console.log(r + ": " + cat[r]);
}
console.log('=====');

var numbers = [0, 2, 4, 6];
for (var s in numbers) { // for (var s = 0; s < numbers.length; s++)
    console.log(s + ": " + numbers[s]);
}
console.log("=====");

var forest = "";
var tree = "tree";
for (var t = 0; t < 10; t++) {
    forest = forest + " " + tree;
}
console.log(forest);
console.log("=====");


var size = 3;
var count = 0;

for (var i = 0; i < size; i++) {
  count++;
}
for (var j = 0; j < size; j++) {
  count++;
}
console.log('Count one: ', count);

count = 0;
for (var k = 0; k < 4; k++) {
  for (var l = 0; l < 3; l++) {
    count++;
  }
}

console.log('Count two: ', count);
