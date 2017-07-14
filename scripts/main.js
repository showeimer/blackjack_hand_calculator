/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let sum = 0;

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === "A") {
      sum += 1;
      // Defaulting the value of Ace to 1 because I know that if there are two Aces in the hand, only one can be 11 because two 11s would result in a game loss
    } else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      sum += 10;
    } else {
      sum += parseInt(hand[i]);
    }
  }

  if (hand.includes("A") && sum <= 11) {
    // Setting condition to toggle only one Ace to a value of 11.
    sum += 10;
    // Previously I set Aces to default to 1, therefore if I want to change one Ace to 11, I would only need to add 10
    // If the sum up until this point is 11 or less, I would want to change one Ace to 11 resulting in 21 or less.
    // If the sum is at 12 or higher at this point then turning my Ace from 1 to 11 would result in a game loss (12 + 10 = 22)
  }
  return sum;
}


console.log(handValue(["A"]));
console.log(handValue(["A", "A"]));
console.log(handValue(["10", "A"]));
console.log(handValue(["11", "A"]));
console.log(handValue(["A", "11"]));
console.log(handValue(["A", "10"]));



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
