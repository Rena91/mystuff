//when you need a method to bind an object
const person = {
    points:23,
    score: () => {
         console.log(this)
       return ++this.points
    }
}

console.log(person.score())