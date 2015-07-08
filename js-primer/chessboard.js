var line = "";
var length = 8;

while (line.length < length) {
  if (line.length % 2 == 0) {
    line += "#";
  } else {
    line += " ";
  }
}

console.log(line);
