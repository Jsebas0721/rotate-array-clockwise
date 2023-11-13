function rotateArray(arr, k) {
  // type your code here

  if(arr.length === k || arr.length == [] || k === 0){
    return arr;
  }else{
    for(let i = 0; i < k; i++){
      arr.unshift(arr.pop());
    }
  }

  console.log(arr)
    
 return arr;
}




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [3,4, 5, 1, 2]");
  console.log("=>", rotateArray([1, 2, 3, 4, 5], 3));

  console.log("");

  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 0));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
