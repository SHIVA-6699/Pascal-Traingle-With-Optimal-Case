const big = (rowIndex, n) => {
  rowIndex = rowIndex + 1;
  var ans = 1;
  for (let z = n - 1; z > 0; z--) process.stdout.write(" ");
  process.stdout.write(ans.toString() + " ");
  for (let i = 1; i < rowIndex; i++) {
    ans = ans * (rowIndex - i);
    ans = ans / i;
    process.stdout.write(+ans.toString() + " ");
  }
};
var n = 5;
var k = n;
for (let j = 1; j < n; j++) {
  big(j, k);
  k--;
  console.log();
}
