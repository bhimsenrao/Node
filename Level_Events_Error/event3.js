 var event =require("events");
 var emitter= new  event.EventEmitter();
 
function handler(){
  console.log("Welcome to All");
}
function welcome(){
  console.log("Testing event2 ");
}

emitter.on("MyEvent",handler);
emitter.on("MyEvent",welcome);

// emitter.removeListener("MyEvent",handler);
 emitter.emit("MyEvent");