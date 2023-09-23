// Question 1.
/*
console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(!true) // false
console.log(6 / "3") // 2
console.log("2" * "3") //6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // Nan
console.log(" -9 " + 5) // -9 5
console.log(" -9 " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // Nan
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(" \t \n" - 2) // -2
*/

//Question 2.
/*
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = console.log(three + four) //34 --> right
let multiplication = console.log(three * four) // 12 --> right
let division = console.log(three / four) // 0.75 --> right
let subtraction = console.log(three - four) // -1  --> right
let lessThan1 = console.log(three < four) // true --> wrong answer
let lessThan2 = console.log(thirty < four) // true --> wrong answer
console.log(four)
// Line 32 and 33 dispaly the wrong anwer due to the value they hold on the ACII Table
*/

// Questoin 3.
/*
if (0) console.log('#1 zero is true') // doesnt execute as 0 is converted to False
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true') // doesnt execute as null is converted to False
if (-1) console.log('negative is true')
if (1) console.log('positive is true')
*/

// Question 4
/*
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
//rewritten if statment using ternary/conditional operator
a + b < 10 ? result += 'less than 10' : result += 'greater than 10' 
console.log(result)

// the += concatenates the response - ('less than 10' OR 'greater than 10') onto the string on line 50
*/

// Question 5.
/*
let theGreeting = function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

console.log(theGreeting('josh'));

(name) =>  'Hello ' + name + '!';
*/

// Question 6.
// const westley = {
//     name: 'Westley',
//     numFingers: 5
//     }

//     const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
//     }

//     const inigo = {
//     firstName: 'Inigo',
//     lastName: "Montoya",
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
//         console.log(greeting + this.getCatchPhrase(person));
//     },
//     // getCatchPhrase(person) {
//     //     if(person.numFingers == 6 ) {
//     //         return 'you killed my father. Prepare to die.'
//     //     }
//     //     else {
//     //         return 'Nice to meet you.';
//     // }
//     // }

//     
//     getCatchPhrase : (person) => person.numFingers == 6 ?  'you killed my father. Prepare to die.' :  'Nice to meet you.'
// }

//     inigo.greeting(westley)
//     inigo.greeting(rugen)

// Question 7.

// const basketballGame = {
//     score: 0,
//     fouls: 0,
//     freeThrow() {
//      this.score++;
//      return this
//     },

//     basket() {
//     this.score += 2;
//     return this
//     },

//     threePointer() {
//     this.score += 3;
//     return this
//     },

//     halfTime() {
//     console.log('Halftime score is '+this.score + 'Number of Fouls: ' + this.fouls);
//     return this
//     },

//     fullTime() {
//     console.log('Fulltime score is '+this.score  + 'Number of Fouls: ' + this.fouls);
//     return this
//     },

//     foulIncrement() {
//     this.foul ++;
//     return this
//     }

//     }
//     //modify each of the above object methods to enable function chaining as below:
//     basketballGame.basket().freeThrow().freeThrow().basket().foulIncrement().threePointer().halfTime();

//     console.log("SCORE: " +basketballGame.score)

//Question 8

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
//     };

//     const melborune = {
//         name: 'Melbourne',
//         population: 33333,
//         state: 'VIC',
//         founded: '26 January 3033',
//         timezone: 'Australia/Sydney'
//         };
    
//     function cityProperties(city) {
//         for (property in city) {
//             console.log(`${property}: ${city[property]}`);
//         }
//     }

//     cityProperties(sydney);

//     cityProperties(melborune);

// Question 9

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//  //let moreSports = teamSports
// //  moreSports.push('soccer');
// //  moreSports.push('OzTag');
// //  moreSports.unshift('Tennis');
// moreSports = [...teamSports]
// moreSports.push("running")


//  let dog2 = dog1
//  dog2 = 'coco';

//  let cat2 = {...cat1, name: 'pepper'}
// //  cat2.name = 'garfield'

//  console.log('ORIGINAL: ' + teamSports + "\n")
//  console.log( 'ORIGINAL: ' + dog1 + "\n")
//  console.log('ORIGINAL: ' + cat1.name + "\n")


//  console.log(moreSports + "\n")
//  console.log(cat2.name + "\n")

 // they have changed sice objects are stored as references.
 // Hence if one object is made equal to another, 
 //changes in one will effect the othe 

//  Question 10
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = function () {
            if(this.age>=18) {
                return true
            } else {
                return false;
            }
        }
    }



    class PersonClass {
        constructor(name,age) {
            this.name = name
            this.age = age
        }

        canDrive() {
            if(this.age>=18) {
                return true
            } else {
                return false;
            }
        }

    }

 let p1 = new Person('josh', 23)
console.log('P1 CAN DRIVE: ' + p1.canDrive())


 let p2 = new Person('tony stark', 30)
 let p3 = new Person('luke skywalker ', 40)

 console.log( 'P3 CAN DRIVE: ' + p3.canDrive())

//  console.log(p1);
//  console.log(p2);
//  console.log(p3);
*/