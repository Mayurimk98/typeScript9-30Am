"use strict";
//Program 1
// class Vehical {
//     color: string = "Red"
//     model: string = "Audi"
//     display(): void {
//         console.log(this.color)
//     }
// }
// let audi = new Vehical()
// console.log(audi.color) //Red
// console.log(audi.model) //Audi
// audi.display() //Red
// let BMW=new Vehical()
// console.log(BMW.color)
// console.log(BMW.model)
// BMW.display()
//progarm2
// class Vehical {
//     color: string
//     modelNumber: number
//     type: string
//     constructor(color: string, modelNumber: number, type: string) {
//         this.color = color
//         this.modelNumber = modelNumber
//         this.type = type
//     }
//     display(): void {
//         console.log(this.color)
//     }
// }
// let Audi = new Vehical("black", 1234, "roadStart")
// Audi.color //black
// Audi.modelNumber //1234
// Audi.type //roadstar
// Audi.display() //black
// let Nano = new Vehical("white", 2345, "van")
// Nano.color
// Nano.modelNumber
// Nano.type
// Nano.display()
//problem 3
// class Vehical {
//     constructor(public color: string, public modelNumber: number) {
//     }
//     display() {
//         console.log(this.color)
//     }
// }
// let audi=new Vehical("blue",7890)
// console.log(audi.color)
// console.log(audi.modelNumber)
// audi.display()
//program 4
// class Vehical {
//     static color: string = "red"
//     static modelNumber: number = 123456
//     static displayColor() {
//         console.log(Vehical.color)
//     }
//     displayModelNo() {
//         console.log('my number is 12344')
//     }
// }
// console.log(Vehical.color)
// console.log(Vehical.modelNumber)
// Vehical.displayColor()
// let abc = new Vehical()
// abc.displayModelNo()
//Program5
// class PersonOne {
//     private firstName: string
//     private lastName: string
//     private age: number
//     constructor(fName: string, lName: string, ag: number) {
//         this.firstName = fName
//         this.lastName = lName
//         this.age = ag
//     }
//     public getName(){
//         console.log(this.firstName)
//     }
//     getLastName(){
//         console.log(this.lastName)
//     }
//     getAge(){
//         console.log(this.age)
//     }
// }
// let rupali=new PersonOne("rupali","savant",56)
// rupali.getName()
// rupali.getLastName()
// rupali.getAge()
//Progarm6
class PersonOne {
    constructor(fName, lName, ag) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = ag;
    }
    // setFirstName(name:string){
    //     this.firstName=name
    // }
    info() {
        console.log(this.firstName);
    }
}
let mayuri = new PersonOne("Mayuri", "Katwe", 25);
//console.log(mayuri.firstName)
console.log(mayuri.lastName);
console.log(mayuri.age);
mayuri.info();
