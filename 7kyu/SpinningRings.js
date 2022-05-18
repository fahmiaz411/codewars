function spinningRings(innerMax, outerMax) {
  // your code here
  let inner = 0,
    outer = 0,
    move = 0;

  const innerClock = () => {
    if (inner == 0) {
      inner = innerMax;
    } else {
      inner--;
    }
  };
  const outerClock = () => {
    if (outer == outerMax) {
      outer = 0;
    } else {
      outer++;
    }
  };

  while (!move || inner != outer) {
    innerClock();
    outerClock();
    move++;
  }

  return move;
}
