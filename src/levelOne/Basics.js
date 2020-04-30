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