// // TODO: Implement the oddNumbers function

const result = "";
function oddNumbers(num1, num2) {
  if ((num1, num2 > 0)) {
    for (let i = num1; i > num2; i++) {
      result += i + ",";
    }
    console.log(result);
  }
}

console.log(oddNumbers(0, 4));

// // result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// // result should be: 9,11

// TODO: Implement the charCount function
// const result = str[i];



function charCount(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++)
    if (str.toUpperCase().charAt(i) === char.toUpperCase()) {
      count += 1;
    }
  return count;
}

console.log(charCount("hello", "l"));
// //result should be 2
console.log(charCount("mama", "m"));
// // result should be: 2

console.log(charCount("Resümee", "e"));
// // result should be: 3
