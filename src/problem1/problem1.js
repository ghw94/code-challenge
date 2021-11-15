var sum_to_n_a = function (n) {
  // your code here
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(sum_to_n_a(11));

var sum_to_n_b = function (n) {
  // your code here
  return (n * (n + 1)) / 2;
};

console.log(sum_to_n_b(11));

var sum_to_n_c = function (n) {
  // your code here
  let result = 1;
  let i = n;
  do {
    result = result += i;
    i--;
  } while (i > 1);
  return result;
};

console.log(sum_to_n_c(11));
