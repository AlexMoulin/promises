/* 
    Callbacks are fundamental when dealing with asynchronous programming. They allow you to pass a function as an argument to another function and have that function
    executed at a later time, typically after some asynchronous operation has completed.
*/
function callbackDemo1() {
  function doSomethingAsync(callback) {
    setTimeout(function () {
      console.log("Async operation completed.");
      // Call the callback function
      callback();
    }, 2000); // simulates an async operation that takes 2 seconds
  }

  function callbackFunction() {
    console.log("Callback function executed.");
  }

  // Call the function with the callback
  doSomethingAsync(callbackFunction);

  console.log("Main program continues to execute.");
}

function callbackDemo2() {
  // Simulate an async operation (like feching data from a server)
  function fetchData(callback) {
    setTimeout(function () {
      const data = { id: 1, song: "Promises" };
      callback(data);
    }, 2000); //Simulating 2 second delay
  }

  // Function that processes data once it's fetched
  function processData(data, callback) {
    console.log(`Processing data: ${data.song}`);
    callback(`Processed data for ID ${data.id}`);
  }

  // Callback function that handles the processed data
  function handleProcessedData(result) {
    console.log(`Handled data: ${result}`);
  }

  // Fetch data and process it using callbacks
  fetchData(function (data) {
    processData(data, function (result) {
      handleProcessedData(result);
    });
  });

  console.log("Main program continues to execute.");
}

callbackDemo1();
