// 	◦	https://www.w3schools.com/js/js_array_methods.asp
JavaScript Array Methods

1. Array length:
    The `length` property in arrays provides a convenient way to dynamically determine the size of an array.
     It automatically adjusts as elements are added or removed.

     example
     const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length; // size will be 4


2. Array toString():
   The `toString()` method is helpful for presenting the array as a string. 
   It converts each array element to a string and concatenates them with commas, producing a human-readable output.

   example
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   let sentence = fruits.toString(); // sentence will be "Banana,Orange,Apple,Mango"


3. Array pop():
    `pop()` is useful for managing a stack-like structure. 
    It removes the last element from an array, effectively "popping" it off, and returns the removed element.

    example
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let removedFruit = fruits.pop(); // removedFruit will be "Mango"


4. Array push():
    `push()` is handy for appending elements to the end of an array, dynamically expanding it. 
    It's commonly used to add items to a list or stack.

    example
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi"); // Now, fruits will be ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

5. Array shift():
   `shift()` is analogous to a queue operation. 
   It removes the first element from the array, causing all other elements to shift down. The removed element is returned.

    example 
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let removedFruit = fruits.shift(); // removedFruit will be "Banana"

6. Array unshift():
   `unshift()` is the counterpart to `push()`. It adds elements to the beginning of an array, shifting existing elements to higher indices.

   example
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.unshift("Lemon"); // Now, fruits will be ["Lemon", "Banana", "Orange", "Apple", "Mango"]


7. Array join():
   `join()` provides flexibility in creating a custom string representation of an array by allowing you to specify a separator. It's useful for creating comma-separated values or other delimited formats.

   example
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   let sentence = fruits.join(" * "); // sentence will be "Banana * Orange * Apple * Mango"


8. Array delete():
   - The `delete` operator removes a specific element from an array but leaves behind an undefined hole. It's generally not recommended for array manipulation, and alternatives like `splice()` are preferred.

   example
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   delete fruits[0]; // fruits will have a blank space at the beginning


9. Array concat():
   - `concat()` is a non-destructive method that creates a new array by combining existing arrays. It's particularly useful for merging arrays without modifying the originals.

   example
   const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const myChildren = myGirls.concat(myBoys); // myChildren will be ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]


10. Array flat():
    - `flat()` is beneficial for working with nested arrays. It reduces multidimensional arrays to a specified depth, making it easier to process and iterate over the elements.

    example
    const myArr = [[1,2],[3,4],[5,6]];
    const newArr = myArr.flat(); // newArr will be [1, 2, 3, 4, 5, 6]


11. Array splice():
    - `splice()` is a method for modifying arrays. It can add, remove, or replace elements at a specific index. It returns an array containing the removed elements, making it powerful for complex array manipulations.

    example
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi"); // Now, fruits will be ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]


12. Array slice():
    - `slice()` allows you to extract a portion of an array without modifying the original array. It's often used to create a shallow copy or obtain a subset of elements.

    e.g 
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1); // citrus will be ["Orange", "Lemon", "Apple", "Mango"]

13. Automatic toString():
    - JavaScript's automatic conversion of arrays to comma-separated strings is a convenient feature when displaying arrays in contexts that expect strings. This automatic conversion simplifies output formatting.


These methods provide a variety of ways to manipulate and work with arrays in JavaScript, including adding, removing, merging, and transforming elements. Additionally, caution is advised when using the delete operator, as it can leave undefined holes in the array.



JAVASCRIPT FUNCTIONS

JavaScript Functions Summary:

JavaScript functions are blocks of code designed to do specific tasks. You define them using the `function` keyword, give them a name, and provide a set of instructions inside curly brackets. Functions are like mini-programs, executed when called or invoked. They can take inputs (parameters) and produce outputs (return values). Functions promote code reuse and flexibility, allowing the same code to be used with different data. Invoked by events or code, they encapsulate tasks for clarity. Local variables inside functions are only accessible within that function. Overall, functions enhance code organization, readability, and maintainability in JavaScript programming.

1. Definition and Execution:
   - A JavaScript function is a set of instructions designed to perform a specific task.
   - It is executed when invoked or called.

     ```javascript
     function myFunction(p1, p2) {
       return p1 * p2;
     }
     ```

2. Syntax:
   - Functions are defined with the `function` keyword, followed by a name and parentheses.
   - Function names can contain letters, digits, underscores, and dollar signs.
   - Parameters are listed inside the parentheses.

     ```javascript
     function name(parameter1, parameter2) {
       // code to be executed
     }
     ```

3. Invocation:
   - Functions are executed when something invokes (calls) them.
   - Invocation can occur due to events, explicit calls from JavaScript code, or automatic/self-invocation.

4. Return:
   - A `return` statement stops the function execution.
   - The function can return a value, and this value is received by the caller.

     ```javascript
     function myFunction(a, b) {
       return a * b;
     }
     let x = myFunction(4, 3); // x will be 12
     

5. Why Functions:
   - Functions enable code reuse and writing flexible code with the ability to produce different results with different arguments.

6. The () Operator:
   - The `()` operator invokes (calls) the function.

     ```javascript
     function toCelsius(fahrenheit) {
       return (5/9) * (fahrenheit - 32);
     }
     let value = toCelsius(77);
     

7. Functions Used as Variable Values:
   - Functions can be used directly as variable values, making code concise.

     ```javascript
     let text = "The temperature is " + toCelsius(77) + " Celsius";
     

8. Local Variables:
   - Variables declared within a function are local to that function.
   - They can only be accessed from within the function.
   - Local variables are created when the function starts and deleted when it completes.

     ```javascript
     function myFunction() {
       let carName = "Volvo";
       
     }
     

This summary provides an overview of the basic concepts of JavaScript functions, covering their definition, syntax, invocation, return values, use cases, and local variables.