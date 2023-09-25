/*
    Why do JavaScript developers always prefer Promises overr Callbacks?
    Because Promises never stand them up and always keep their word, while Callbacks have a tendency to call back later!

    Promises were created to do what callbacks do but better:
        - They have better error handling
        - Create less confusing code (more readable)
        - Are more flexible.

    Key language:
        - Fulfill: resolves or rejects
        - Resolve: completes successfully
        - Reject: completes unsuccessfully (fail/error...)
*/

function callback() {
  function asyncOperationUsingCallback(callback) {
    setTimeout(function () {
      const shouldFail = Math.random() < 0.5;
      if (shouldFail) {
        callback("Error: Something went wrong", null);
      } else {
        callback(null, "Operation completed successfully!");
      }
    }, 1000);
  }

  asyncOperationUsingCallback(function (error, result) {
    if (error) {
      console.error("Callback error: ", error);
    } else {
      console.log("Callback result: ", result);
    }
  });
}

function promise() {
  function asyncOperationUsingPromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const shouldFail = Math.random() < 0.5;
        if (shouldFail) {
          reject("Error: Something went wrong");
        } else {
          resolve("Operation completed successfully!");
        }
      }, 1000);
    });
  }

  asyncOperationUsingPromise()
    .then(function (result) {
      console.log("Promise result: ", result);
    })
    .catch(function (error) {
      console.error("Promise error: ", error);
    })
    .finally(() => console.log("Async operation completed."));
}

callback();
