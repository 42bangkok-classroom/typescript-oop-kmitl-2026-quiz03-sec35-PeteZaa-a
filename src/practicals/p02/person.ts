export class Person {
    firstname: string
    lastname: string
    private age: number

    constructor(firstname: string="", lastname: string="", age: number=0) {
        this.firstname = firstname
        this.lastname =lastname
        this.age = age
    }   

    setAge(age:number) {
        this.age = age
    }
    getAge() {
        return `${this.age}`
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
    static COUNTRY(_country:string) {
        return "Thailand"
    }
}


// const aaa = new Person("f","e",5)
// console.log(aaa.getFullName());
// console.log(aaa.getAge());
// console.log(Person.COUNTRY());

