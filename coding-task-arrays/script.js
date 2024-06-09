

function sumOfCharacters(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      console.log(arr[i]);
      sum += arr[i].length;
    }
  }
  return sum;
}

const str = "test";
console.log(typeof str);
const arr = [];

// TODO: Implement the sumOfCharacters function

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17



