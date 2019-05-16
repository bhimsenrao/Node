 var event =require("events");
 var emitter= new  event.EventEmitter();

 var user="bhimsen";
 
 emitter.on("MyEvent",   // MyEvent  will become the registered event
    function(username){   // anonymous function defined here is the listener
        console.log("Welcome to "+username); // activity of the event
   });

emitter.emit("MyEvent",user);

