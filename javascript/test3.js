// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];
// const arr2 = [11, 11, 11]

function result(arr1, arr2) {
  // Your Code Here
  const res = [];
  let firstValueArray = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] > arr2[j]) {
        firstValueArray.push(false)
      } else {
        firstValueArray.push(true)
      }
    }
  }
  for (let i = 0; i < firstValueArray.length; i++) {
    if (firstValueArray[i] !== true) {
      res.push(false)
      res.push(true)
      return res
    } 
  }

  res.push(true)
  res.push(false)
  return res
}

console.log(result(arr1, arr2));