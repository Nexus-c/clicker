let value = 0;
let mmps = 0; // money made per second
let e = document.getElementById("value");
let e2 = document.getElementById("mmps");

function best() {
    value++;
    e.innerHTML = value;
    e2.innerHTML = mmps;
}

function buy1() {
    // Function logic for "Buy 1" button
    if (value >= 100) {
        value -= 100;
        Math.round(value)
        mmps += 1;
        e.innerHTML = value;
        e2.innerHTML = mmps;
    }
    else {
        alert("You don't have enough money to buy this item.");
    }
}

function buy10() {
    // Function logic for "Buy 10" button
    if (value >= 1000) {
        value -= 1000;
        Math.round(value)
        mmps += 10;
        e.innerHTML = value;
        e2.innerHTML = mmps;
    }
    else {
        alert("You don't have enough money to buy this item.");
    }
}

function buy100() {
    // Function logic for "Buy 100" button
    if (value >= 10000) {
        value -= 10000;
        Math.round(value)
        mmps += 10.0;
        e.innerHTML = value;
        e2.innerHTML = mmps;
    }
    else {
        alert("You don't have enough money to buy this item.");
    }
}

function buy1000() {
    // Function logic for "Buy 1000" button
    if (value >= 10000) {
        value -= 10000;
        Math.round(value)
        mmps += 1000;
        e.innerHTML = value;
        e2.innerHTML = mmps;
    }
    else {
        alert("You don't have enough money to buy this item.");
    }
}

function buy10000() {
    // Function logic for "Buy 10000" button
    if (value >= 100000) {
        value -= 100000;
        Math.round(value)
        mmps += 10000;
        e.innerHTML = value;
        e2.innerHTML = mmps;
    }
    else {
        alert("You don't have enough money to buy this item.");
    }
}

function buy100000() {
    // Function logic for "Buy 100000" button
    if (value >= 1000000) {
        value -= 1000000;
        Math.round(value)
        mmps += 100000;
        e.innerHTML = value;
        e2.innerHTML = mmps;
    }
    else {
        alert("You don't have enough money to buy this item.");
    }
}

function buy1000000() {
    // Function logic for "Buy 1000000" button
    if (value >= 10000000) {
        value -= 10000000;
        Math.round(value)
        mmps += 1000000;
        e.innerHTML = value;
        e2.innerHTML = mmps;

    }
    else {
        alert("You don't have enough money to buy this item.");
    }
}

let lastTime = performance.now(); // in milliseconds

function loop(currentTime) {
  let delta = (currentTime - lastTime) / 10000000; // convert to seconds
  lastTime = currentTime;

  console.log(`Delta time: ${delta.toFixed(3)} seconds`);

  // Do something with delta, like update game objects here...

  value += mmps * delta;
  e.innerHTML = value
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);