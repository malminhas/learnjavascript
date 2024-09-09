// Project II: Todo Manager
// -----------------------
// In this Project you're asked to create an abstraction on top of Fetch to 
// make it easier to encapsulate an API thus:
//
//  const API = new MyAPI();
//  API.setBaseUrl("http://api.learnjavascript.online/demo");
//
//  API.get("/notifications/new.json")
//  .then(data => {
//    console.log(data.count);
//  });
//
//  API.post("/food.json", {
//    food: "Pasta"
//  })
//  .then(data => {
//    console.log(data);
//  })

// Not ES6 compliant
// Node.js is different from browser:
// https://flaviocopes.com/node-difference-browser/

//node-fetch was converted to be a ESM only package in version 3.0.0-beta.10. 
//node-fetch is an ESM-only module - you are not able to import it with require.
//const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

class Backend {
    //do not modify the constructor
    constructor(){
        this.baseUrl = '';
    }

    setBaseUrl(baseUrl){
        this.baseUrl = baseUrl;
    }

    getBaseUrl(){
        return this.baseUrl;
    }

    get(uri){
        let url = this.baseUrl + uri;
        return fetch(url,{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(resolve => resolve.json())
    }

    post(uri,data){
        let url = this.baseUrl + uri;
        return fetch(url,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    food: data.food
                })
            })
            .then(resolve => resolve.json())
    }
}

/*
//sample usage
const API = new Backend();
API.setBaseUrl("https://api.learnjavascript.online/demo");
console.log(API.getBaseUrl());

API.get("/notifications/new.json")
.then(data => {
    console.log(data.count);
});

API.post("/food.json", {
    food: "Pasta"
})
.then(data => {
    console.log(data);
})
*/

module.exports = {Backend}