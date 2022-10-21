
const arr1 = [12, 13, 6, 10];
const arr2 = [13, 10, 16, 15];

function getDifference(arr1, arr2) {
  return arr1.filter((element) => {
    return !arr2.includes(element);
  });
}
const difference = [...getDifference(arr1, arr2), ...getDifference(arr2, arr1)];
function sumArray(difference) {
  let sum = 0;
  for (let i = 0; i < difference.length; i += 1) {
    sum += difference[i];
  }
  console.log(sum);
  return sum;
}
console.log(difference);
sumArray(difference);
