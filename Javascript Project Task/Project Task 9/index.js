let raceNumber = Math.floor(Math.random() * 1000);
let raceRegisteredEarly = true;
let runnersAge = 8;

if (runnersAge => 18 && raceRegisteredEarly === true) {
raceNumber = (raceNumber + 1000);
}

if (runnersAge => 18 && raceRegisteredEarly === true) {
console.log("Race will start 9:30 am and your number will be " + raceNumber);
}
else if (runnersAge > 18 && raceRegisteredEarly === false) {
  console.log("Late adults run at 11:00 am and your number will be "+ raceNumber);
}
else if (runnersAge < 18) {
  console.log("Youth registrants run at 12:30 pm (regardless of registration) and your race number will be " + raceNumber);
}