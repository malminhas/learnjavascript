// Installation
// ------------
// We want to install node.js.
// $ brew search node
// Now check the installed version
// $ node --version
// v12.1.0
//
// Running
// -------
// $ node LearnJavaScript.js

// ES6 in browser is DIFFERENT from node.  From:
// https://flaviocopes.com/node-difference-browser/
// "Node uses the CommonJS module system, while in the browser 
// we are starting to see the ES Modules standard being implemented.
// In practice, this means that for the time being you use 
// require() in Node and import in the browser":
//import {Helper} from "helper.js";
const helper = require('./helper.js'); 
const fetch = require('node-fetch');

// 1.  Basic Functions
console.log('--- 1. Basic Functions  ---')
function multiply (a, b) {
  return a * b
}
console.log(`multiply(2,7) = ${multiply(2, 7)}`)

// 2.  Strings
console.log('--- 2. Strings  ---')
function capitalize (word) {
  return word[0].toUpperCase() + word.substring(1).toLocaleLowerCase()
}
console.log(`capitalize("john") = ${capitalize('john')}`)
console.log(`capitalize("BRAVO") = ${capitalize('BRAVO')}`)
console.log(`capitalize("BLAne") = ${capitalize('BLAne')}`)
function amsterdamIsFirstWord (description) {
  return description.substring(0, 9) === 'Amsterdam'
}
console.log(
  `amsterdamIsTheFirstWord("Amsterdam is the capital of NL") = ${amsterdamIsFirstWord(
    'Amsterdam is the capital of NL'
  )}`
)

// 3.  Numbers
console.log('--- 3. Numbers  ---')
function isOdd (x) {
  return x % 2 == 1
}
console.log(`isOdd(4) = ${isOdd(4)}`)
console.log(`isOdd(5) = ${isOdd(5)}`)
console.log(`isOdd(6) = ${isOdd(6)}`)

// 4.  Variables
console.log('--- 4. Variables  ---')
function defineVariable () {
  // define a variable "ageLimit" with value 18 that cannot be re-assigned
  const ageLimit = 18
  return ageLimit
}
console.log(`defineVariable() returns ${defineVariable()}`)

// 5.  Conditions
console.log('--- 5. Conditions  ---')
function canVote (age) {
  return age >= 18
}
const canVoteArrow = age => age >= 18
console.log(`canVote(25) = ${canVote(25)}`)
console.log(`canVoteArrow(25) = ${canVoteArrow(25)}`)

// 6.  Arrays - I
console.log('--- 6. Arrays - I ---')
let arr = []
arr.push('David')
arr.push('John')
console.log(`array with two elements pushed into it = ${arr}`)
function sumOddNumbers (numbers) {
  let sum = 0
  numbers.forEach(function (number) {
    if (number % 2 != 0) {
      // odd number
      sum += number
    }
  })
  return sum
}
console.log(`sumOddNumbers([15, -5, 10]) = ${sumOddNumbers([15, -5, 10])}`)

// 7.  Functions - I
console.log('--- 7. Functions - I ---')
const mysum = (a, b) => a + b
const mydouble = a => a * 2
console.log(`mysum(3,5) = ${mysum(3, 5)}`)
console.log(`mydouble(3) = ${mydouble(3)}`)

// 8.  Arrays - II
// filter, includes, join, split, map
console.log('--- 8. Arrays - II ---')
const getPassingGrades = grades => {
  return grades.filter(grade => grade >= 10)
}
console.log(`getPassingGrades([15, 8, 13]) = ${getPassingGrades([15, 8, 13])}`)
const containsAmsterdam = cities => {
  return cities.includes('Amsterdam')
}
console.log(
  `containsAmsterdam(["Amsterdam"]) = ${containsAmsterdam(['Amsterdam'])}`
)
console.log(`containsAmsterdam(["Oslo"]) = ${containsAmsterdam(['Oslo'])}`)
const namesInUpperCase = names => {
  return names.map(name => name.toUpperCase())
}
console.log(
  `namesInUpperCase(["John", "Jennifer", "Liham"]) = ${namesInUpperCase([
    'John',
    'Jennifer',
    'Liham'
  ])}`
)
const double = n => n * 2
const doubleGrades = grades => {
  return grades.map(grade => double(grade))
}
console.log(`doubleGrades([4, 7, 10, 3]) = ${doubleGrades([4, 7, 10, 3])}`)

// 9.  Objects
console.log('--- 9. Objects ---')
function getPersonObject () {
  return {
    age: 32,
    first_name: 'Marky',
    last_name: 'Mark'
  }
}
console.log(`getPersonObject() = ${getPersonObject()}`)
function incrementAge (person) {
  person.age = person.age + 1
  return person
}
function getObjectKeys (person) {
  return Object.keys(person)
}
const person = {
  age: 18,
  first_name: 'Jennifer',
  last_name: 'Doe'
}
console.log(`person.age = ${person.age}`)
incrementAge(person)
console.log(`person.age after call to incrementAge(person)) = ${person.age}`)
console.log(`getObjectKeys(person)) = ${getObjectKeys(person)}`)
function getObject (id, name) {
  return { id, name }
}
console.log(`getObject(2, "Jad") = ${getObject(2, 'Jad')}`)
const mergeOptions = (options, defaultOptions) => {
  return { ...defaultOptions, ...options }
}
const options = {
  tabSize: 4
}
const defaultOptions = {
  indentation: 'tab',
  tabSize: 2,
  language: 'javascript'
}
console.log(
  `mergeOptions(options, defaultOptions) = ${mergeOptions(
    options,
    defaultOptions
  )}`
)
const getLatLng = location => {
  // destructure into 2 variables: lat & lng
  const { lat, lng } = location
  return `The latitude is ${lat} and the longitude is ${lng}`
}
const location = {
  lat: 24.235235,
  lng: 2.5734
}
console.log(`getLatLng(location) = ${getLatLng(location)}`)

// 10.  Objects in the Real World
console.log('--- 10. Objects in the Real World ---')
const sum = grades => {
  let sum = 0
  grades.forEach(function (grade) {
    sum += grade
  })
  return sum
}
const getTotalOfGrades = student => {
  const grades = student.grades
  return sum(grades)
}
const student = {
  name: 'Jennifer',
  grades: [10, 6, 14, 3, 18],
  age: 17
}
console.log(`getTotalOfGrades(student) = ${getTotalOfGrades(student)}`)

// 11.  Array of Objects
console.log('--- 11. Array of Objects ---')
const getAverageAge = users => {
  let average = 0
  let total = 0
  const nusers = users.length
  users.forEach(function (user) {
    total += user.age
  })
  average = total / nusers
  return average
}
const users = [
  {
    joined_on: '2018-12-13',
    age: 14
  },
  {
    joined_on: '2018-12-15',
    age: 18
  }
]
console.log(`getAverageAge(users) = ${getAverageAge(users)}`)

// 12.  Arrays - III
console.log('--- 12. Arrays - III ---')
const removeFirstApp = apps => {
  apps.splice(0, 1)
  return apps
}
const apps = ['Calculator', 'Whatsapp', 'Chrome', 'Firefox']
console.log(`apps = ${apps}`)
console.log(`removeFirstApp(apps) = ${removeFirstApp(apps)}`)
const emptyArray = apps => {
  // empty apps
  apps.length = 0
  return apps
}
console.log(`emptyArray(apps) = ${emptyArray(apps)}`)
const dimensions = [20, 5]
// destructure first array item into "width" and 2nd array item into "height"
const [width, height] = dimensions
console.log(
  `destructuring [${dimensions}] into [width,height] = ${width},${height}`
) // 20, 5
const concatTwoArrays = (first_half_2018, second_half_2018) => {
  return [...first_half_2018, ...second_half_2018]
}
console.log(
  `concatTwoArrays(["Calculator", "Whatsapp"], ["Chrome", "Firefox"]) = ${concatTwoArrays(
    ['Calculator', 'Whatsapp'],
    ['Chrome', 'Firefox']
  )}`
)
const name = 'Jad'
const characters = [...name] // ["J", "a", "d"]
const splitStringIntoChars = string => {
  return (chars = [...string])
}
console.log(
  `splitStringIntoChars("Hello World!") = ${splitStringIntoChars(
    'Hello World!'
  )}`
)

// 13.  Advanced Flow Control
console.log('--- 13. Advanced Flow Control ---')
const isItZero = number => number === 0
console.log(`isItZero(0) = ${isItZero(0)}`)
console.log(`isItZero(1) = ${isItZero(1)}`)
console.log(`isItZero("") = ${isItZero('')}`)
const getVotingMessage = person => {
  let msg = ''
  if (person.age < 18) {
    msg = "You can't vote yet"
  } else if (person.age === 18) {
    msg = 'Your first vote'
  } else {
    msg = 'You have already voted'
  }
  return msg
}
console.log(`getVotingMessage(person) = ${getVotingMessage(person)}`)
const doesntBreak = () => {
  try {
    invalidFunction()
  } catch (error) {
    console.log(`Exception: ${error}`)
  }
}
console.log(`doesntBreak() = ${doesntBreak()}`)

// 14.  Intro to Classes
// JavaScript doesn't have real classes! 😨
// The class syntax is syntactic sugar.
// => A CLASS is just creating a new function.
// => A CUSTOM METHOD is when you add a function to the prototype of this function.
// Before class was added to the language in 2015, here's how we used to write "classes":
//  function Rectangle(width, height){
//    this.width = width;
//    this.height = height;
//  }
//  Rectangle.prototype.isSquare = function(){
//    return this.width === this.height;
// }
//
// You can think about the prototype as an object that contains all the custom methods
// that a certain function can have.  So by assigning a new function to Rectangle.prototype
// you are adding a new custom method to the instances of Rectangle.
//
console.log('--- 14. Intro to Classes ---')
class User {
  /**
   * @param {string} first_name
   * @param {string} last_name
   * @param {number} age
   */
  constructor (first_name, last_name, age) {
    this.first_name = first_name
    this.last_name = last_name
    this.age = age
  }
  getFullName () {
    return `${this.first_name} ${this.last_name}`
  }
  canVote () {
    return this.age >= 18
  }
  getVotingMessage () {
    return this.canVote() ? 'You can vote' : "You can't vote"
  }
}
const jennifer = new User('Jennifer', 'Doe', 20)
console.log(`Created user jennifer: ${jennifer}`)
console.log(`jennifer.canVote() = ${jennifer.canVote()}`)
console.log(`jennifer.getVotingMessage() = ${jennifer.getVotingMessage()}`)
class Inventory {
  /**
   * @param {string[]} items
   */
  constructor () {
    this.items = []
  }
  addItem (item) {
    this.items.push(item)
  }
  getItems () {
    return this.items
  }
  getCount () {
    return this.items.length
  }
  exists (item) {
    return this.items.includes(item)
  }
  humanReadableFormat () {
    return this.items.join(', ')
  }
}
const inventory = new Inventory()
inventory.addItem('Laptop')
inventory.addItem('Phone')
console.log(`inventory.getItems() = ${inventory.getItems()}`) // returns items
console.log(`inventory.getCount() = ${inventory.getCount()}`) // returns number of items
console.log(`inventory.exists("Phone") = ${inventory.exists('Phone')}`) // returns true because "Phone" already is already an item
console.log(
  `inventory.humanReadableFormat() = ${inventory.humanReadableFormat()}`
) // returns string of items separated by a comma and space

// 15.  Classes II
console.log('--- 15. Classes II ---')
// There's a problem with classical inheritance which is often called the Gorilla/Banana Problem.
// Simply put: You ask for a banana, but end up having a Gorilla holding the banana and the entire jungle with it.
// And this is where prototypical inheritance in JavaScript shines ✨.
// You can simply add the methods you needd to the prototype object of a function.
// With extends you can extend the prototype of another object without having to manually use the prototype.
class User2 {
  constructor (first_name, last_name) {
    this.first_name = first_name
    this.last_name = last_name
  }
  getFullName () {
    return `${this.first_name} ${this.last_name}`
  }
  canEdit () {
    return false
  }
}
class Admin extends User2 {
  canEdit () {
    return true
  }
}
const john = new User2('John', 'Doe')
console.log(`john.canEdit() = ${john.canEdit()}`) // false
const bob = new Admin('Bob', 'Tend')
console.log(`bob.getFullName() = ${bob.getFullName()}`) // "Bob Tend"
console.log(`bob.canEdit() = ${bob.canEdit()}`) // true
// After you learn the basics of JavaScript you'll most likely use a frontend framework
// such as Angular, Vue, React, Polymer, etc.  Most of these frameworks allow you to create
// your own custom element (<app-footer> for example).  They let you create this custom elements
// by creating a class for it as it makes sense to group all related functionality in that single class
// This is an imaginary frontend framework class:
class Component {
  render () {}
}
// AppNavbar inherits from this Component and creates an <app-navbar> element.
// Make it return <div>Navbar</div>
class AppNavbar extends Component {
  render () {
    return `<div>Navbar</div>`
  }
}

// 16.  Arrays IV
console.log('--- 16. Arrays IV ---')
// Array.prototype.find(), Array.prototype.every(), Array.prototype.some()
const shouldCancelExam = grades => {
  return grades.every(item => item >= 18)
}
console.log(
  `shouldCancelExam([10, 12, 10, 14]) = ${shouldCancelExam([10, 12, 10, 14])}`
)
const verifyUser = (users, id) => {
  user = users.find(user => user.id === id)
  if (user) {
    user.is_verified = true
  }
  return users
}
const users2 = [
  {
    id: 1,
    name: 'John',
    is_verified: false
  },
  {
    id: 2,
    name: 'Jennifer',
    is_verified: false
  },
  {
    id: 3,
    name: 'Bob',
    is_verified: false
  }
]
console.log(`verifyUser(users, 2) = ${verifyUser(users2, 2)}`)
const getUsersNamesAndIds = users => {
  return users.map(user => `${user.name} (${user.id})`).join(', ')
}
let unames = getUsersNamesAndIds(users2)
console.log(`getUsersNamesAndIds(users) = ${unames}`)
const sumGrades = grades => {
  const startingValue = 0
  return grades.reduce((total, current) => total + current, startingValue)
}
console.log(`sumGrades([10, 12, 10, 14]) = ${sumGrades([10, 12, 10, 14])}`)

// 17.  Project I
console.log('--- 17. Project I ---')
console.log('Completed in separate file')

// 18.  Advanced Flow Control II
console.log('--- 18. Advanced Flow Control II ---')
// Early return or early exit
const getStatus = (host, user, booking) => {
  const statuses = {
    pending: `Hey ${user}, we're awaiting confirmation from ${host}`,
    confirmed: `Hey ${user}, ${host} is excited to be hosting you!`,
    canceled: `Unfortunately ${user}, ${host} has canceled your booking request`,
    done: `${host} hopes you had a great stay!`
  }
  return statuses[booking.status]
}
const booking1 = {
  status: 'pending'
}
console.log(
  `getStatus("John", "Blane", booking1) = ${getStatus(
    'John',
    'Blane',
    booking1
  )}`
)
const booking2 = {
  status: 'confirmed'
}
console.log(
  `getStatus("John", "Blane", booking2) = ${getStatus(
    'John',
    'Blane',
    booking2
  )}`
)

const getErrorMessage = statusCode => {
  const status = {
    401: 'Unauthorized',
    404: 'Not found'
  }
  return status[statusCode] || 'Unexpected error has occurred'
}
console.log(`getErrorMessage(401) = ${getErrorMessage(401)}`)
console.log(`getErrorMessage(404) = ${getErrorMessage(404)}`)
console.log(`getErrorMessage(410) = ${getErrorMessage(410)}`)
console.log(`getErrorMessage(500) = ${getErrorMessage(500)}`)

// 19.  JSON
console.log('--- 19. JSON ---')
// JSON.parse(string)       => string to object
// JSON.stringify(object)   => object to string
const willItRain = weather_api_result => {
  return JSON.parse(weather_api_result).now.rainExpected
}
let res = willItRain(
  '{"now":{"temperature":18,"humidity":"90%","uvIndex":0,"rainExpected":true}}'
)
console.log(
  `willItRain('{"now":{"temperature":18,"humidity":"90%","uvIndex":0,"rainExpected":true}}') = ${res}`
)

// 20.  Promises
console.log('--- 20. Promises ---')
// A Promise is used whenever some code completes in the future.
// A real life scenario that you'll see later on is using fetch
// which goes to the network to ask some API for data
// The Promise comes with a resolve which is a method that let's
// you confirm that the Promise has been completed (or resolved).
//   const wait = delay => {
//       return new Promise(resolve => {
//           setTimeout(() => {
//               resolve();
//           }, delay);
//       });
//   }
// Used as follows:
//   wait(2000).then(() => {
//       console.log("This will be delayed 2 seconds!");
//   });
// JavaScript runs asynchronously. This means that lines of code
// don't necessarily run in the same order as they're written.
const wait = delay => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}
console.log("Wait for 1 second")
wait(1000).then(() => {
  console.log('20. This gets delayed 1 second')
})

const getWeatherInfo = () => {
  const weatherInfo = {
    rainExpected: false,
    degree: 18
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(weatherInfo)
    }, 1000)
  })
}

console.log("getWeatherInfo in 1 second")
getWeatherInfo().then(response => {
  console.log(response)
})

const wait2 = () => {
  return new Promise(resolve => {
    invalidFunction()
  })
}
// A common mistake is adding a semi-colon (;) at the end of
// .then(() => {}) however this will break the .catch() call.
console.log("Wait with catch")
wait2()
  .then(() => {
    console.log('20. Wait with catch was successful')
  })
  .catch(() => {
    console.log('20. Wait with catch went wrong')
  })

// 21.  Fetch
console.log('--- 21. Fetch ---')
// We use fetch to make a request to a server (could be ours or could be an external one,
// like a Weather API or Facebook API) to retrieve some information without reloading the page.
//    fetch("https://api.learnjavascript.online/demo/notifications/new.json")
// This will send a request (sometimes called AJAX request or XMLHttpRequest for historical reasons).
// This request will go to the internet, reach the URL you specified and finally come back to you
// with the result (response) from that URL. Know that fetch always returns a promise.
// This is why whenever you fetch(URL), the response that we get back is just a response object
// and it doesn't know that the data it has is in JSON. We should manually convert the response into JSON:
//   fetch(URL)
//   .then(response => {
//     return response.json();
//   });
// This response.json() here is almost exactly the same as JSON.parse(object) that you saw before.
// The only difference is that response.json() returns a promise.
// Can refactor this:
//   fetch(URL)
//   .then(response => {
//     return response.json();
//   });
//
// to this:
//   fetch(URL)
//   .then(response => response.json());

const checkForNewNotifications = () => {
  return fetch('https://api.learnjavascript.online/demo/notifications/new.json');
}

checkForNewNotifications()
  .then(() => {
    console.log('21. checkForNewNotifications - success')
  })
  .catch(() => {
    console.log('21. checkForNewNotifications - something went wrong')
  })
// Do it using implicit return
const checkForNewNotifications2 = () => {
  fetch('https://api.learnjavascript.online/demo/notifications/new.json')
  .then(
    response => response.json()
  )
  .then(data => console.log(data))
}
checkForNewNotifications2()

// We're calling .then() on the result of .then().  That's because response.json() returns a Promise.
// Thus you have to wait for that promise to complete before you can read it.
// It's extremely important to add a console.log(data) the first time so that you can see,
// visualize & understand what kind of data this API is returning

const checkForNewNotifications3 = () => {
  fetch('https://api.learnjavascript.online/demo/notifications/new.json')
    .then(response => response.json())
    .then(data => {
      // console.log(data.count);
      displayNewNotifications(data.count)
    })
}

function displayNewNotifications (count) {
  console.log(count)
}
checkForNewNotifications3()

const getChapters = () => {
  fetch('https://api.learnjavascript.online/demo/chapters/all.json')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      let cs = data.filter(chapter => chapter.is_completed === true)
      displayCompletedChapters(cs)
    })
}
function displayCompletedChapters (chapters) {
  // do not modify this function
}
getChapters()

// Fetch POST
fetch('https://api.learnjavascript.online/demo/food.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    food: 'Pizza'
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

// With catch:
const checkForNewNotifications4 = () => {
    fetch("https://api.learnjavascript.online/demo/notifications/fail.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        showError(error);
    })
}

function showError(error){
    // do not modify this function
    console.log('21. checkForNewNotifications4 - something went wrong')
}

checkForNewNotifications4();

// 22.  Import and Export
console.log('--- 22. Import and Export ---')
// Every JavaScript file, is called a module.
// It is separate from the outside world. Every variable you define there, 
// is only available in that file, and not in the other files. 
// Same thing for functions & classes.
// Note the "export" keyword when you export a method from one file:
//   export class Helper{
//     capitalize(word){
//       return word[0].toUpperCase() + word.substring(1).toLowerCase();
//     }
//   }
//
// import has to be at the top of your file. You cannot run any other kind 
// of JavaScript code before the imports. 
//   import {Helper} from "./helper.js";
//   new Helper(); // works as expected
// 
// Another export example:
//   const capitalize = word => {
//      return word[0].toUpperCase() + word.substring(1).toLowerCase();
//   }
//   const double = x => x * 2;
//   export {capitalize, double};
//
// Import: we only want "double"
//   import {double} from "./helper.js";
//
// Import: we want both functions
//   import {double, capitalize} from "./helper.js"; 
//
// There's another type of export, called default export which lets you 
// export a variable or a function or a class without naming it.
// Notice the "export default"
//   export default class Helper{
//     capitalize(word){
//       return word[0].toUpperCase() + word.substring(1).toLowerCase();
//     }
//   }
const word = "monkey"
console.log(`Using Helper from imported helper.js with word '${word}'`);
h = new helper.Helper(word);
console.log(h.capitalize())
console.log(h.lowerCase())
console.log(h.upperCase())

// 23.  Project II
console.log('--- 23. Project II ---')
console.log('Completed in separate file')

// 24. Dom selection  
console.log('--- 24. Dom selection ---')
// The DOM (Document Object Model) is simply the HTML representation of your page. 
// It lets you interact from JavaScript with the elements on your page. 
// You can read text, change the text, delete items & more.
// You can inspect the DOM in any browser's Dev Tool (Chrome, Firefox, Safari). 
// Dev Tools can most often be found with a right-click anywhere on the page 
// (except on images/videos), and then selecting Inspect Element.
// You can select a single item from the page as follows:
//   document.querySelector("your-css-selector-here");
// id selector:
//   <div id="navbar"></div>
//   <script>
//      const navbar = document.querySelector("#navbar");
//   </script>
// class selector:
//   <div class="item"></div>
//   <script>
//      const item = document.querySelector(".item");
//   </script>
//
// document.querySelector("css-selector") returns an object which is an 
// instance of HTMLElement. HTMLElement is the parent class that every 
// single HTML element in your page inherits from. This is just a 
// technical way to say that every element on your page is an instance of 
// a single class which is HTMLElement.
//   const getAboutFromFooter = () => {
//      // get the the about link that's in the footer
//      return document.querySelector('#footer .about');
//   }
//
// jsdom is a pure-JavaScript implementation of many web standards, 
// notably the WHATWG DOM and HTML Standards, for use with Node.js. 
// In general, the goal of the project is to emulate enough of a 
// subset of a web browser to be useful for testing and 
// scraping real-world web applications.
// $ npm install jsdom

const jsdom = require("jsdom");

let dom = new jsdom.JSDOM(`<div>Hello World!</div>`);
let document = dom.window.document;
const div = document.querySelector("div");
if (div){
    console.log(`div.textContent = ${div.textContent}`); // "Hello World!"
}

const getTextFromSelector = css_selector => {
    const sel = document.querySelector(css_selector);
    // use ternary conditional operator
    return sel ? sel.textContent : `nothing in ${css_selector}`
}











console.log(getTextFromSelector("h1"));
console.log(getTextFromSelector("h2"));

// querySelector expects any CSS selector whereas getElementById only expects an id.
// These two are equivalent:
//   const navbar = document.querySelector("#navbar");
//   const navbar = document.getElementById("navbar");
// Generally you should always try and use querySelector.
// There is also querySelectorAll which will always return a NodeList of 0 or more.
// A NodeList is not an array. However, there are minor similarities:
// 1. They both have a .length property
// 2. You can loop through both of them with .forEach()
// However, you cannot call .filter on a NodeList
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <div id="navbar">
        Logo
        <div class="links">
            <a href="about.html" class="about" target="_blank" rel="noopener">About us</a>
        </div>
    </div>

    <div id="main">
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p id="welcome-message"><b>short</b></p>
    </div>

    <div id="footer">
        <a href="about.html" class="about" target="_blank" rel="noopener">About us</a>
        <a href="contact.html" class="contact" target="_blank" rel="noopener">Contact us</a>
    </div>

</body>
</html>`
dom = new jsdom.JSDOM(html);
document = dom.window.document;

const getDivElements = () => {
    return document.querySelectorAll('div');
}

const getFooterLinks = () => {
    return document.querySelectorAll('#footer a');
}

const getAboutLinks = () => {
    return document.querySelectorAll('.about');
}

console.log(getDivElements());
getDivElements().forEach(element => {
    console.log(element.textContent)
})
console.log(getFooterLinks());
console.log(getAboutLinks());
console.log(document.querySelector('#navbar'))

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent); // logs every paragraph's text
});

// You can convert a NodeList into an Array.
// You have to use the array spread syntax (...) 
// which spreads every single item in the NodeList, into a new array.
// Then you can .filter:
//   const links = document.querySelectorAll("a");
//   const loginLinks = [...links].filter(link => link.textContent === "Login");
//   console.log(loginLinks); // Array of 2 links that have "Login" as text

const getShortTextParagraphs = () => {
    const paragraphs = document.querySelectorAll('p')
    return [...paragraphs].filter(para => para.textContent.length < 10) 
}
console.log(getShortTextParagraphs());

// 25. Dom Basics  
console.log('--- 25. Dom basics ---')
// innerHTML allows you to pick up formatting within textContent
// You can use .textContent and .innerHTML to change the content of an element. 
const getFormattedWelcomeMessage = () => {
    return document.querySelector('#welcome-message').innerHTML;
}

console.log(getFormattedWelcomeMessage());

const setFormattedWelcomeMessage = (name) => {
    const element = document.querySelector('#welcome-message');
    element.innerHTML = `Hello <strong>${name}</strong>`
}

setFormattedWelcomeMessage("John");
setFormattedWelcomeMessage("Jennifer");

const emptyShoppingList = () => {
  const list = document.querySelector("#shopping-list");
  list.innerHTML = "";
}

//sample usage
emptyShoppingList();

// As a rule of thumb, you can use .textContent and .innerHTML whenever you have an element with a closing tag. 
// And you can always use .value for form elements, such as input (type: text, email, password, etc.) and select.




console.log(`------ PASSED ------`)
