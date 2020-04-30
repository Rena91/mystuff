  const x = 0;
 function constT() {
    //  console.log(x)
      const x = 1;
     function constT2() {
      const x = 5;
        console.log(x,2)
     }
     console.log(x,3)
     return constT2()
 }
 
console.log(x,1)
 constT()
