let obj = {
    name:'Revanth',
    getName: function() {
        return 'Hello ' + this.name + '!!'
    }
}

console.log(obj['getName']());
