function Engine(cyl,vol) {
 this.cyl = cyl;
 this.vol = vol;
}

Engine.prototype.power = 500

let car = new Engine(4,1000)
car.power = 600
console.log(car.__proto__.power);
