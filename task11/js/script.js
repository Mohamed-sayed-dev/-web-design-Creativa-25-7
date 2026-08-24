/* var firstName = 'mohamed'
console.log(firstName)
var age = 25
console.log(age)
var firstName =firstName+ " "  +age
console.log(firstName) 
console.log('JS')

// var / let / const

// var variableName = value

//var firstName = "Nouran"

// console.log(firstName)
// console.log(FirstName)

//var age = 32

// console.log(age)

//var isGraduated = true

//var lastName = "Fayez"
// concatenate
// var fullName =  firstName+ " " + lastName


// var bio = "my Name is " + firstName + " " + lastName
// template string
// var bio = `My name is ${firstName} ${lastName} 
// my age is ${age}`
// console.log(bio)

// var g // undefined
// console.log(g)

// var p = null
// console.log(null)

// var userName = prompt('enter your name')
// console.log(userName)

// var h = "" // empty string

var n = 20
var m = 30
console.log(n + m)

var k = "text"
console.log(m / k) // NaN ==> Not a Number

// ++ --

var k = 30
// ++ increment
// console.log(k++)
// console.log(k)
// console.log(++k)
// console.log("-------------------------")

// -- decrement
// console.log(k--) // 32
// console.log(k) // 31
// console.log(--k) // 30

var l = 20

// console.log(l + 5)
// console.log(l)

l = l + 5 // 25 
l+=5 // 30
// console.log(l) // 30


var x = "lorem"
// console.log(typeof(x))
// console.log(typeof l)

// comparison operators ==> > , >= < <= == === != !==


var x = 20
var y = 20
var h = "20"

// console.log(x > y)
// console.log(x >= y)
// console.log(h == x) // value
// console.log(h === x) // value - data type
// console.log(h != x) // value
// console.log(h !== x) // value - data type

// console.log(typeof y == "Number")
// console.log(typeof y == "number")


// console.log(x > y && typeof l == "number" && l == 30)
// console.log(x >= y && typeof l == "number" && l == 30)

// console.log(typeof h == null || h == false || x == 20)

// console.log(!x == y)



// string // empty string // null
// var userName = prompt("enter your name");
// (userName == "ahmed" || userName == "AHMED") ? console.log('welcome ahmed') : console.log('invalid user')


// truthy value // falsy value
var str = "lorem"; // true
var str = 0; // false
var str = 23; // true
var str = null; // false
var str ; // false
var str = -0; // false

(str) ? console.log('correct') : console.log('wrong');
(!str) ? console.log('correct') : console.log('wrong');
var x = 20
var y = 20
var h = "20"
var m = 25
console.log(m) */
//propt ==> degree
//degree > 100 ==> invalid degree
//degree > 90 < 100 ==> A
//degree > 80 < 90 ==> B
//degree > 70 < 80 ==> C
//degree < 60  ==> F

var degree = prompt("Enter your degree:");

if (degree === null || degree.trim() === "" || isNaN(degree)) {
    console.log("error");
} else {
    if (degree > 100 || degree < 0) {
        console.log("Invalid");
    } else if (degree >= 90) {
        console.log("A");
    } else if (degree >= 80) {
        console.log("B");
    } else if (degree >= 70) {
        console.log("C");
    } else if (degree >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}