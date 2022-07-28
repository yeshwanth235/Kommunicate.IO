function reverse_digit(n) {
  let sum = 0,
    a;
  while (n > 0) {
    a = n % 10;
    sum = sum * 10 + a;
    n = Math.floor(n / 10);
  }
  return sum;
}
// let n = prompt(); input some text
let n = 149; //example testcase;

console.log(reverse_digit(n));
