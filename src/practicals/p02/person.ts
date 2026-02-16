export class Person {
    fisrtname: string
    lastname: string
    age: number = 0

    constructor(firstname: string, lastname: string, age: number) {
        this.fisrtname = firstname
        this.lastname =lastname
        this.age = age
    }   

    setAge(age:number) {
        this.age + age
    }
    getAge() {
        return `${this.age}`
    }
    getFullName() {
        return `${this.fisrtname} ${this.lastname}`
    }
}

const person = new Person("Pasa", "er",8) 
console.log(person.getFullName());
console.log(person.getAge);

