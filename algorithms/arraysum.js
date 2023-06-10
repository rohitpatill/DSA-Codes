function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
let array = [1, 2, 3, 4, 5];
let sum = sumArray(array); // sum is 15
console.log(sum)
