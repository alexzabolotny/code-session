//
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #

// 1: line.length % 2 == 0 && i % 2 == 0 => ' '
// 2: line.length % 2 == 0 && i % 2 != 0 => '#'
// 3: line.length % 2 != 0 && i % 2 == 0 => '#'
// 4: line.length % 2 != 0 && i % 2 != 0 => ' '

var size = 8;

var i = 0;
var count = 0;
while (i < size) {
  var line = "";
  while (line.length < size) {
    if ((line.length % 2 == 0 && i % 2 != 0) || (line.length % 2 != 0 && i % 2 == 0)) {
      line += "#";
    } else {
      line += " ";
    }
    count++;
  }
  console.log(line);
  i++;
}

console.log('Total iterations: ', count);
