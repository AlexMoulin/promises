/*
    One of the main things Promises setout to resolve is something call "Callback hell" or the "pyramid of doom".
    This occurs when you have chains of async operations dependant on one another

*/

function callbackWithFailureDemo() {
    // Simulate an async operation (like feching data from a server)
    function fetchData(successCallback, errorCallback) {
      setTimeout(function () {
        const shouldSucceed = Math.random() < 0.5; // Simulate random success/failure
        if (shouldSucceed) {
          const data = { id: 1, song: "Promises" };
          successCallback(data);
        } else {
          const error = "Failed to fetch data.";
          errorCallback(error);
        }
      }, 2000); //Simulating 2 second delay
    }
  
    // Function that processes data once it's fetched
    function processData(data, successCallback, errorCallback) {
      console.log(`Processing data: ${data.song}`);
      const shouldSucceed = Math.random() < 0.5; // Simulate random success/failure
      if (shouldSucceed) {
        successCallback(`Processed data for ID ${data.id}`);
      } else {
        const error = "Failed to process data.";
        errorCallback(error);
      }
    }
  
    // Callback function that handles the processed data
    function handleProcessedData(result) {
      console.log(`Handled data: ${result}`);
    }
  
    function handleError(error) {
      console.error(`Error: ${error}`);
    }
  
    // Fetch data and process it using callbacks
    fetchData(
      function (data) {
        processData(
          data,
          function (result) {
            handleProcessedData(result);
          },
          function (error) {
            handleError(error);
          }
        );
      },
      function (error) {
        handleError(error);
      }
    );
  
    console.log("Main program continues to execute.");
}

callbackWithFailureDemo();