//Inheritance

//1 st way ==> values are hardcoded

// class GrandFather {
//     gfirstName: string = "Vaman"
//     lastName: string = "Katwe"
//     cash: number = 50000
//     displayGFather(): void {
//         console.log(this.gfirstName, this.lastName)
//     }
//     displayGProperty(): void {
//         console.log(this.cash)
//     }
// }

// class Father extends GrandFather {
//     ffirstName: string = "Mahendra"
//     home: string = "shrees vaibhav"
//     displayFather(): void {
//         console.log(this.ffirstName, this.lastName)
//     }
//     displayFProperty(): void {
//         console.log(this.home)
//     }
// }

// class Daughter extends Father {
//     dfirstName: string = "Mayuri"
//     car: string = "Audi"
//     displayDName(): void {
//         console.log(this.dfirstName, this.lastName)
//     }
//     displayDProperty(): void {
//         console.log(this.car)
//     }
// }

// let mayuriK=new Daughter()
// mayuriK.gfirstName
// mayuriK.ffirstName
// mayuriK.dfirstName
// mayuriK.lastName
// mayuriK.car
// mayuriK.home
// mayuriK.cash
// mayuriK.displayGFather()
// mayuriK.displayDProperty()
// mayuriK.displayFProperty()

//======================================================================================================

//2 nd way => by using constructor

// class GrandFather {
//     gfirstName: string
//     lastName: string
//     cash: number
//     constructor(gfirstName: string, lastName: string, cash: number) {
//         this.gfirstName = gfirstName
//         this.lastName = lastName
//         this.cash = cash
//     }
//     displayGInfo(): void {
//         console.log(this.gfirstName, this.lastName)
//         console.log(this.cash)
//     }
// }
// class Father extends GrandFather {
//     ffirstName: string
//     home: string
//     constructor(gfirstName: string, ffirstName: string, lastName: string, cash: number, home: string) {
//         super(gfirstName, lastName, cash)
//         this.ffirstName = ffirstName
//         this.home = home
//     }
//     displayFInfo(): void {
//         super.displayGInfo()
//         console.log(this.ffirstName, this.lastName)
//         console.log(this.home)
//     }
// }

// class Daughter extends Father {
//     dfirstName: string
//     car: string
//     constructor(gfirstName: string, ffirstName: string, lastName: string, cash: number, home: string, dfirstName: string, car: string) {
//         super(gfirstName, ffirstName, lastName, cash, home)
//         this.dfirstName = dfirstName
//         this.car = car
//     }
//     displayDInfo(): void {
//         super.displayFInfo()
//         console.log(this.dfirstName, this.lastName)
//         console.log(this.car)
//     }
// }
// let Mk = new Daughter("vamansa", "mahendra", "katwe", 2000, "shreesVaibhav", "mayuri", "audi")
// Mk.car
// Mk.cash
// Mk.home
// Mk.displayGInfo()
// Mk.displayFInfo()
// Mk.displayDInfo()

//======================================================================================================

//Hierarchical Inheritance
//one parent => multiple child

class Father {
    ffirstName: string
    lastName: string
    constructor(fn: string, ln: string) {
        this.ffirstName = fn
        this.lastName = ln
    }
    displayFInfo(): void {
        console.log(this.ffirstName, this.lastName)
    }
}

class Son extends Father {
    sfirstName: string
    constructor(fn: string, ln: string, sfn: string) {
        super(fn, ln)
        this.sfirstName = sfn
    }
    displaySInfo(): void {
        console.log(this.sfirstName, this.lastName)
    }
}

class Daughter extends Father {
    dfirstName: string
    constructor(fn: string, ln: string, dfn: string) {
        super(fn, ln)
        this.dfirstName = dfn
    }
    displayDInfo(): void {
        console.log(this.dfirstName, this.lastName)
    }
}

let Mayuri=new Daughter("Mahendra","Katwe","mayuri")
Mayuri.ffirstName
Mayuri.lastName
Mayuri.dfirstName
Mayuri.displayDInfo()
Mayuri.displayFInfo()
Mayuri.dfirstName

let Vaibhav=new Son("Mahendra","Katwe","vaibhav")
Vaibhav.sfirstName
Vaibhav.lastName
Vaibhav.ffirstName
Vaibhav.displaySInfo()
Vaibhav.displayFInfo()