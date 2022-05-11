function defineSuit(card) {
  // good luck
  let t;
  if (card.includes("♣")) t = "clubs";
  else if (card.includes("♦")) t = "diamonds";
  else if (card.includes("♥")) t = "hearts";
  else if (card.includes("♠")) t = "spades";
  return t;
}

console.log(defineSuit("Q♠"));
console.log(defineSuit("9♦"));
console.log(defineSuit("J♥"));
console.log(defineSuit("3♣"));
