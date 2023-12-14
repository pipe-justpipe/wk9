//Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.

function arrValues(myArray) {
    let result = [];
  
    for (let i = 0; i < myArray.length; i++) {
      result.push(myArray[i]);
    }
  
    return result;
  }
  
  let myArr1 = [2, 4, 6, 8, 10, 12, 14];
  let myArr2 = ['apple', 'banana', 'orange', 'grape'];
  
  let values1 = arrValues(myArr1);
  let values2 = arrValues(myArr2);
  

  console.log(values1);
  console.log(values2);
  
  