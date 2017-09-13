class Animal {
	constructor(breed){
		this.breed = breed;
	}

	bark(){
		console.log(this.breed + " is barking ");

	}
}


class Dog extends Animal{
}
var dog = new Dog("poodle");
dog.bark();
