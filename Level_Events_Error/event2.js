var username="bhimsen";
var event =require("events");
var emitter= new  event.EventEmitter();

function welcome(){
  console.log("Welcome to All");
}
function user(){
  console.log(username+" Called");
}
emitter.setMaxListeners(5);
emitter.on("MyEvent",welcome);
emitter.on("MyEvent",user);
//emitter.removeListener("MyEvent",welcome); 
emitter.emit("MyEvent");
//console.log(emitter.listenerCount("MyEvent"));
//emitter.removeListener("MyEvent",user);
console.log(emitter.getMaxListeners());
emitter.removeAllListeners("MyEvent");
console.log(emitter.listenerCount("MyEvent"));