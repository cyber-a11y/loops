/**for (let i = 0; i = 5; i++) {
    console.log(`Iteration ${i}`);
  }**/

  /**let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}**/
/**let userInput;
do {
  userInput = prompt("Enter 'exit' to end the loop:");
} while (userInput !== "exit");**/

  /**for (let i = 0; i <= 20; i += 2) {
    console.log(`Iteration ${i}`);
  }**/
  
  /**const factorialOf = integer => {
    let factorial = 1;
  
    for(let i = 1; i <= integer; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  console.log(factorialOf(5));**/
  
  /**let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
  }**/
  /**let count = 0;

while (true) {
  const randomNumber = Math.floor(Math.random() * 50) + 1;
  count++;

  console.log(`Generated number ${randomNumber}`);

  if (randomNumber > 40) {
    console.log(`Found a number greater than 40: ${randomNumber}`);
    console.log(`Total numbers generated before finding a number greater than 40: ${count}`);
    break;
  }
}**/
/**const minNumber = 1;
const maxNumber = 100;
const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

do {
  const userGuess = parseInt(prompt(`Guess the number between ${minNumber} and ${maxNumber}:`));

  if (isNaN(userGuess)) {
    alert("please enter a valid number.");
  } else {
    attempts++;
    if (userGuess < secretNumber) {
      alert("too high! try again.");
    } else {
      alert(`congratulations! you guessed the number ${secretNumber} in${attempts} attempts.`);
    }
  }
} while (userGuess !== secretNumber);**/

