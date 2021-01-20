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



//LOOPS: 

const fucntionForTad = () => {
  for (let i =0; i <= 15; i++)
  console.log(i)
}

fucntionForTad();



//ARRAYS WITH LOOPS

const e14Instructors = ['Aja', 'Trinity', 'Dr. T', 'Tickets'];

for (let i = 0; i < e14Instructors.length; i++) {
  console.log(e14Instructors[i]) // itereates 1 each time first time is Aja, second time Trinity etc.
}



//ARRAYS, LOOPS, THAT HAVE FUNCTIONS INSIDE

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];

const colorLoop = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`
  }
  console.log(domString)
}

colorLoop();


// LOOP THROUGH ARRAY OF OBJECTS

const instructors = [
  { first: 'Trinity', last: 'Christiana' },
  { first: 'Aja', last: 'Washington' },  //all the same key values
  { first: 'Tresa', last: 'Vasquez' },
];


// REFACTORED ARRAY OF OBJECTS

const nameLoop = () => {
  let domString = '';

  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
  }
  console.log(domString)
}

nameLoop();
