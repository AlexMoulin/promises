/*
    Javascript is single-threaded, non-blocking, and asynchronous

    Single-threaded/Multi-threaded:
        ST: Can only execute one instruction at a time
            Thread: Task1 -> Task2 -> Task3
        MT: Can execute multiple instructions at the same time
            Thread1: Task1 -> Task2 -> Task3
            Thread2: Task1 -> Task2 -> Task3
            Thread3: Task1 -> Task2 -> Task3
            ...

    Non-blocking: 
        Doesn't wait for a previous instruction to finish executing before moving on the next
    
    Asynchronous:
    Synchronous Operation: Execution: [start, 10s finish]->[start, 5s finish]->[start, 20s finish] 
            (total execution time from start task1 to task3 finish: 35s )
    Async Operations: Execution: [Start, 10s,       finish]
                                 [Start, 5s, finish]
                                 [Start, 20s,                     finish]  
            (total execution time from task1 start to task3 finish: 20s)

    How can it be Async and Singlethreaded? The call stack, callback queue, and web api (Loupe)    

*/
function runBasic() {
  console.log("First event");
  setTimeout(() => {
    console.log("Second event");
  }, 1000);
  console.log("Third event");
}

function runBasic2() {
    console.log("First event");
    setTimeout(() => {
      console.log("Second event");
    }, 0);
    console.log("Third event");
}

runBasic()