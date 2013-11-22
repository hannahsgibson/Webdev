/**
 * JavaScript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array with the elements 'New York' 'London' 'San Francisco'
 */
var q1 = ['New York', 'London', 'San Francisco']

/**
 * Question 2
 * Create an array with the elements 'New York' 'London' 'San Francisco' and extract the first element
 */
var city = ['New York', 'London', 'San Francisco'] 
var q2 = city[0];
console.log(q2);

/**
 * Question 3
 * Create an array with the elements 'New York' 'London' 'San Francisco' and extract the last element
 */
var city = ['New York', 'London', 'San Francisco']
var pos = city.length - 1
var q3 = (city[pos])
console.log(city[pos]);

/**
 * Question 4
 * Get the length of var q3
 */
var q4 = q3.length
console.log(q4);

/**
 * Question 5
 * Step 1: Create a new array called q5 elements 'New York' 'London' 'San Francisco'. 
 * Step 2: Using a method, add 'Berlin', 'Sydney', 'Boston',  'LA' to q5 array.
 */
 var q5 = ['New York', 'London', 'San Francisco']
 q5.push('Berlin', 'Sydney', 'Boston',  'LA');
 console.log(q5);

/**
 * Question 6
 * Using a method, get  the length of array q5.
 */
var q6 = q5.length
console.log(q6);
