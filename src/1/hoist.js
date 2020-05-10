(function hoist() {
    //console.log(h)// reference error
    let h = 0;
    console.log(h)
})()

/*
let bindings are created at top of the block scope 
containing the declarations,commonly called HOISTING
*/