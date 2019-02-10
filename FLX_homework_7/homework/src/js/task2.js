let minRange = 0;
let maxRange = 5;
let attempts = 3;
let totalPrize = 0;
let maxPrize = 10;
let agreeToPlay = confirm('Do you want to play a game?');
if (agreeToPlay) {
  let randomNumber = Math.floor(Math.random() * (maxRange + 1 - minRange));
  let currentPrize = maxPrize;
  while (attempts) {
    let userAnswer = parseInt(prompt(
      'Enter a number from ' + minRange + ' to ' + maxRange +
      '\nAttempts left: ' + attempts +
      '\nTotal prize: ' + totalPrize +
      '\nPossible prize on current attempt: ' + currentPrize, '0'))
    if (userAnswer === randomNumber) {
      maxRange *= 2;
      totalPrize += currentPrize;
      maxPrize *= 3
      agreeToPlay = confirm('Congratulation! Your prize is: ' + totalPrize + '. Do you want to continue?');

      break;
    } else {
      attempts--;
      currentPrize = Math.floor (currentPrize / 2);
    }
  }
  if (attempts === 0) {
    alert('Thank you for a game. Your prize is ' + totalPrize);
    agreeToPlay = confirm('Do you want to play a game again?');
    attempts = 3;
    totalPrize = 0;
    maxRange = 5;
    maxPrize = 10;
  }
} else {
  alert('You did not become a millionaire, but can.');
}
