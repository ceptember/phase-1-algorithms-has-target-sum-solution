function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) because there are no nested loops, it just has to iterate through each item of the array once
  and then look up a value in an object 
*/

/* 
  Add your pseudocode here
  iterate over each number in the array
  Subtract that number from the target to identify its compliment 
  if the compliment for this number is already in the seen numbers object, return true
  else, keep going
  return false if it gets through all of them 
*/

/*
  Add written explanation of your solution here
  -- 
  this is different than my original solution. In mine, I added each number to each of the remaining 
  numbers one by one, and tested it against the target. In this one, we identify a complimentary number
  by iterating over the array and subtracting that number in the array from the target, and comparing it against
  the other numbers. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, -2], 10));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, -2, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
