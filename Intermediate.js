// Question 1

/*
function ucFirstLetters (string) {
    sentence = string.split(" ")

    for(let i = 0; i<sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1)
    }
    return sentence.join(" ")
}
console.log(ucFirstLetters("los angeles"));
*/

// Question 2

/*
function truncate(str, max) {
    // if (str.length > max ) {
    //     return str.substring(0, max) + "...";  
    // } else {
    //     return str
    // }

    return  str.length > max ? str.substring(0, max) + "...":str
}
console.log(truncate('This text will be truncated if it is too long', 25));
*/

// Question 3

/*
const animals = ['Tiger', 'Giraffe']

animals.push('Hippo')
animals.push('monkey')

animals.unshift('Lion')
animals.unshift('Penguin')

console.log(animals)

console.log(animals.sort())

function replaceMiddleAnimal(newValue) {
    arrLength = animals.length
    middleVal = arrLength/2
    indexVal = middleVal -1 

    animals[indexVal] = newValue

    return animals
}

function findMatchingAnimals(arr, beginsWith) {
    newArr = []
    upperCase = beginsWith.toUpperCase();
    lowerCase = beginsWith.toLowerCase();
    console.log(animals);

    for (let i = 0; i< arr.length; i++) {
        if( arr[i].startsWith(upperCase) || arr[i].startsWith(lowerCase) ){
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log (findMatchingAnimals(animals, "H"))
*/

// Question 4 

/*
function camelCase(cssProp) { 
    // camelLetter =  cssProp.search("-")
    // console.log("CAMEL LETTER : " + camelLetter)

    // newStr =  cssProp.replace('-','')

    // console.log('new: ' + newStr)

    // let firstString = newStr.slice(0, camelLetter);

    // console.log('first part: ' + firstString)

    // let secondString = newStr.slice(camelLetter, camelLetter+1).toUpperCase();

    // console.log('second part: ' + secondString)

    // let thirdString = newStr.slice(camelLetter+1)

    // console.log('third part: ' + thirdString)

    // return firstString + secondString + thirdString

    // // Another way using for loop and conditional operator

    console.log('length: ' + cssProp.length)
    let length = cssProp.length
    let newStr = ''
    let  index = 0;
    for (let i=0; i<length; i++) {
        cssProp[i] == '-' ?  newStr =  cssProp.replace('-','') : console.log('not found')
    
    }
    console.log('after for: ' + newStr )
    //repeat code from 82-94
    //newStr
}

console.log(camelCase('margin-left'));

*/



// Question 5 
/*
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
//console.log('fixed Twenty: ' + fixedTwenty)
let fixedTen = tenCents.toFixed(2);
//console.log('fixed Twenty: ' + fixedTen)
console.log(fixedTwenty + fixedTen) //why is this not working?
// A doesnt work as .toFixed functions converts value ot a string 


function currencyAddition(float1, float2, operation) {
    newFloat1 = parseFloat(float1);

    console.log(newFloat1)
    newFloat2 = parseFloat(float2);
    console.log(newFloat2)
    switch(operation) {
        case '+':
            return result = (newFloat1 + newFloat2).toFixed(2)
        case '-':
            return result = (newFloat1 - newFloat2).toFixed(2)
        case '*':
            return result = (newFloat1 * newFloat2).toFixed(2)
        case '/':
            return result = (newFloat1 * newFloat2).toFixed(2)
    }
    
}

console.log(currencyAddition(0.20, 0.10, '+'));
*/


// Question 6
/*
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
    uniqueArr = []
    repeatedValue = false;
    count = 0;

for (let i = 0; i<duplicatesArray.length; i ++) {
    for(let j = 0; j<uniqueArr.length; j ++) {
        if(duplicatesArray[i] == uniqueArr[j]) {
            repeatedValue = true;
        }
    }
    count++;
    if(count == 1 && repeatedValue == false) {
        uniqueArr.push(duplicatesArray[i])
    }
    repeatedValue = false;
    count = 0;
}


return uniqueArr
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
*/

// Question 7
/*
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    function getBookTitle(bookId) {
         console.log(books.find(obj => obj.id === bookId))
         console.log(books[bookId])
    }   

    function getOldBooks() {
        let before1950 = books.filter(book => book.year < 1950)  
        return before1950
    }

    function addGenre() {

        let booksWithGenre = books.map(bookGenre => ({...bookGenre, genre: 'classic'}) )
        return booksWithGenre
    }
    */

    // Question 8
    /*
    const phoneBookABC = new Map() //an empty map to begin with
    phoneBookABC.set('Annabelle', '0412312343')
    phoneBookABC.set('Barry', '0433221117')
    phoneBookABC.set('Caroline', '0455221182')

    const phoneBookDEF = new Map()
    phoneBookDEF.set('Daniel', '0412345678')
    phoneBookDEF.set('Eli', '0412345678')
    phoneBookDEF.set('Fabio', '0412345678')

    phoneBookABC.set('Caroline', '0444444444')


    function printPhoneBook(contacts) {
    for (let phoneBook of contacts) {
        console.log(phoneBook) 
        }
    
    }
    let  phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])

console.log(phoneBook.keys())
*/

// Question 9
/*
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };


    function sumSalaries(salaries) {
        let sum = 0;
        for (const value of Object.values(salaries)) {
            sum += value
        }
        return sum
    }
     
    function topEarner(salaries) {
        let tempMax = 0;
        for (const value of Object.values(salaries)) {
            if (value > tempMax) {
                tempMax = value 
            }
        }
         return highestEarner = Object.keys(salaries).find(key =>salaries[key] === tempMax);

    }
    console.log(topEarner(salaries))
*/

// Question 10
/*
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

totalMinutes = today.getHours()*60 + today.getMinutes()
console.log('Total Minutes: ' + totalMinutes)

totalSeconds = (totalMinutes * 60) + today.getSeconds()
console.log('Total Seconds: ' + totalSeconds)

// my age is 23 

const birthDay = new Date("April 22, 2000 00:00:00")

postBirth_years = today.getFullYear() - birthDay.getFullYear()
postBirth_months = (today.getMonth() - birthDay.getMonth()) + postBirth_years * 12 
postBirth_days = today.getTime() - birthDay.getTime()
daysDiff = postBirth_days/(1000 * 60 * 60 * 24)

//console.log('I am ' + ${postBirth_years} + ' years, ' + ${postBirth_months} + ' months and ' + ${daysDiff} ' days old')

function daysInBetween(date1, date2) {
    const firstDate = new Date(date1)
    const secondDate = new Date(date2)

    calc = firstDate.getTime() - secondDate.getTime()
    daysDiff = calc/(1000 * 60 * 60 * 24)

    return daysDiff
}
*/