//primitive : A type of data 
// that represents a single value.
  
//pass by value 

let a = 10 // a has a mem 0x001 and contains 10 value
let b // b has a mem 0x002 
b = a // here a value is passing to a new mem

//pass by referece 

let p = {} // a has a mem 0x003 and holds object
let q; // b has a mem 0x004
p = q // here both the varaibles will refers to the same Object 0x003.

//but in the above these are different 

var x = 1

function change(y){
    y = 2
}

console.log(change(x),x)

function changeObj(d){
    d.prop1 = function(){}
    d.prop2 = {}
}

var c = {}
c.prop1 = {}

changeObj(c)
console.log(c)

