//var is a functional scope
var val = 990;
function getX(){
    console.log(val,"value inside function X");
}

getX();
getX1();
getX2();
getCl()();

function getX1(){
    var val;
    console.log(val,"value inside function X1");
}

function getX2(){
    console.log(val,"value inside function X2");
    var val;
}

function getCl(){
   
    return function(){
        console.log(val ,"inner function");
    }
}
