var a = 0;

if (a == 0) {
  console.log("A is ZERO!!!111_" + Math.cos(0));
}

var b = 0;
if (a == 0) {
  if (b == 0) {
    console.log("A is zero and B is zero.");
  } else {
    console.log("A is zero and B is NOT zero.");
  }
}

if (a == 0 && b == 0) {
  console.log("A is zero and B is zero.");
} else {
  console.log("I don't know!");
}

if (a == 0) {
  if (b == 0) {
    if (a + b == 0) {
      if (a - b == 0) {
        if (a * b == 0) {
          if (a + b * a == 0) {
            console.log("Nested if's over 9000.");
            console.log("Nested if's over \"9000\".");
            console.log('This string contains quote: "This is quote!".');
          }
        }
      }
    }
  }
}

var count = 0;
var i = j = k = l = m = 0;
for (i = 0; i < 10; i++) {
  for (j = 0; j < 10; j++) {
    for (k = 0; k < 10; k++) {
      for (l = 0; l < 10; l++) {
        for (m = 0; m < 10; m++) {
          count++;
        }
      }
    }
  }
}
console.log(count);

var str = "abcdefg";
for (var s in str) {
  console.log(s + "->" + str[s]);
}

var anotherStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (var idx in anotherStr) {
  console.log(idx + "->" + anotherStr[idx]);
}

var superString = "abcdefg";

for (var y in superString) {
  var endIndex = y;

  var start = superString.slice(0, endIndex);
  var end = superString.slice(endIndex);
  var newStr = end + start;

  console.log(newStr);
}

console.log("=====");

for (var z in superString) {
  var endIndex = superString.length - z;

  var start = superString.slice(0, endIndex);
  var end = superString.slice(endIndex);
  var newStr = end + start;

  console.log(newStr);
}
