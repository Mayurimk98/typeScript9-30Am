"use strict";
// class Person {
//     fullName: string
//     rollNumber: Number
//     constructor(fName: string, RollNo: number) {
//         this.fullName = fName
//         this.rollNumber = RollNo
//     }
//     display(): void {
//         console.log(`My fullname is ${this.fullName}`)
//     }
// }
// let mayuri:Person = new Person("MayuriKatwe", 1234)
// console.log(mayuri.fullName)
// console.log(mayuri.rollNumber)
// mayuri.display()
//===============================================
//access modifier
//public , private, protected, readonly
// class Student1 {
//     public firstName1: string
//     constructor(firstName: string) {
//         this.firstName1 = firstName
//     }
//     public info1(): string {
//         return this.firstName1
//     }
// }
// let shamal1=new Student1('shamal')
// console.log(shamal1.firstName1)
// console.log(shamal1.info1())
// class Student1 {
//     private firstName1: string
//     constructor(firstName: string) {
//         this.firstName1 = firstName
//     }
//     private info1(): string {
//         console.log(this.firstName1)
//         return (`my name is ${this.firstName1}`)
//     }
//     public disaply():string {
//         return this.info1()
//     }
// }
// let shamal1 = new Student1('shamal')
// //shamal1.firstName1  //not access
// //shamal1.info1()
// let a1 = shamal1.disaply()
// console.log(a1)
//========================================
// class Greeting {
//     msg: string
//     constructor(message: string) {
//         this.msg = message
//     }
//     display12(){
//         console.log(this.msg)
//     }
// }
// let greet = new Greeting('hello all!!!')
// greet.display12() //
// class Greeting {
//     constructor(public message: string) {}
//     display():void{
//         console.log(this.message)
//     }
// }
// let greet = new Greeting('hello all!!!')
// greet.display()
//readOnly
class Person {
    constructor(name1, roll) {
        this.name1 = name1;
        this.rollNumber123 = roll;
    }
    setrollNo(rollNo) {
        return this.rollNumber123 = rollNo;
    }
    getName() {
        console.log(this.name1);
    }
}
let ganesh = new Person('ganesh', 456);
//console.log(ganesh.rollNumber123)
let newRollNo = ganesh.setrollNo(10000);
console.log(newRollNo);
