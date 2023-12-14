1. 	◦	https://www.w3schools.com/js/js_array_methods.asp
__JAVASCRIPT ARRAY METHOD__ 
JavaScript array methods facilitate efficient array manipulation. `length` retrieves array size. `toString()` converts array elements to a comma-separated string. `pop()` removes the last element, and `push()` adds to the end. `shift()` removes the first element, while `unshift()` adds to the beginning. `join()` creates a string with a specified separator. `delete` removes elements, though `pop()` or `shift()` is preferred. `concat()` merges arrays without modifying originals. `flat()` reduces nested array dimensions. `splice()` adds, removes, or replaces elements. `slice()` extracts a section without altering the original array. Implicitly, arrays convert to strings for output.

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



2. 	◦	https://www.w3schools.com/js/js_functions.asp


__JAVASCRIPT FUNCTIONS__

__JavaScript Functions Summary:__

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
            ```
            

        5. Why Functions:
        - Functions enable code reuse and writing flexible code with the ability to produce different results with different arguments.

        6. The () Operator:
        - The `()` operator invokes (calls) the function.

            ```javascript
            function toCelsius(fahrenheit) {
            return (5/9) * (fahrenheit - 32);
            }
            let value = toCelsius(77);
            ```

        7. Functions Used as Variable Values:
        - Functions can be used directly as variable values, making code concise.

            ```javascript
            let text = "The temperature is " + toCelsius(77) + " Celsius";
            ```

        8. Local Variables:
        - Variables declared within a function are local to that function.
        - They can only be accessed from within the function.
        - Local variables are created when the function starts and deleted when it completes.

            ```javascript
            function myFunction() {
            let carName = "Volvo";
            
            }
            ```
            

This summary provides an overview of the basic concepts of JavaScript functions, covering their definition, syntax, invocation, return values, 
use cases, and local variables.



3. 	◦	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 
 __FUNCTIONS__

__JavaScript Functions:__

JavaScript functions are reusable code blocks executed when called. They come in various types: regular, generator, async, and more. Functions can be declared, expressed, or constructed. Parameters, including default and rest, enhance flexibility. Functions return values, and scope rules apply. Arrow functions offer concise syntax. Avoid using the `Function` constructor due to security risks. Best practices include preferring function expressions and caution with block-level functions. Understanding function types, declarations, expressions, and usage is fundamental for modular, reusable, and maintainable JavaScript code.

A function in JavaScript is a reusable block of code executed when called. Functions can take parameters and return values. They are first-class objects, allowing them to be passed around like variables. Functions can have properties and methods.

Key Concepts:
        1. Function Types:
        - Regular function, Generator function, Async function, Async generator function.
        - Each type can be declared, expressed, or constructed.

        2. Function Declaration:
        - Declared using the `function` keyword, e.g., `function myFunction() { // code }`.
        - Hoisted, accessible before declaration.

        3. Function Expression:
        - Created by assigning a function to a variable, e.g., `const myFunction = function() { // code }`.
        - Anonymous or named, behaves like variables.

        4. Arrow Function:
        - Concise syntax, e.g., `const multiply = (x, y) => x * y`.
        - No `this` binding, cannot be constructed.

        5. Method:
        - Function inside an object, e.g., `const obj = { myMethod() { // code } }`.
        
        6. Constructor Function:
        - Created using the `new Function()` constructor, e.g., `const multiply = new Function("x", "y", "return x * y")`.
        - Generally slower, avoids due to security risks.

        7. Function Parameters:
        - Passed into functions, e.g., `function formatNumber(num) { // code }`.
        - Default parameters, rest parameters, and destructuring are supported.

        8. Arguments Object:
        - Accessible inside functions, contains passed arguments.
        - Not recommended due to limitations and lack of features.

        9. Return Value:
        - By default, returns `undefined`.
        - `return` statement exits function and can return a value.
        - Simulate multiple returns using objects or arrays.

        10. Scope:
        - Variables inside functions are local.
        - Hoisting applies to function declarations, not expressions.

        11. Block-level Functions:
        - In strict mode, functions inside blocks are scoped to that block.

        12. Getter and Setter Functions:
        - Accessor properties using `get` and `set` in objects.

        Best Practices:
        - Prefer function expressions over the `Function` constructor.
        - Use arrow functions for concise syntax.
        - Avoid using the `arguments` object.
        - Be cautious with block-level functions.

Example
```javascript
// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const multiply = function(x, y) {
  return x * y;
};

// Arrow Function
const square = x => x * x;

// Method
const calculator = {
  add: function(x, y) {
    return x + y;
  }
};
```

Understanding JavaScript functions is fundamental for effective coding, providing modularity, reusability, and maintainability. Functions are versatile, enabling a variety of coding styles and patterns.


4. ◦	https://www.javascripthelp.org/learn/basics/control-flow-statements/

__CONTROL FLOW STATEMENTS IN JAVASCRIPT__

    JavaScript's control flow statements, including if/else, switch, and loops, are fundamental for directing program execution based on conditions. If/else statements execute code blocks conditionally, while switch statements perform actions based on variable values. For loops iterate a specific number of times, and while loops execute code while a condition holds true. They provide powerful tools for creating dynamic, interactive web applications. Examples illustrate their practical use, such as prompting users to guess a secret number or offering free articles in a subscription-based service. Understanding these control flow mechanisms is essential for effective JavaScript programming.

        1. If/Else Statements

        It is sed to execute code blocks based on true or false conditions. The if...else statement allows alternative code execution if the condition is false.

        2. Switch Statements

        Execute code based on the value of a variable or expression. Cases match variable values, with a default option for no matches.

        3. Loops

        Used to repeat code based on a condition. 
        Two main types: 
        for loops, iterating over a range, and while loops, repeating while a condition is true.
        Do...While Loops is Similar to while loops but always execute the code block at least once before evaluating the condition.


5. https://javascript.info/function-basics


__FUNCTIONS IN JAVASCRIPT__

__FUNCTION DECLARATION:__
Functions in JavaScript are essential for code organization and reusability. A function declaration comprises the function keyword, a name, parameters, and a body. Local variables exist only within functions, while functions can access and modify outer variables. Global variables are accessible from any function. Parameters allow data to be passed to functions, and default values provide flexibility. Functions can return values using the return statement. Naming conventions, such as verbal prefixes, enhance code clarity. Functions should have one clear purpose, promoting readability. Understanding local and global scope, parameters, defaults, and returns is fundamental for effective JavaScript programming.

Functions are fundamental in programming, preventing code repetition. 
A function declaration includes the function keyword, a name, parameters in parentheses, and the function body in curly braces.

Example:
```javascript
function showMessage() {
  alert('Hello everyone!');
}
```
Calling `showMessage()` executes the code.

        1. Local Variables:
        Variables inside a function are local and not accessible outside.

        Example:
        ```javascript
        function showMessage() {
        let message = "Hello, I'm JavaScript!"; // local variable
        alert(message);
        }
        ```
        `message` is local to `showMessage()`.

        2. Outer Variables:
        Functions can access outer variables and modify them.

        Example:
        ```javascript
        let userName = 'John';

        function showMessage() {
        userName = "Bob"; // changes the outer variable
        alert('Hello, ' + userName);
        }
        ```
        `showMessage()` modifies the outer `userName`.

        3. Global Variables:
        Variables outside functions (global) are visible from any function.

        4. Parameters:
        Pass data to functions using parameters. Parameters are variables in the function declaration.

        Example:
        ```javascript
        function showMessage(from, text) {
        alert(from + ': ' + text);
        }
        showMessage('Ann', 'Hello!'); // Ann: Hello!
        ```
        `from` and `text` are parameters.

        5. Default Values:
        Assign default values to parameters. If no value is passed, the default is used.

        Example:
        ```javascript
        function showMessage(from, text = "no text given") {
        alert(from + ": " + text);
        }
        showMessage("Ann"); // Ann: no text given
        ```
        `text` defaults to "no text given".

        6. Returning a Value:
        Functions can return values using the `return` statement.

        Example:
        ```javascript
        function sum(a, b) {
        return a + b;
        }
        let result = sum(1, 2); // result is 3
        ```
        `sum` returns the sum of `a` and `b`.

        7. Function Naming:
        Functions should have clear, concise, and descriptive names. Use verbal prefixes like "get," "calc," or "check" to indicate the function's action.

        Example:
        ```javascript
        function showMessage()     // shows a message
        function getAge()          // returns the age
        function calcSum()         // calculates a sum
        function checkPermission() // checks permission, returns true/false
        ```
        Functions enhance code readability and maintainability.