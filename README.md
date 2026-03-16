1️⃣ Difference between var, let, and const

In JavaScript, var, let, and const are used to declare variables, but they differ in scope, redeclaration, and reassignment behavior.

var is the traditional way of declaring variables in JavaScript. It has function scope, meaning the variable is accessible throughout the entire function in which it is declared. Variables declared with var can be redeclared and reassigned, which can sometimes lead to unexpected behavior in larger programs.

let was introduced in ES6 and provides block scope, meaning the variable only exists within the block {} where it is declared, such as inside loops or conditional statements. Variables declared with let can be reassigned but cannot be redeclared in the same scope. This makes it safer and more predictable than var.

const was also introduced in ES6 and is used for variables whose values should not change after they are assigned. Like let, it has block scope. Variables declared with const cannot be reassigned or redeclared, although if the variable holds an object or array, its internal properties can still be modified.

2️⃣ What is the Spread Operator (...)

The spread operator (...) is a feature in modern JavaScript that allows an iterable object such as an array or object to be expanded into individual elements. It is commonly used to copy arrays or objects, merge multiple arrays or objects, and pass multiple values into functions. The spread operator helps make code more concise and easier to read.

3️⃣ Difference between map(), filter(), and forEach()

map(), filter(), and forEach() are array methods used to iterate over elements in an array, but each serves a different purpose.

The map() method is used when you want to transform or modify every element of an array. It processes each element and returns a new array containing the transformed values.

The filter() method is used when you want to select specific elements from an array based on a condition. It returns a new array containing only the elements that satisfy the given condition.

The forEach() method is used to execute a function for each element in an array. Unlike map() and filter(), it does not return a new array and is mainly used for performing operations such as logging or updating external variables.

4️⃣ What is an Arrow Function

An arrow function is a shorter and more concise way to write functions in JavaScript. It was introduced in ES6 and uses the => syntax. Arrow functions help make code cleaner and easier to read. One important characteristic of arrow functions is that they do not create their own this context; instead, they inherit this from the surrounding scope, which is particularly useful in modern JavaScript development.

5️⃣ What are Template Literals

Template literals are a modern way to create and work with strings in JavaScript. They were introduced in ES6 and use backticks ( ) instead of single or double quotation marks. Template literals allow string interpolation, which means variables and expressions can be embedded directly inside a string. They also support multi-line strings, making it easier to write long or formatted text.
