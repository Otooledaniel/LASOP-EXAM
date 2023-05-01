// Generate a random integer between 0 and 255 inclusive
const random_number = Math.floor(Math.random() * 256);

console.log(random_number);



 //Create a new Date object with the current date and time
const now = new Date();

  //Get the year today
const year = now.getFullYear();
console.log("Year:", year);

  //Get the month today as a number (0-11, where 0 is January)
const month = now.getMonth();
console.log("Month (as a number):", month);

  //Get the date today (1-31)
const date = now.getDate();
console.log("Date:", date);

  //Get the day today as a number (0-6, where 0 is Sunday)
const day = now.getDay();
console.log("Day (as a number):", day);

  //Get the hours now (0-23)
const hours = now.getHours();
console.log("Hours:", hours);

 //Get the minutes now (0-59)
const minutes = now.getMinutes();
console.log("Minutes:", minutes);



const currentYear = new Date().getFullYear();

const birthYear = prompt("What year were you born?");

const age = currentYear - birthYear;

if (age >= 18) {
  
  alert("You are old enough to drive!");
} else {
  
  const yearsToWait = 18 - age;

  
  alert(`You need to wait ${yearsToWait} more years to drive.`);
}



const age1 = prompt("Enter your age");

// Check if the user is 18 or older
if (age >= 18) {
  // If the user is 18 or older, give feedback that they are old enough to drive
  alert("You are old enough to drive!");
} else {
  // If the user is younger than 18, calculate how many years they need to wait to turn 18
  const yearsToWait = 18 - age;

  // Give feedback on how many years the user needs to wait
  alert(`You need to wait ${yearsToWait} more years to drive.`);
}





const myAge = 30;

const yourAge = prompt("Enter your age:");

if (myAge > yourAge) {
  console.log("I am older than you.");
} else if (myAge < yourAge) {
  console.log("You are older than me.");
} else {
  console.log("We are the same age.");
}


//USING TERNARY OPERATOR
const a = 10;
const b = 5;
const result = a > b ? 'a is greater than b' : 'a is less than b';
console.log(result);


//USING IF AND ELSE 
const a1 = 10;
const b1 = 5;
let result1;
if (a1 > b1) {
  result1 = 'a1 is greater than b1';
} else {
  result1 = 'a1 is less than b1';
}
console.log(result1);



const number = 10;
if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}



const score = prompt("Enter your score:");
let grade;
if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
} else {
  console.log("Invalid score!");
}

if (grade) {
  console.log(`Your grade is ${grade}`);
}


// Prompt the user to enter a month
const months = prompt("Enter a month (e.g. January, February, etc.):");

// Check which season the month belongs to
let season;
if (["December", "January", "February"].includes(month)) {
  season = "Winter";
} else if (["March", "April", "May"].includes(month)) {
  season = "Spring";
} else if (["June", "July", "August"].includes(month)) {
  season = "Summer";
} else if (["September", "October", "November"].includes(month)) {
  season = "Autumn";
} else {
  season = "Invalid month";
}

// Display the result to the user
alert(`The season for ${month} is ${season}.`);


for (var i = 0; i <= 10; i++) {
    var result2 = i * i;
    console.log(i + " x " + i + " = " + result);
  }
  
  console.log("10 x 10 = 100");
  


  let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("The sum of all numbers from 0 to 100 is: " + sum);




let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`Sum of all even numbers: ${evenSum}`);
console.log(`Sum of all odd numbers: ${oddSum}`);



let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}

let sumsArray = [sumEvens, sumOdds];
console.log(sumsArray); 



const language = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let i = 0; i < language.length; i++) {
  console.log(language[i]);
}



const fruits = ['banana', 'orange', 'mango', 'lemon'];

const reversedFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

