Arrow Functions
---------------
```
function sum(a,b){
    return a+b;
}
function double(a){
    return 
```
as arrow functions:

```
const sum = (a,b) => a + b
const double = a => a * 2
```

Arrays
------
```
function sumOddNumbers(numbers){
    sum = 0;
    numbers.forEach(function(number){
        if (number % 2 != 0) {// odd number
            sum += number;
        }
    });
    return sum;
}
```
demonstrates the importance of forEach:
```
sumOddNumbers([15, -5, 10])
```

Export
------
```
class Helper {
    constructor(word){
        this.word = word
            }

    upperCase(){
        return this.word.toUpperCase();
    }

    lowerCase(){
        return this.word.toLowerCase();
    }

    capitalize(){
        return this.word[0].toUpperCase() + this.word.substring(1).toLowerCase();
    }
}

module.exports = {Helper};
```

Import
------
```
const helper = require("./helper.js");

word = "monkey"
h = new helper.Helper(word)
console.log(`${h.capitalize()}`)
```

DOM interaction
---------------
First install `jsdom`:
```
$ npm install jsdom
```
Now you can use it as follows:
```
const jsdom = require("jsdom");

const dom = new jsdom.JSDOM(`<div>Hello World!</div>`);
const document = dom.window.document;
const div = document.querySelector("div");
if (div){
    console.log(`div.textContent = ${div.textContent}`); // "Hello World!"
}
```