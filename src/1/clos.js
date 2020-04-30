function outer(){
    let x = 10;
    
    function inner(){
        console.log(x);
    }
    return inner
}

console.log(outer());