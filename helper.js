// See: https://stackoverflow.com/questions/38296667/getting-unexpected-token-export
// NodeJS uses CommonJS Module syntax (module.exports) not ES6 module syntax (export keyword).

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