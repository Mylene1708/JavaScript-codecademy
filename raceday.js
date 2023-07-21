// RACE DAY
// program to register runners and give them instructions

/* variable who store a random race number between 0 and 1000 */
let raceNumber = Math.floor(Math.random() * 1000);

/* variable checking if early register are true or false */
let earlyRegistered = false;

// variable who store the runner age
let runnerAge = 18;

/* if statement to assign a race number according to age and early egistered*/
if (runnerAge > 18 && earlyRegistered) {
  raceNumber += 1000;
  }

console.log(raceNumber);

if (runnerAge > 18 && earlyRegistered) {
  console.log(`Your number is ${raceNumber} and you race at 9:30 am.`);
} else if (runnerAge > 18 && !earlyRegistered) {
  console.log(`Your number is ${raceNumber} and you race at 11:00 am.`);
} else if (runnerAge === 18) {
    console.log('See the registration desk.');
} else {
  console.log(`Your number is ${raceNumber} and you race at 12:30 pm.`);
} 
