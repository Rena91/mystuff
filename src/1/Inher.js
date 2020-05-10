//Object inheritance
//function constructors

function User(name,gender){
    this.name = name;
    this.gender = gender;

}
User.prototype.greet = function() {
    console.log('hello ' + this.name + ' \n' + this.gender)
}

let rev = new User('rev','M')
let dev = new User('dev','F')

rev.greet()
dev.greet()

console.log((rev.__proto__) === (dev.__proto__))





