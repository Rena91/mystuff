'use strict'
const obj = { animal:'Fish', mammal:false };
// console.log(obj);

// prototype inheritance
// functional prototype
// .prototype
// object prototype
// __proto__
obj.__proto__ = {val:25};
console.log(obj.__proto__);
// console.log(obj);
let ar = [1,2,3,4];

Object.defineProperty(ar,'last',{get:function() {
    return this[this.length-1]
}});

Array.prototype.lastt = function() {
   return this[this.length-1]
}
console.log(ar.lastt());