// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  let binary = (num >>> 0).toString(2);
  let output = 0;
  for (let i = 0; i < binary.length; i++) {
    output += parseInt(binary[i])
  }
  return output
}

console.log(result(number));