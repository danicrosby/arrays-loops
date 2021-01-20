console.log("Hello, Beautiful, from main.js")


const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);


//ACCESSING ITEMS IN ARRAY
console.log(students[1]); //Jackie
console.log(students[students.length -1]); //Nathan


//REASSIGN VALUE IN ARRAY
students[0] = 'Matthew';
console.log(students);


//ARRAY WITH FUNCTION
const valuePrinter = (array, index) => {
  return array[index];
}
console.log(valuePrinter([1,2,3,4,5,6], 4)); //5
console.log(valuePrinter(students, 2)); //Sean


//A FUNCTION THAT CONTAINS AN ARRAY AND FINDS IF THERE IS A CERTAIN NAME IN THE ARRAY
const findGreg = (array) => {
  return array.includes('Greg')
}
console.log(findGreg(students)); //False

//WE WANT TO MAKE FUNCTIONS RESUABLE
//IF YOU JUST PASS ARRAY THEN YOU CAN CHANGE OUT ANY ARRAY IN THE FUNCTION


