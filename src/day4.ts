
// //class => access modifier

// // class Student {
// //     fullName: string
// //     rollNumber: Number
// //     constructor(Fname: string, RollNo: number) {
// //         this.fullName = Fname
// //         this.rollNumber = RollNo
// //     }
// //     display(): string {
// //         return this.fullName
// //     }

// // }

// // let shamal:Student = new Student("ShamalSharma", 1234)
// // console.log(shamal)

// //====================================================================

// //private,public,protected,readOnly

// // class Student {
// //     private firstname1: string
// //     public rollNumber1: number

// //     public constructor(fname1: string, roNo1: number) {
// //         this.firstname1 = fname1
// //         this.rollNumber1 = roNo1
// //     }

// //     getName(): string {
// //         console.log(this.firstname1)
// //         return this.firstname1
// //     }
// // }

// // let ram = new Student('Ram', 131)
// // console.log(ram.rollNumber1)

// // console.log(ram.getName())

// //console.log(ram.firstName1)


// //=============================================

// // class Student {
// //     private firstname1: string
// //     public rollNumber1: number

// //     public constructor(fname1: string, roNo1: number) {
// //         this.firstname1 = fname1
// //         this.rollNumber1 = roNo1
// //     }

// //     public getName(): string {
// //         this.info()
// //         console.log(this.firstname1)
// //         return this.firstname1
// //     }

// //     private info(): void {
// //         console.log(`my name is ${this.firstname1} and my rollnumber is ${this.rollNumber1}`)
// //     }
// // }

// // let vaibhav = new Student("Vaibhav", 100)
// // let a123 = vaibhav.getName()
// // console.log(a123)

// //==============================================================
// class Student {

//     public constructor(private fname1: string, public roNo1: number) { }

//     public getName(): string {
//     this.info()
//     console.log(this.fname1)
//     return this.fname1
// }

//     private info(): void {
//     console.log(`my name is ${this.fname1} and my rollnumber is ${this.roNo1}`)
// }
// }

// let vaibhav = new Student("Vaibhav", 100)
// let a123 = vaibhav.getName()
// console.log(a123)



// class greet {
//     private name1: string
//     constructor(private name1: string) {
//     this.name1 = name1
//     }
// }

// let greeting = new greet("Mayuri")

// //ORR
// class greet {
//     constructor(private name1: string) {}

// }

// let greeting = new greet("Mayuri")


//readOnly
// class Student {
//     private name1: string
//     public constructor(name1: string) {
//         this.name1 = name1
//     }

//     public setName(name: string) {
//         console.log(this.name1) //Madhari
//         return this.name1 = name
//     }
// }

// let madhuri = new Student('Madhuri')

// let newname = madhuri.setName('vaishali')
// console.log(newname)


class Student {
    private readonly name1: string
    public constructor(name1: string) {
        this.name1 = name1
    }

    // public setName(name: string) {
    //     console.log(this.name1) //Madhari
    //     return this.name1 = name
    // }

    public getName1():string{
        return this.name1
    }
}

let madhuri = new Student('Madhuri')
console.log(madhuri.getName1())

