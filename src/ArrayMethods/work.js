const data = [1,2,3,4,5,6,7,8];
const dataObj = [{id:1,name:'Apple',type:'fruit'},
                {id:2,name:'Cat',type:'animal'},
                {id:3,name:'Mango',type:'fruit'},
                {id:4,name:'Lilly',type:'flower'},
                {id:5,name:'White',type:'color'}
            ];

/*forEach - array will iterate and not mutate ;return undefined*/            
data.forEach(x => 2*x)
console.log(data,'----forEach');
/*Map - array will iterate and not mutate ;return undefined*/

data.map(x => 3*x);
console.log(data,'---MAP');

/*slice -  returns the selected array returns new Aray */
console.log(data.slice(1,3),'---slice');
console.log(data,'---sliceTwo');

/*splice method changes the original array and returns the removed items 
https://www.tothenew.com/blog/javascript-splice-vs-slice/
*/

console.log(data.splice(0,1,"101"),'...splice')
console.log(data,'---spliceTwo');

/*some -> iterate all over the array and if it finds the first element true, iteration stops*/
dataObj.some(obj => obj.type==="fruit")
console.log(dataObj.some(obj => obj.type==="fruit"),'-->some');
/*every -> interate all over all the array*/ 
dataObj.every(obj => obj.type==="fruit")
console.log(dataObj.some(obj => obj.type==="fruit"),'-->every');
/*filter ->  iterate all and filter the elements */
const filtered = dataObj.filter(obj => obj.type==="fruit");
console.log(filtered);

/*
flat
*/
let arr1 = [1,2,3,[4,5,6]]

// console.log(arr1.flat(1),'..flat');
/*
flatMap
*/
/*reduce*/
let arr = ['y','a','r','r','a'];
console.log(arr.reduce((c,a) => c+a),'..reduce');
/*reduceRight*/
console.log(arr.reduceRight((c,a) => c+a),'..reduceRight');

/*
copywithin 
*/

/**include -returns true or false over the iteration */

 let ar = [1,2,3,4,5];
console.log(ar.includes(2),'includes')

 /* find - returns the element or undefined if it  found in the iteration */

 console.log(ar.find(x => x === 5),"Finds");
/*
A - B 
B - A
A U B
A ^ B
SOME AND EVERY
FIND AND FILTER
*/
let a = [2,4,6,8,"A","B"];
let b = [1,3,5,7,"A","B"];

console.log(a.filter(x => b.every(y => y !== x )),"A_B");
console.log(b.filter(x => a.every(y => y !== x )),"B-A");
console.log([...a,...b],"AUB");
console.log(a.filter(x => b.some(y => y === x )),"A^B");

console.log(Array.from('Foo'));


