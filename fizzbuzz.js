var a = 1;

while (a <= 100) {
  if (a%3 == 0) {
    console.log("Fizz");
  } else if (a%5 == 0) {
    console.log("Bull");
  } else {
    console.log(a);
  }
  a++;
}
