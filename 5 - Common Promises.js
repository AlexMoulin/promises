// Fetching Data from a server
function fetchData() {
  return fetch("http://api.example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Fetch error: ", error));
}

//File I/O
function readIO() {
  const fs = require("fs");
  function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath),
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        };
    });
  }

  readFileAsync("example.txt")
    .then((data) => console.log(data))
    .catch((error) => console.error("File read error: ", error));
}

//Timed operations
function timedOperation() {
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  delay(2000).then(() => console.log("Two seconds have passed."));
}

// Multiple concurrant promises (parallel promises) => My favorite :D
function parallelPromises() {
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
  );

  Promise.all([promise1, promise2])
    .then((results) => results.forEach((result) => console.log(result)))
    .catch((error) => console.error("One or more promises failed: ", error));
}

// All settled
function allSettled() {
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
  );

  Promise.allSettled([promise1, promise2])
    .then((results) => results.forEach((result) => console.log(result)))
    .catch((error) => console.error("One or more promises failed: ", error));
}

// Any
function any() {
    const promise1 = Promise.reject(0);
    const promise2 = new Promise((resolve) =>
      setTimeout(resolve, 100, "quick")
    );
    const promise3 = new Promise((resolve) =>
      setTimeout(resolve, 1000, "slow")
    );
  
    Promise.any([promise1, promise2, promise3])
      .then((result) => console.log(result))
      .catch((error) => console.error("One or more promises failed: ", error));
}

// Race

function race() {
    const promise1 = Promise.reject(0);
    const promise2 = new Promise((resolve) =>
      setTimeout(resolve, 100, "quick")
    );
    const promise3 = new Promise((resolve) =>
      setTimeout(resolve, 1000, "slow")
    );
  
    Promise.race([promise1, promise2])
      .then((result) => console.log(result))
      .catch((error) => console.error("One or more promises failed: ", error));
}

race();
