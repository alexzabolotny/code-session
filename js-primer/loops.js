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
