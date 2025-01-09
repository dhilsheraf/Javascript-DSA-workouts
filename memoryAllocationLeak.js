//this is example and workouts of memory allocation and memory leak with example


//Variables declared without let, const, or var are attached to the global object (window in browsers).

function createLeak() {
    leakedVar = "I'm a leak!"; // Implicit global variable
}
createLeak();


//Forgotten Timers or Callbacks
//setInterval or setTimeout keeps a reference to its callback, which can prevent associated objects from being garbage collected.

function startTimer() {
    setInterval(() => console.log("Still running"), 1000);
}
startTimer(); // Timer runs forever unless explicitly cleared


