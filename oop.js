class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name, age, color) {
    super(name);
    this.age = age;
    this.color = color;
  }

  speak() {
    console.log(
      `${this.name} barks and is ${this.age} old and has ${this.color} color`
    );
  }
}

const dog = new Dog("Samo", 10, "brown");
dog.speak();
