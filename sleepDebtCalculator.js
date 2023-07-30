// SLEEP DEBT CALCULATOR

// determine how many hours of sleep each night of the week
const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 6;
  } else if (day === "friday") {
    return 6;
  } else if (day === "saturday") {
    return 9;
  } else if (day === "sunday") {
    return 11;
  } else {
    return "error";
  }
};

// console.log(getSleepHours("monday"));

// total sleep hours 
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

console.log(getActualSleepHours());

// ideal sleep hours that you prefer
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

console.log(getIdealSleepHours());


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  }  else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.');
  } else {
    console.log('You should get some rest.');
  }
};

console.log(calculateSleepDebt());
