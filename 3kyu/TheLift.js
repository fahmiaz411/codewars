var theLift = function (queues, capacity) {
  let step = "up";
  let floorNow = 0;

  let peopleNow = [];
  let visited = [0];

  const action = () => {
    const checkOut = (i) => {
      let visit = false;
      if (peopleNow.length > 0 && peopleNow.includes(i)) {
        visited.slice(-1)[0] != i && visited.push(i);
        visit = true;
        while (peopleNow.includes(i)) {
          peopleNow.splice(peopleNow.indexOf(i), 1);
        }
      }
      return visit;
    };

    const checkIn = (i) => {
      const queue = queues[i].map((d) => d);
      let visit = false;
      for (let j = 0; j < queue.length; j++) {
        if (step == "up" ? queue[j] > i : queue[j] < i) {
          visit = true;
          if (peopleNow.length < capacity) {
            visit = false;
            peopleNow.push(queue[j]);
            queue[j] = null;
          }
        }
      }
      visit && visited.slice(-1)[0] != i && visited.push(i);
      return queue.filter((d) => d != null);
    };

    const checkVisit = (i, queue, visit) => {
      if (queues[i].length != queue.length) {
        !visit && visited.slice(-1)[0] != i && visited.push(i);
        queues[i] = queue;
      }
    };

    if (step == "up") {
      for (let i = 0; i < queues.length; i++) {
        const visit = checkOut(i);

        if (!queues[i][0] == undefined) continue;

        const new_queue = checkIn(i);

        checkVisit(i, new_queue, visit);

        if (floorNow < queues.length - 1) floorNow++;
      }
      step = "down";
    } else {
      for (let i = queues.length - 1; i >= 0; i--) {
        const visit = checkOut(i);

        if (!queues[i][0] == undefined) continue;

        const new_queue = checkIn(i);

        checkVisit(i, new_queue, visit);

        if (floorNow > 0) floorNow--;
      }
      step = "up";
    }
  };

  while (queues.filter((d) => d[0] != undefined)[0] != undefined) {
    action();
  }

  visited[visited.length - 1] != 0 && visited.push(0);

  return visited;
};

console.log(theLift([[], [], [4, 4, 4, 4], [], [2, 2, 2, 2], [], []], 2));
