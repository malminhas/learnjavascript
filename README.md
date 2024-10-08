LearnJavaScript
===============
Some notes and working code examples for JavaScript course at [learnjavascript.online](https://learnjavascript.online).
The code contains a representative sample of all the lessons numbered with integrated comments.  You run them like this:
```
$ node learnJavaScript.js
```
The project files correspond to the four extended projects I,II,III,IV in the course.  You run them as follows:
```
$ node projectI.js
```

Installation and set up
-----------------------
You will need to install node.js as follows:
```
$ brew install node
```
That will get you node v22.2.0.
You then need to install nvm using the instructions [here](https://medium.com/@priscillashamin/how-to-install-and-configure-nvm-on-mac-os-43e3366c75a6)
Then follow the instructions [here](https://stackoverflow.com/questions/68774489/punycode-is-deprecated-in-npm-what-should-i-replace-it-with) to ensure you are on the LTS version of node:
```
$ nvm install 20.10.0
$ nvm use 20.10.0
$ node --version
v20.10.0
```
You need to install one of the dependencies from github as follows:
```
$ npm install git+https://github.com/jadjoubran/learnjavascript-online-npm
```

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
Note comments in code about differences in export/import between ES6 and node.js environment.
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
For node.js `import` doesn't work and you need to use `require`.
```
const helper = require("./helper.js");

word = "monkey"
h = new helper.Helper(word)
console.log(`${h.capitalize()}`)
```

DOM interaction
---------------
For node.js environment you first need to install `jsdom`:
```
$ npm install jsdom
```
Now you can use it as follows to mimic :
```
const jsdom = require("jsdom");

const dom = new jsdom.JSDOM(`<div>Hello World!</div>`);
const document = dom.window.document;
const div = document.querySelector("div");
if (div){
    console.log(`div.textContent = ${div.textContent}`); // "Hello World!"
}
```
