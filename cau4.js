class Animal {
    constructor(name,weight) {
        this.name=name;
        this.weigth=weight
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weigth;
    }

}
let objAnimal1 = new Animal("Elephant",45.6)