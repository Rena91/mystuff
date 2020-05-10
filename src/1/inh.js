/**
 * Prototype speak()
 * ^
 * |
 * Animal
 * 
 * Prototype (Animal)
 * ^
 * |
 * Cat
 * 
 */
function Animal() {}

Animal.prototype = function speak() { console.log('GRUNT!!!')};

function Cat(nomenclature,color) {
    console.log(arguments);
    this.nomenclature = arguments[0]
    this.color = arguments[1]
}
Cat.prototype = Object.create(Animal.prototype);

const fluffy = new Cat();
const brodo = new Cat('Brodo','pink');

// console.log(Object.keys(brodo));
console.log(Cat.prototype.name);