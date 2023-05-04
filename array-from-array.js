const a = [1, 2, 3, 4, 5, [4, [5, [6, 7, 8, 9]]]];
function arrayinarray(input) {
  let output = [];

  for (let i = 0; i < input.length; i++) {
    if (!Array.isArray(input[i])) {
      output.push(input[i]);
    } else {
      output = output.concat(arrayinarray(input[i]));
    }
  }
  return output;
}
console.log(arrayinarray(a));
