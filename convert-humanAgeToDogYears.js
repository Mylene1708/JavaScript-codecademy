// CONVERT YOUR AGE FROM HUMAN YEARS TO DOG YEARS

// create variable to store your age
const myAge = 14;

/*The first two years of a dog's life counst as 10.5 dog years each*/
let earlyYears = 2;
earlyYears *= 10.5;

/* Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.*/
let laterYears = myAge - 2;

/* Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. */
laterYears *= 4 ;

// create variable to store the result
const myAgeInDogYears = earlyYears + laterYears;

// create variable to store my name in lowercase
const myName = 'Mylene'.toLowerCase();


/* statement that displays your name and age in dog years */
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
