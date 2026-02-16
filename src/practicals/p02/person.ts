export class Person {
    firstname: string
    lastname: string
    private age: number

    constructor(firstname: string="", lastname: string="", age: number=0) {
        this.firstname = firstname
        this.lastname =lastname
        this.age = age
    }   

    public setAge(age:number):void {
        this.age = age
    }
    public getAge():number {
        return this.age
    }
    public getFullName():string {
        return `${this.firstname} ${this.lastname}`
    }
    static readonly COUNTRY:string = "Thailand"
}


// const aaa = new Person("f","e",5)
// console.log(aaa.getFullName());
// console.log(aaa.getAge());
// console.log(Person.COUNTRY());

