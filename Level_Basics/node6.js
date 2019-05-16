var recursive = function () {  
    console.log("Hey! 1000 millisecond completed!..");   
    setTimeout(recursive,1000);  
}  
recursive();
clearTimeout(recursive);
console.log('end');
