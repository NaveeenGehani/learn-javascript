// ++++++++++++++ IIFE ==> Immediate Invoked Function Expressions ++++++++++++



/*
Why Use an IIFE?
Avoids Global Pollution: Variables declared inside an IIFE stay local to that function and cannot leak into the global scope.
Data Privacy: It hides variables from the outside world, creating a secure, encapsulated block of code.
Runs Initialization Once: Perfect for code that only needs to execute once during setup (e.g., configuring database connections or third-party widgets).
Asynchronous Context: Allows you to use await at the top level in environments or file configurations that do not support native top-level await.
*/

// always put a semicolon at the end of the IIFE because without semicolon it considers the next block as argument passed to IIFE

// way 1 : Named IIFE
(function connect(){
    console.log("DB Connected 1")
})();

// way 2
(function (){
    console.log("DB Connected 2")
})();

// way 3
(() => {
  console.log("DB Connected 3");
})();


// pass arguments and parameters to IIFE

(function (db) {
    console.log(`${db} Connected`)
})("MongoDB");





