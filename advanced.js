// Question 1.
/*
// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//     currentCount++;
//     console.log(currentCount)
//     return currentCount;
//     };
//     }

function makeCounter(startFrom,incrementBy) {
        let currentCount = startFrom;
        return function() {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
        };
        }
    
    let counter1 = makeCounter(0,1);
    let counter2 = makeCounter(0,5);
    counter1(); // 1
    counter2(); // 2
*/

//Question 2
/*
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}


setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
// a) the order will be #4, #3, #2 and #1
// due to the delay and because setTimeout is assynchronous function

//b)
let delay = msg => console.log(`This message will be printed after a delay: ${msg}`)

//c)
let fifthTest = setTimeout(delay, 10000, '#5: Delayed by 10s')

//d) 
clearTimeout(fifthTest)
*/

//Questoin 3.
/*
function printMe(msg) {
    console.log('printing debounced message -- ' + msg)
    }


function debounce(func, ms) {
    let timer;

    return function (theMsg) {

      clearTimeout(timer);

      theMsg = ' i am the msg'

    timer = setTimeout(() => func(theMsg), ms);
      
    };

  };

printMe = debounce(printMe,1000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only 
//the LAST one should print, after 1000ms of no calls

    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);

*/

// Question 4a) ,
/* First Attempt
// let firstIteration = true
// let arr = []

// function printFibonacci(limit)  {
//     console.log('inside function')
//     console.log('First Iteration: ' + firstIteration)

// if (arr.length < 10) {
//     if(firstIteration == true) {
//         console.log('inside if statement')
//     let counter = 0;
//     arr= [0,1]
//     console.log(arr)
//     nextVal = arr[counter] + arr[counter+1]
//     arr.push(nextVal)
//     counter++
//     firstIteration = false
//     console.log(arr)
//     } else {
//         console.log('counterVal: ' + counter)
//         console.log('arr elements: ' +Number(arr[counter]) +' , ' + Number(arr[counter+1]))
//        let  nextVal = Number(arr[counter]) + Number(arr[counter+1])
    
//         console.log('NextVal: ' + nextVal)
    
//         arr.push(nextVal)
//         counter++
//         console.log(arr)
//     }
    
//     setInterval(printFibonacci(),1000)
//     }
//  else {
//     reachedLimit = true
//     console.log('reached Limit')
//     return
// }



// }


// printFibonacci(10)
*/

/*Second Attempt
//A
let firstVal = 0
let secondVal = 1
let followingVal 

// function printFibonacci() {

// console.log('Fibonacci Series:');

// followingVal = firstVal + secondVal;
// firstVal = secondVal;
// secondVal = followingVal;

// return console.log(followingVal)

// }



//setInterval( printFibonacci, 1000)

*/
//B nested timeout
// let timerId = setTimeout(function printFibonacci() {
//     followingVal = firstVal + secondVal;
//     firstVal = secondVal;
//     secondVal = followingVal;
//     console.log(followingVal)
//   timerId = setTimeout(printFibonacci, 1000);

// }, 1000);

// C
//A
// let firstVal = 0
// let secondVal = 1
// let followingVal 
// let counter =0 
// function printFibonacci(limit) {
// counter++
// console.log('Fibonacci Series:');

// followingVal = firstVal + secondVal;
// firstVal = secondVal;
// secondVal = followingVal;
// if(counter == limit){
//     clearInterval(intervalID)
// }
// return console.log(followingVal)

// }
// const intervalID = setInterval(printFibonacci, 1000, 10) 

//Question 5
/*
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
//car.description(); //works
//setTimeout(car.description, 200); //fails

setTimeout( function() {car.description();}, 200 )

let clonedCar = Object.create (
    Object.getPrototypeOf(car),
    Object.getOwnPropertyDescriptors(car)
)
clonedCar.year = 2020

 console.log(clonedCar)
 console.log(car)

// delayed description() call uses the original values from as opposed to clonedCra since they are seperate objects and no longer attache dby references due to the deep copy which was made

boundCar = car.description.bind(car)

setTimeout( boundCar, 200 )

let clonedCar2 = Object.create (
    Object.getPrototypeOf(car),
    Object.getOwnPropertyDescriptors(car)
)
clonedCar2.make = 'testing'

setTimeout( boundCar, 1000 )
*/

// Question 6
/*
https://javascript.info/native-prototypes
Function.prototype.delay = function(ms) {
    return setTimeout(this,ms)
}

function multiply(a, b) {
    console.log( a * b );
    }

//multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

multiply().delay(500)(5,5)
*/

// Question 7
/*
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    }
    const person1 = new Person('James Brown', 73, 'male')
    const person2 = new Person('Josh Siwan', 23, 'male')
    console.log('person1: '+person1) //prints person1: [object Object]
    console.log('person1: '+person1.toString()) //prints person1: [object Object]

    Person.prototype.toString = function personToString() {
        return `${this.name}`;
      };
    
    console.log('Person 1  ' + person1.toString())
    console.log('Person 2  ' + person2.toString())

function Student (name, age, gender, cohort) {
    Person.call(this, name, age, gender)
    this.cohort = cohort
}

Student.prototype.toString = function studentToString() {
    return `${this.cohort}`;

  };

  const student1 = new Student('James Brown', 73, 'male', 'alpha')
  const student2 = new Student('Josh Siwan', 23, 'male', 'beta')

  console.log('Student 1  ' + student1.toString())
  console.log('Student 2  ' + student2.toString())
  */

  // Question 8. 
  /*
  class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    // const myClock = new DigitalClock('my clock:')
    // myClock.start()

    class PrecisionClock extends DigitalClock {
            constructor(prefix) {
                super(prefix)
                const precision = 1000
                this.precision = precision
            }

            start() {
                this.display()
                this.timer = setInterval(() => this.display(), this.precision);
            }
        }

        class AlarmClock extends DigitalClock {
            constructor(prefix) {
                super(prefix)
                let wakeupTime = '14:10'
                this.wakeupTime = wakeupTime
                
            }

            display() {
                let date = new Date();
                //create 3 variables in one go using array destructuring
                let [hours, mins, secs] = [date.getHours(), date.getMinutes(),date.getSeconds()];
                if (hours < 10) hours = '0' + hours;
                if (mins < 10) mins = '0' + mins;
                if (secs < 10) secs = '0' + secs;
                
                if (this.wakeupTime === `${hours}:${mins}` ) {
                    console.log('WAKE UP!')
                    this.stop()
                } else {
                    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
                }
                }
        }


        const myClock = new AlarmClock('my clock:')
        myClock.start()
    */

    // Question 9 
    
//     function randomDelay() {
//         //let randomNumber =  Math.floor((Math.random() * 20000)/1000)
//         let randomNumber =  Math.floor((Math.random() * (5000-1000) + 1000))
//         setTimeout(() => {}, randomNumber * 1000);
//         return new Promise((resolve, reject) => {
//         if(randomNumber % 2 === 0 ) {
//             resolve(randomNumber)
//         } else {
//             reject(randomNumber)
//         }
        
//     })
// }

//     randomDelay().then(() => console.log('There appears to have been a delay.'));
//     randomDelay().then(() => console.log('There appears to have been a delay.'));
//     randomDelay().then(() => console.log('There appears to have been a delay.'));
//     randomDelay().then(() => console.log('There appears to have been a delay.'));
//     randomDelay().then(() => console.log('There appears to have been a delay.'));
//     randomDelay().then(() => console.log('There appears to have been a delay.'));



// Question 10
/*
// A & B


    async function fetchURLData(url) {
        let fetchPromise = await fetch(url)

        if(fetchPromise.status === 200) {
            let json = await fetchPromise.json(); 
            console.log(json)
            return json;
        }

        throw new Error(`Request failed with status ${fetchPromise.status}`);
    }

    fetchURLData('https://jsonplaceholder.typicode.com/todos/1')

    fetchURLData('https://jsonplaceholder.typicode.com/INVALID')

*/