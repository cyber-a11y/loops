/**const age = 20;
if(age >= 18) {
    console.log("you are an adult.");
}**/
/**const score = 87;
if (score >= 90) {
    console.log("You got an A.");
  } 
  else if (score >= 80) {
    console.log("You got a B.");
  } 
  else if (score >= 70) {
    console.log("You got a C.");
  } 
  else {
    console.log("You need to improve your score.");
  }**/
  /**const isRaining = true;

if (isRaining) {
  console.log("Bring an umbrella.");
} else {
  console.log("You don't need an umbrella.");
}**/
/**const temperature = 25;
const isRaining = false;

if (temperature > 30) {
  if (isRaining) {
    console.log("It's hot, but don't forget your umbrella.");
  } else {
    console.log("It's hot outside.");
  }
} else {
  console.log("It's not too hot.");
}**/
//sample array of numbers
const numbers = [38,94,65,83,21];
//function to calculate average
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  const average = calculateAverage(numbers);
console.log(`The average of the numbers is: ${average}`);

 
