export class Person {
    firstname: string
    lastname: string
    private age: number

    constructor(firstname: string="", lastname: string="", age: number=0) {
        this.firstname = firstname
        this.lastname =lastname
        this.age = age
    }   

    setAge(age:number):void {
        this.age = age
    }
    getAge():string {
        return `${this.age}`
    }
    getFullName():string {
        return `${this.firstname} ${this.lastname}`
    }
    static COUNTRY(_country:string):string {
        return "Thailand"
    }
}


// const aaa = new Person("f","e",5)
// console.log(aaa.getFullName());
// console.log(aaa.getAge());
// console.log(Person.COUNTRY());

