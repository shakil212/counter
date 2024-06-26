class Human {
    constructor(x, y) { // "Interpreter", "Female"
        this.name = x; // "Interpreter"
        this.gender = y; // "Female"
    }
    // obj = {name:"Interpreter",gender: "Female"}
}

class Student extends Human {
    constructor(x, y, p) { // "Interpreter","Female", 1
        super(x, y); // "Interpreter", "Female"
        this.roll = p; // 1
    }
    //obj = {name:"Interpreter",gender:"Female",1}
}

const shakil = new Human("Shakil", "Male");//{"Shakil","Male"}
const lolita = new Human("Lolita", "Female");//{"Lolita","Female"}

const interpreter = new Student("Interpreter", "Female", "1");//"Interpreter", "Female",1


console.log(shakil);
console.log(lolita);
console.log(interpreter);









// class User {
//     constructor(x, y) {
//         this.firstName = x;
//         this.lastName = y;
//     }

//     print() {
//         console.log(this.firstName, " ", this.lastName);
//     }
// }

// const user1 = new User("Shakil", "Mahmud");
// user1.print();  // This will print: Shakil Mahmud