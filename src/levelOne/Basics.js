/* check the number is prime :
A prime number is a number which is divisible by its own number and One. :)
Dividend = (Divisor * Quotient) + Remainder ;
  11 ) 121 ( 11 |  Divisor ) Dividend ( Quotient
       121      |           
       ---      |            ---------
        0       |            Remainder
       ---      |            ---------
Dividend : it is the number that you are dividing.
Divisor : It is the number that you are dividing By.
*/
 const isPrime = (dividend) => {
    let divisor = 2;
    while(dividend > divisor){
        if (dividend%divisor === 0) {
            return false; 
        } else {
            divisor++;
        }
    }
    return true;
}

console.log(isPrime(137));

 const isPrime2 = (dividend) => {
    for(let divisor = 2 ; divisor < dividend; divisor++){
        if (dividend%divisor === 0) {
            return false; 
        }
    }
    
    return true;
}
console.log(isPrime2(388));

 const gcd = (numA,numB) => {
     
    let primeObj = {};
      
    for (let i = 2; i <= numA; i++){
        primeObj[i] = isPrime(i) ? 1 : 0;
    }

    console.log(primeObj,"PL")

   let obj = {}
   let three = 0;
    while( numA > 1 ) {
        if ((numA % 2) == 0) {
            obj["2"] = obj["2"] ? obj["2"]+1 : 1;
            numA = numA/2;
        } else if ((numA % 3) ==0) {
             obj["3"]  = obj["3"] ? obj["3"] + 1 : 1;
            numA = numA/3;
        }else if (numA % 5 == 0) {
            obj["5"] = obj["5"] ? obj["5"]+1 : 1;
            numA = numA/5;
        }else if (numA % 7 == 0) {
            obj["7"] = obj["7"] ? obj["7"]+1 : 1;
            numA = numA/7;
        }       
    }
    
    console.log(obj,"LL");
}
console.log(gcd(9));